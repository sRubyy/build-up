import React from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Navbar from './components/global/Navbar';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
