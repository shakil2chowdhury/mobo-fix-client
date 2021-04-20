import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://mobo-fix-server.herokuapp.com/getServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const deleteHandler = (event, id) => {
        fetch('https://mobo-fix-server.herokuapp.com/deleteService/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    event.target.parentNode.parentNode.parentNode.style.display = 'none'
                }
            })
    }
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
                                        <th scope="col">Service ID</th>
                                        <th scope="col">Service Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                {services.map(service =>
                                    <tbody key={service._id}>
                                        <tr>
                                            <th scope="row">{service._id}</th>
                                            <td>{service.serviceName}</td>
                                            <td>${service.servicePrice}</td>
                                            <td><button onClick={(e) => deleteHandler(e, service._id)} className="btn btn-secondary">Delete</button></td>
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

export default ManageServices;