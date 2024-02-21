import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Contact(){
    return (
        <div>
            <meta charSet="utf-8" />
            <title>FASTER - Logistics Company Website Template</title>
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
                                <h4 className="m-0"><i className="fa fa-map-marker-alt text-white mr-2" />123 Street, New York, USA</h4>
                            </div>
                            <iframe style={{ width: '100%', height: '470px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
                        </div>
                        <div className="col-lg-7">
                            <h6 className="text-primary text-uppercase font-weight-bold">Contact Us</h6>
                            <h1 className="mb-4">Contact For Any Queries</h1>
                            <div className="contact-form bg-secondary" style={{ padding: '30px' }}>
                                <div id="success" />
                                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                    <div className="control-group">
                                        <input type="text" className="form-control border-0 p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input type="email" className="form-control border-0 p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control border-0 p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <textarea className="form-control border-0 py-3 px-4" rows={3} id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
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