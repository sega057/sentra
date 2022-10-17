// export {};
import { Auth } from "@aws-amplify/auth";

Auth.configure({
	Auth: {
		// REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
		// identityPoolId: "my id pool",

		// REQUIRED - Amazon Cognito Region
		region: "",

		// OPTIONAL - Amazon Cognito User Pool ID
		userPoolId: "",

		// OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
		userPoolWebClientId: "",

		// OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
		// mandatorySignIn: true,

		// OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
		// authenticationFlowType: "USER_SRP_AUTH",
	},

	Analytics: {
		disabled: true,
	},
});
