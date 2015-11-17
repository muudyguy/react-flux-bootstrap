var render = require('react-dom').render;
var reactRouter = require('react-router');

var Router = reactRouter.Router;
var Route = reactRouter.Route;
var React = require('react');

var App = React.createClass({
	render: function() {
		return (
			<div>
			</div>
		)
	}
});

render((
  <Router>
    <Route path="/" component={App}>
      
    </Route>
  </Router>
), document.getElementById('container'));