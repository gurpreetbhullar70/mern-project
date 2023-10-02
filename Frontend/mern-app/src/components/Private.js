import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const Private = () => {
    const auth = localStorage.getItem('user');
    return auth ? <Outlet /> : <Navigate to='/register' />
    
  
}
