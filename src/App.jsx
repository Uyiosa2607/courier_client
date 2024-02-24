import "./index.css"
import { useState } from "react"
import Card from "./components/card.jsx/Card";
import about_image from "/about.jpg"
import feature_image from "/feature.jpg"
import Header from "./components/Header";
import Footer from "./components/Footer";
import spinner from "/loading.svg"
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hryfvqqdcwlcarvlxdoy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyeWZ2cXFkY3dsY2Fydmx4ZG95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxMTYxMjQsImV4cCI6MjAyMzY5MjEyNH0.XhZa6DDUNjpSBCYxCApgHrEKm3gIIRdoPTLxPo8086Q';

export const supabase = createClient(supabaseUrl, supabaseKey);

function App() {

  const [track, setTrack] = useState(false);

  const [trackNum, setTrackNum] = useState("");

  const [data, setData] = useState([])

  const [loading, setLoading] = useState(false)

  const [dismiss, setDismiss] = useState(true)

  const [err, setErr] = useState(null)

  async function HandleSubmit() {
    if (trackNum.length < 2) return;

    try {
      setLoading(true);
      setErr(null);

      const { data, error } = await supabase
        .from('Shipments')
        .select('*')
        .eq('tracking_number', trackNum);

      setData(data[0]);
      setLoading(false);

      if (error) {
        setErr(true);
        setLoading(false);
        return;
      }

      if (!data[0] || !data[0].arrival_status) {
        setErr(true);
        setLoading(false);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }

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
      
      <Header />
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-primary mb-4">Safe &amp; Faster</h1>
          <h1 className="text-white display-3 mb-5">Logistics Services</h1>
          <div className="mx-auto" style={{ width: '100%', maxWidth: '600px' }}>
            <div className="input-group">
              <input onChange={(e) => setTrackNum(e.target.value)} value={trackNum} type="text" className="form-control border-light" style={{ padding: '30px' }} placeholder="Tracking Id" />
              <div className="input-group-append">
                <button onClick={HandleSubmit} data-target="#videoModal" data-toggle="modal" className="btn btn-primary px-3">Track &amp; Trace</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <img className="img-fluid w-100" src={about_image} alt="" />
              <div className="bg-primary text-dark text-center p-4">
                <h3 className="m-0">25+ Years Experience</h3>
              </div>
            </div>
          </div>
        </div>
        {/* Video Modal */}

        {
          dismiss && <div className="modal fade" id="videoModal" tabIndex={-1} role="dialog" style={{ display: "none" }} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                  <div className="embed-modal">
                    {/* <iframe className="embed-responsive-item" src id="video" allowscriptaccess="always" allow="autoplay" /> */}
                    {!loading && <Card data={data} error={err} />}
                    {
                      loading && <div className="spinner">
                        <img src={spinner} alt="loading icon" />
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

      </div>
      {/* About End */}
      {/*  Quote Request Start */}
      <div className="container-fluid bg-secondary my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 py-5 py-lg-0">
              <h6 className="text-primary text-uppercase font-weight-bold">Get A Quote</h6>
              <h1 className="mb-4">Request A Free Quote</h1>
              <div className="row">
                <div className="col-sm-4">
                  <h1 className="text-primary mb-2" data-toggle="counter-up">225</h1>
                  <h6 className="font-weight-bold mb-4">SKilled Experts</h6>
                </div>
                <div className="col-sm-4">
                  <h1 className="text-primary mb-2" data-toggle="counter-up">1050</h1>
                  <h6 className="font-weight-bold mb-4">Happy Clients</h6>
                </div>
                <div className="col-sm-4">
                  <h1 className="text-primary mb-2" data-toggle="counter-up">2500</h1>
                  <h6 className="font-weight-bold mb-4">Complete Deliveries</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bg-primary py-5 px-4 px-sm-5">
                <form className="py-5">
                  <div className="form-group">
                    <input type="text" className="form-control border-0 p-4" placeholder="Your Name" required="required" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control border-0 p-4" placeholder="Your Email" required="required" />
                  </div>
                  <div>
                    <button className="btn btn-dark btn-block border-0 py-3" type="submit">Get A Quote</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quote Request Start */}
      {/* Services Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary text-uppercase font-weight-bold">Our Services</h6>
            <h1 className="mb-4">Best Logistic Services</h1>
          </div>
          <div className="row pb-3">
            <div className="col-lg-3 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i className="fa fa-2x fa-plane text-dark pr-3" />
                <h6 className="text-white font-weight-medium m-0">Air Freight</h6>
              </div>
              <p>Ideal for larger shipments, we work with the best airlines in the world to guarantee you safe and quick delivery, with full tracking visibility, customs clearance, expert handling of shipping and regulatory paperwork. Our air freight service is second to none.</p>
              <a className="border-bottom text-decoration-none" href>Read More</a>
            </div>
            <div className="col-lg-3 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i className="fa fa-2x fa-ship text-dark pr-3" />
                <h6 className="text-white font-weight-medium m-0">Ocean Freight</h6>
              </div>
              <p>If there is not enough goods to fill a whole 20 foot, we suggest shipping less than a container´s capacity. Just pay attention to the following. Make sure your packaging keeps the shipping goods safe because you will be sharing container space with other shippers, and confirm the destination charge for LCL shipping before shipping the goods.</p>
              <a className="border-bottom text-decoration-none" href>Read More</a>
            </div>
            <div className="col-lg-3 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i className="fa fa-2x fa-truck text-dark pr-3" />
                <h6 className="text-white font-weight-medium m-0">Land Transport</h6>
              </div>
              <p>It is cost efficient with 24 to 48 hours transit time to major cities. This is a great option for delivery of sensitive products such as Pharmaceuticals and other merchandise.</p>
              <a className="border-bottom text-decoration-none" href>Read More</a>
            </div>

          </div>
        </div>
      </div>
      {/* Services End */}
      {/* Features Start */}
      <div className="container-fluid bg-secondary my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img className="img-fluid w-100" src={feature_image} alt="" />
            </div>
            <div className="col-lg-7 py-5 py-lg-0">
              <h6 className="text-primary text-uppercase font-weight-bold">Why Choose Us</h6>
              <h1 className="mb-4">Faster, Safe and Trusted Logistics Services</h1>
              <p className="mb-4">With Wagon Express Courier’ scheduled delivery service, our customers get daily pick-ups for their many types of repetitive deliveries. Whether it’s bank deposits, daily warehouse sweeps, interoffice deliveries or more, Wagon Express Courier is ready to be there when you need us.</p>
              <ul className="list-inline">
                <li><h6><i className="far fa-dot-circle text-primary mr-3" />Best In Industry</h6>
                </li><li><h6><i className="far fa-dot-circle text-primary mr-3" />Emergency Services</h6></li>
                <li><h6><i className="far fa-dot-circle text-primary mr-3" />24/7 Customer Support</h6></li>
              </ul>
              <a href className="btn btn-primary mt-3 py-2 px-4">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {/* Footer End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary back-to-top"><i className="fa fa-angle-double-up" /></a>
      {/* JavaScript Libraries */}
      {/* Contact Javascript File */}
      {/* Template Javascript */}
    </div>

  )
}

export default App
