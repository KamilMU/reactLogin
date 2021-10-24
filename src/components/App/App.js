import React from 'react';
import './styles.scss';
import Header from '../Header';
import { navigation } from '../../navigation/navigation';

export function App() {
  return (
    <div className="app">
      <Header />
      {navigation}
    </div>
  )
}