import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetch('https://mobo-fix-server.herokuapp.com/getServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleOrder = (id) => {
        history.push(`/checkout/${id}`);
    }



    return (
        <div className="service-main pb-5">
            <h1 className="text-center pt-4">Get Your Repair Started</h1>
            <section className="text-center mb-4 d-md-flex d-sm-block pt-4 mb-4">
                {
                    services.map(service =>
                        <div key={service._id} className="section-card col-md-4 col-sm-12 w-25 mx-auto">
                            <img src={service.serviceImageUrl} className="w-100 img-height" alt="" />
                            <div className="section-card-text">
                                <h4 className="mt-3">{service.serviceName}</h4>
                                <p>{service.serviceDescription.substring(0, 100)}....</p>
                                <button onClick={() => handleOrder(service._id)} className="btn btn-secondary">Order Now</button>
                            </div>
                        </div>
                    )
                }
            </section>
        </div>
    );
};

export default Services;