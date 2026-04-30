import React from 'react';
import LoginPage from './signin/page';
import Navbar from '../components/shared/Navbar';

const AuthLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default AuthLayout;