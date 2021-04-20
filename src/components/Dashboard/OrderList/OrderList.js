import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './OrderList.css'


const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const sessionMail = sessionStorage.getItem('email');
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://mobo-fix-server.herokuapp.com/getOrders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: sessionMail })
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <>
            <section className="container-fluid">
                <div className="row admin-container">
                    <div className="col-md-2 py-5 sidebar-admin">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-10">
                        <div className="order-list">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Order Number</th>
                                        <th scope="col">Client Email</th>
                                        <th scope="col">Service Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                {orders.map(order =>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{order._id}</th>
                                            <td>{order.email}</td>
                                            <td>{order.serviceName}</td>
                                            <td>${order.totalPrice}</td>
                                            <td><button className="btn btn-secondary">{order.orderStatus}</button></td>
                                        </tr>
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OrderList;