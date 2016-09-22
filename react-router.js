import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

var App = React.createClass({
	render : function(){
		return (
			<div>
				<header>
					<ul>
						<li>
							<Link to="/posts" activeClassName="active" activeStyle={{color:'#c00'}}>Post</Link>
						</li>
						<li>
							<Link to="/about" activeClassName="active" activeStyle={{color:'#c00'}}>About</Link>
						</li>
					</ul>
				</header>
				{this.props.children}
			</div>
		)
	}
});

var Posts = React.createClass({
	render : function(){
		return (
			<div>
				<ul>
					<li>haha</li>
					<li>haha2</li>
					<li>haha3</li>
				</ul>
			</div>
		)
	}
});

var About = React.createClass({
	render : function(){
		return (
			<div>
				<p>about page</p>
			</div>
		)
	}
})

let routes = <Route path="/" component={App}>
				<IndexRoute component={Posts} />
				<Route path="posts" component={Posts} />
				<Route path="about" component={About} />
			</Route>;

render((
	<Router routes={routes} history={hashHistory} />
),document.getElementById('content'));
