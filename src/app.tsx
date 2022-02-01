import React from "react";
import {BrowserRouter as Router, Link, Routes} from "react-router-dom";
import {Route} from "react-router";
import {PrivateRoute} from "./private-route";
import {BtnLogout} from "./login/btn-logout";
import {SignInPage} from "./login/sign-in";
import {SignUpPage} from "./login/signup/sign-up";
import {ThemeBtn} from "./modules/theme-btn/theme-btn";

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={
					<PrivateRoute>
						<>
							<h1>Main app</h1>
							<BtnLogout />
						</>
					</PrivateRoute>
				} />
				<Route path="/login" element={<SignInPage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="*" element={<div>
					<h1>Not found</h1>
					<Link to="/">Go home</Link>
				</div>} />
			</Routes>
			<ThemeBtn/>
		</Router>
	);
}

// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.scss';
//
// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<Counter />
// 				<p>
// 					Edit <code>src/app.tsx</code> and save to reload.
// 				</p>
// 				<span>
//           <span>Learn </span>
//           <a
// 			  className="App-link"
// 			  href="https://reactjs.org/"
// 			  target="_blank"
// 			  rel="noopener noreferrer"
// 		  >
//             React
//           </a>
//           <span>, </span>
//           <a
// 			  className="App-link"
// 			  href="https://redux.js.org/"
// 			  target="_blank"
// 			  rel="noopener noreferrer"
// 		  >
//             Redux
//           </a>
//           <span>, </span>
//           <a
// 			  className="App-link"
// 			  href="https://redux-toolkit.js.org/"
// 			  target="_blank"
// 			  rel="noopener noreferrer"
// 		  >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
// 			  className="App-link"
// 			  href="https://react-redux.js.org/"
// 			  target="_blank"
// 			  rel="noopener noreferrer"
// 		  >
//             React Redux
//           </a>
//         </span>
// 			</header>
// 		</div>
// 	);
// }
//
// export default App;
