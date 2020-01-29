import React, { Component } from 'react';
import Pages from './app/pages/page';
import { BrowserRouter as Router, Route } from 'react-router-dom';
/* import Login from './app/pages/login/login'; */
import { Provider } from 'react-redux';
import './app.css';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <Router>
            {/* <div className="loader-bg">
						<div className="loader-track">
							<div className="loader-fill"></div>
						</div>
					</div> */}
            <Route exact path='/panel' component={Pages} />
            {/* {localStorage.getItem('token') ? (
							<Route exact path="/panel" component={Pages} />
						) : (
							<Redirect from="/panel" to="/login" />
						)}
						{localStorage.getItem('token') ? (
							<Redirect from="/panel" to="/guia" />
						) : (
							<Route exact path="/login" component={Login} />
						)} */}
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
