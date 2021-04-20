import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white">
            {/* Grid container */}
            <div className="container p-4">
                {/* Section: Social media */}
                <section className="mb-4">
                    {/* Facebook */}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://facebook.com/shakilbd0" role="button"><i className="fab fa-facebook-f" /></a>
                    {/* Linkedin */}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/shakilahmedchowdhury/" role="button"><i className="fab fa-linkedin-in" /></a>
                    {/* Github */}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/shakil2chowdhury" role="button"><i className="fab fa-github" /></a>
                </section>
                {/* Section: Social media */}
                {/* Section: Form */}
                <section className>
                    <form action>
                        {/*Grid row*/}
                        <div className="row d-flex justify-content-center">
                            {/*Grid column*/}
                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-md-5 col-12">
                                {/* Email input */}
                                <div className="form-outline form-white mb-4">
                                    <input type="email" id="form5Example2" className="form-control" />
                                    <label className="form-label" htmlFor="form5Example2">Email address</label>
                                </div>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-auto">
                                {/* Submit button */}
                                <button onClick={() => {alert('Thanks For Subscribe Us')}} type="submit" className="btn btn-outline-light mb-4">
                                    Subscribe
                  </button>
                            </div>
                            {/*Grid column*/}
                        </div>
                        {/*Grid row*/}
                    </form>
                </section>
                <section id="contact" className="mb-4">
                    <p>
                        We provide best services in mobile repair industry.
                    </p>
                </section>
                <section className>
                </section>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2021 Copyright 
          <a className="text-white" href="https://mobofix.com/"> MOBOFIX</a>
            </div>

        </footer>
    );
};

export default Footer;