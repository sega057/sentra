import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { App } from "./app";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";

const container = document.getElementById("root");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);
