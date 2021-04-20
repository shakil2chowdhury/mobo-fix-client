import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState('')
    const [added, setAdded] = useState(false)

    const onSubmit = data => {
        const reviewData = {
            clientName: data.clientName,
            clientReview: data.clientReview,
            clientAvatar: imageUrl,
            clientEmail: sessionStorage.getItem('email'),
        }
        fetch('https://mobo-fix-server.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setAdded(true);
                };
            })
    };
    const handleImageUpload = (e) => {
        const imageData = new FormData()
        imageData.set('key', 'a59c77f7cce19a6af12a528420d40cb6')
        imageData.append('image', e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => setImageUrl(res.data.data.display_url))
            .catch(error => console.log(error))
    }

    return (
        <>
            <section className="container-fluid">
                <div className="row admin-container">
                    <div className="col-md-2 py-5 sidebar-admin">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-10">
                        <div>
                            <h1 className="text-center my-3">Review Our Services From Here</h1>
                            {added && <span className="text-success text-center">Your Feedback Has Been Added Successfully</span>}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-row d-flex">
                                    <div class="form-group col-md-5 ml-5">
                                        <label for="clientName">Your Name</label>
                                        <input class="form-control mb-2" id="clientName" placeholder="Client Name" {...register("clientName")} />
                                        <label for="serviceImage">Service Image</label>
                                        <input name="clientAvatar" type="file" onChange={handleImageUpload} className="form-control mb-2" />
                                        {errors.clientAvatar && <span className="d-block text-danger">* Image is required</span>}
                                        <input class="form-control my-2 btn btn-secondary" type="submit" />
                                    </div>
                                    {/* include validation with required or other standard HTML validation rules */}
                                    <div className="form-group col-md-7 mx-2">
                                        <label for="clientReview">Description</label>
                                        <textarea id="clientReview" className="form-control" rows="3" {...register("clientReview")}></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddReview;