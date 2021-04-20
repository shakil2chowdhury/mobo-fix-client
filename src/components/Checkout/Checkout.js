import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import Navbar from '../Home/Navbar/Navbar';
import './Checkout.css'
import ProcessPayment from './ProcessPayment';

const Checkout = () => {
    const history = useHistory();

    const { serviceId } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`https://mobo-fix-server.herokuapp.com/checkout/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))

    }, [serviceId])
    const { serviceName, servicePrice } = service;

    const handlePaymentSuccess = paymentId => {
        const orderDetail = {
            ...loggedInUser,
            serviceName: serviceName,
            totalPrice: servicePrice,
            paymentId,
            orderTime: new Date(),
            orderStatus: "pending",
        }
        fetch('https://mobo-fix-server.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetail)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    history.push('/admin')
                }
            })


    }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="mt-5 text-center">Review Order Details</h1>
            <div className="d-flex">
                <div className="checkout-section container col-md-5 mx-auto">
                    <br></br>
                    <br></br>
                    <div className="checkout-list">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Serial</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{serviceName}</td>
                                    <td>${servicePrice}</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>Total</td>
                                    <td>${servicePrice}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="container col-md-6 mx-auto mt-5">
                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                </div>
            </div>
        </div>
    );
};

export default Checkout;