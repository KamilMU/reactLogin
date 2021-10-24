import React from 'react';
import { useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton';
import './styles.scss';

export function ProfileScreen() {
  const username = useSelector(state => state.username);
  const authenticated = useSelector(state => state.authenticated);
  
  return (
    <div className="profile-screen">
      <h1>Hello, {username}!</h1>
      {authenticated && (<LogOutButton title="Выйти" />)}
    </div>
  )
}