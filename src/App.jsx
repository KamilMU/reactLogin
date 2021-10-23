import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Header from './components/Header.jsx';
import Navigation from './navigation/Navigation.jsx';

export default function App() {
  const auth = useSelector(state => state.authenticated);

  return (
    <div className="app">
      <Header />
      <Navigation />
    </div>
  )
}
