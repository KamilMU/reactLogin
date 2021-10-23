import React from 'react'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { logout } from '../redux/actions';
import './LogOutButton.scss';

function LogOutButton({ history }) {
  const dispatch = useDispatch();

  return (
    <div
      className="log-out"
      onClick={() => {
        dispatch(logout());
        history.push('/');
      }}>
      <span>Выйти</span>
    </div>
  )
}

export default withRouter(LogOutButton);
