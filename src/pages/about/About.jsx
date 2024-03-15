import Footer from "../../components/Footer";
import Header from "../../components/Header";
import about_img from "/about.jpg"

export default function About(){
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
            {/* Topbar Start */}
            <Header/>
            {/* About Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 pb-4 pb-lg-0">
                            <img className="img-fluid w-100" src={about_img} alt="" />
                            <div className="bg-primary text-dark text-center p-4">
                                <h3 className="m-0">25+ Years Experience</h3>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <h6 className="text-primary text-uppercase font-weight-bold">About Us</h6>
                            {/* <h1 className="mb-4">Trusted &amp; Faster Logistic Service Provider</h1> */}
                            <p className="mb-4">freight experts Logistics, we deliver our customers – Legal, Medical, Industrial, Automotive Industry to prosper by delivering their products on time in a professional manner. Our company will continuously challenge ourselves to exceed our customers’ expectations by providing leading edge courier and messenger solutions to their needs. freight experts Logistics  is committed to total customer satisfaction. We know that your courier and shipping needs changes, so we offer the customization necessary to satisfy your unique delivery requirements. Your delivery deadlines will be met with professional, speedy, efficient, reliable and individual service. We make it our aim to maintain customers satisfied with our delivery service. It is this superior customer service that continues to be the hallmark of our courier and messenger success and is the main ingredient that prompts our long list of repeat customers to call us again and again with their most discriminating delivery and courier needs.</p>
                        </div>
                    </div>
                </div>
                {/* Video Modal */}
                <div className="modal fade" id="videoModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                                {/* 16:9 aspect ratio */}
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src id="video" allowscriptaccess="always" allow="autoplay" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Features Start */}
            <div className="container-fluid bg-secondary my-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img className="img-fluid w-100" src="img/feature.jpg" alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
            
                <Footer/>
           
            <a href="#" className="btn btn-lg btn-primary back-to-top"><i className="fa fa-angle-double-up" /></a>
        
        </div>

    )
}