const path = require("path");

const { ProvidePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const port = process.env.PORT ?? 3000;
const isProd = process.env.NODE_ENV === "production";

const optimization = () => {
	const config = {
		minimize: isProd,
		splitChunks: {
			// https://webpack.js.org/plugins/split-chunks-plugin/
			chunks: "all", // TODO test the benefits
		},
	};

	if (isProd) {
		config.minimizer = [new CssMinimizerPlugin(), "..."];
	}

	return config;
};

module.exports = {
	mode: isProd ? "production" : "development",
	entry: path.resolve(__dirname, "src", "index.tsx"),
	output: {
		filename: "[name].[contenthash].bundle.js",
		path: path.resolve(__dirname, "build"),
		clean: true,
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"],
		alias: {
			// With ForkTsCheckerWebpackPlugin should be the same as in tsconfig
			"@": path.resolve(__dirname, "src"),
			"@components": path.resolve(__dirname, "src", "components"),
		},
	},
	devServer: {
		port,
		hot: !isProd,
		open: true,
		historyApiFallback: true,
	},
	devtool: isProd ? false : "source-map",
	optimization: optimization(),
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public", "index.html"),
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].bundle.css",
		}),
		new ProvidePlugin({ React: "react" }),
		new ForkTsCheckerWebpackPlugin({
			typescript: {
				diagnosticOptions: {
					semantic: true,
					syntactic: true,
				},
				mode: "write-references",
			},
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "public", "favicon"),
					to: "favicon",
				},
				{
					from: path.resolve(__dirname, "public", "robots.txt"),
					to: "./",
				},
			],
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|ts)x?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-typescript",
							"@babel/preset-react",
						],
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					isProd ? MiniCssExtractPlugin.loader : "style-loader",
					"css-loader",
					"postcss-loader",
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|webp|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
		],
	},
};
