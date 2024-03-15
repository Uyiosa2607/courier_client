import { Link } from "react-router-dom"

export default function Header(){
    return (
        <>
            <div className="container-fluid bg-dark">
                <div className="row py-2 px-lg-5">
                    <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center text-white">
                            <small><i className="fa fa-phone-alt mr-2" />+012 345 6789</small>
                            <small className="px-3">|</small>
                            <small><i className="fa fa-envelope mr-2" />freightexperts.online</small>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-white px-2" href>
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="text-white px-2" href>
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="text-white px-2" href>
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a className="text-white px-2" href>
                                <i className="fab fa-instagram" />
                            </a>
                            <a className="text-white pl-2" href>
                                <i className="fab fa-youtube" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar Start */}
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
                    <Link href="index.html" className="navbar-brand ml-lg-3">
                        <h1 className="m-0 display-5 text-uppercase text-primary"><i className="fa fa-truck mr-2" />freight experts</h1>
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav m-auto py-0">
                            <Link to="/" ><a className="nav-item nav-link active">Home</a></Link>
                            <Link to="/about" ><a className="nav-item nav-link">About</a></Link>
                            <Link to="/contact" ><a  className="nav-item nav-link">Contact</a></Link>
                        </div>
                        <a  className="btn btn-primary py-2 px-4 d-none d-lg-block">Get A Quote</a>
                    </div>
                </nav>
            </div>
            {/* Navbar End */}
            {/* Header Start */}
        </>
    )
}