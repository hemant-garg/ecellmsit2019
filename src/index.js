import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Blogs from "./components/Blogs/Blogs";
import SingleBlog from "./components/SingleBlog/SingleBlog";

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/gallery" component={Gallery} />
				<Route path="/blog/:id" component={SingleBlog} />
				<Route path="/blogs" component={Blogs} />
				<Route path="/" component={Home} />
			</Switch>
		</div>
	</BrowserRouter>,
	document.getElementById("root")
);
registerServiceWorker();
