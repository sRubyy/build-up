import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './app.scss';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="global-nav">
          Nav
          <Link to={'/'}>Home</Link>
          <Link to={'/cart'}>Cart</Link>
        </div>
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
