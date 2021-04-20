import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrderList from '../OrderList/OrderList';
import './Sidebar.css'
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false)
    const sessionMail = sessionStorage.getItem('email')
    useEffect(() => {
        fetch('https://mobo-fix-server.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: sessionMail })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])
    return (
        <div className="flex-column sidebar-main">
            {isAdmin && <div className="mt-2"><a href="/AllOrderList">Order List</a></div>}
            {isAdmin || <div className="mt-2"><a href="/orderList">My Orders</a></div>}
            {isAdmin && <div className="mt-2"><a href="/addServices">Add Services</a></div>}
            {isAdmin && <div className="mt-2"><a href="/manageServices">Manage Services</a></div>}
            {isAdmin && <div className="mt-2"><a href="/makeAdmin">Make Admin</a></div>}
            {isAdmin || <div className="mt-2"><a href="/addReview">Add Review</a></div>}
        </div>
    );
};

export default Sidebar;