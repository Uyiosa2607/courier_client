import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(){


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('courier_services', 'template_ht4780h', form.current, 'X16ZK_Fas-bbeQ4Ba')
            .then((result) => {
                alert("message sent");
            }, (error) => {
                alert("something went wrong please reload page and try again")
            });
    };

    return (
        <div>
            <meta charSet="utf-8" />
            <title>Logistics Company Website</title>
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <meta content="Free HTML Templates" name="keywords" />
            <meta content="Free HTML Templates" name="description" />
            {/* Favicon */}
            <link href="img/favicon.ico" rel="icon" />
            {/* Google Web Fonts */}
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            {/* Font Awesome */}
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
            {/* Libraries Stylesheet */}
            <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
            {/* Customized Bootstrap Stylesheet */}
            <link href="css/style.css" rel="stylesheet" />
            {/* Topbar Start */}
            <Header/>
            {/* Contact Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 pb-4 pb-lg-0">
                            <div className="bg-primary text-dark text-center p-4">
                                <h4 className="m-0"><i className="fa fa-map-marker-alt text-white mr-2" />410 Golf Course Dr, Charlottesville, USA</h4>
                            </div>
                            <iframe style={{ width: '100%', height: '470px' }}
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.4263948555896!2d-78.4767!3d38.0293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b3862f80d39f57%3A0xd339a1ed0d227bd4!2s410%20Golf%20Course%20Dr%2C%20Charlottesville%2C%20VA%2022902%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                frameBorder="0"
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex="0"
                            />
                        </div>
                        <div className="col-lg-7">
                            <h6 className="text-primary text-uppercase font-weight-bold">Contact Us</h6>
                            <h1 className="mb-4">Contact For Any Queries</h1>
                            <div className="contact-form bg-secondary" style={{ padding: '30px' }}>
                                <div id="success" />
                                <form ref={form} onSubmit={sendEmail} name="sentMessage" id="contactForm" noValidate="novalidate">
                                    <div className="control-group">
                                        <input type="text" name="user_name" className="form-control border-0 p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input type="email" name="user_email" className="form-control border-0 p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input type="text" name="email_details" className="form-control border-0 p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <textarea name="message" className="form-control border-0 py-3 px-4" rows={3} id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Send
                                            Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
            {/* Footer Start */}
                <Footer/>
            {/* Footer End */}
            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary back-to-top"><i className="fa fa-angle-double-up" /></a>
            {/* JavaScript Libraries */}
            {/* Contact Javascript File */}
            {/* Template Javascript */}
        </div>

    )
}