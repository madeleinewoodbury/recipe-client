import React from 'react';
import AuthState from './context/auth/AuthState';
import './App.css';

import Routes from './components/routing/Routes';

const App = () => (
  <AuthState>
    <Routes />
  </AuthState>
);

export default App;
