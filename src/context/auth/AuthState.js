import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
  CLEAR_ERROR,
} from '../types';

const AuthState = (props) => {
  const initialState = {
    user: null,
    isAuthenticated: false,
    error: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Register user, save to local storage
  const register = async (formData) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (
      users.length > 0 &&
      users.filter((user) => user.email === formData.email).length > 0
    ) {
      dispatch({ type: REGISTER_FAIL, payload: 'User already exists' });
    } else {
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      dispatch({ type: REGISTER_SUCCESS, payload: newUser });
    }
  };

  // Login user
  const login = async (formData) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.length > 0) {
      const user = users.filter((item) => item.email === formData.email);
      if (user && user[0].password === formData.password) {
        dispatch({ type: LOGIN_SUCCESS, payload: user[0] });
      } else {
        dispatch({ type: LOGIN_FAIL, payload: 'Invalid Credentials' });
      }
    } else {
      dispatch({ type: LOGIN_FAIL, payload: 'Invalid Credentials' });
    }
  };

  // Clear error messages
  const clearError = () => dispatch({ type: CLEAR_ERROR });

  // Logout user
  const logout = () => dispatch({ type: LOGOUT });

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        register,
        login,
        clearError,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
