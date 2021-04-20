import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import OrderList from '../OrderList/OrderList';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser.email)
    return (
        <section className="container-fluid">
            <div className="row admin-container">
                <div className="col-md-2 py-5 sidebar-admin">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <h1 className="text-center my-5">Welcome {sessionStorage.getItem('email')}</h1>
                    <h2 className="text-center my-2">Goto order list to manage orders.</h2>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;