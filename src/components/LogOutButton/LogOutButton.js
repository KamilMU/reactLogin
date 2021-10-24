import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions';
import './styles.scss';

export function LogOutButton({ title, history }) {
  const dispatch = useDispatch();

  return (
    <div
      className="log-out"
      onClick={() => {
        dispatch(logout());
        history.push('/');
      }}>
      <span>{title}</span>
    </div>
  )
}