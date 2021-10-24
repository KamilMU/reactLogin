import React from 'react';
import LogOutButton from '../LogOutButton';
import './styles.scss';

export function NotAuthenticatedScreen() {
  return (
    <div className="not-auth-screen">
      <div className="not-auth-screen__container">
        Pls login, so you could see this page <LogOutButton title="go back" />
      </div>
    </div>
  )
}
