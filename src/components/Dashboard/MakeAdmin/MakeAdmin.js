import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [email, setEmail] = useState([])
    const [adminAdded, setAdminAdded] = useState(false)
    const handleSubmit = () => {
        if (email !== '') {
            fetch('https://mobo-fix-server.herokuapp.com/addNewAdmin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email })
            })
                .then(res => res.json())
                .then(data => setAdminAdded(data))
        }
        else {
            console.log('Insert Email')
        }
    }

    console.log(adminAdded)

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    return (
        <>
            <section className="container-fluid">
                <div className="row admin-container">
                    <div className="col-md-2 py-5 sidebar-admin">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-10 py-5 sidebar-admin bg-white text-center">
                        <h3 className="text-center text-primary">Please Give Email Address Of The New Admin.</h3>
                        <input onBlur={handleEmail} type="text" placeholder="Put Email Address Here" />
                        <button onClick={handleSubmit} className="btn btn-secondary">Make Admin</button>
                        {adminAdded && <p className="text-success">Admin Added Successfully.</p>}
                    </div>
                </div>
            </section>
        </>
    );
};

export default MakeAdmin;