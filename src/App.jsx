import { useState } from "react";
import { Plane, Ship, Truck, CheckCircle, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "./utils/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Header from "./components/sys/Header";
import Footer from "./components/sys/Footer";
import Map from "./components/map/map";
import { Link } from "react-router-dom";

function App() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [trackingData, setTrackingData] = useState(null);

  const handleTracking = async () => {
    if (trackingNumber.length < 1)
      return alert("Please enter tracking number!");
    setIsModalOpen(true);
    setIsLoading(true);
    try {
      const response = await supabase
        .from("Shipments")
        .select("*")
        .eq("tracking_number", trackingNumber);
      if (response.error) return;
      setTrackingData(response.data[0]);
      return;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-orange-50">
      {/* Header */}
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <div className="bg-orange-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-800">
              Safe & Faster
            </h1>
            <h2 className="text-3xl md:text-4xl mb-8 text-orange-700">
              Logistics Services
            </h2>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <Input
                  type="text"
                  placeholder="Tracking ID"
                  value={trackingNumber}
                  onChange={(e) =>
                    setTrackingNumber(e.target.value.toUpperCase())
                  }
                  className="flex-grow"
                />
                <Button
                  onClick={() => {
                    handleTracking();
                  }}
                  className="ml-2"
                >
                  Track & Trace
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src="/img/header.jpg"
                  alt="About Us"
                  className="rounded-lg shadow-lg"
                />
                <div className="bg-orange-600 text-white text-center p-4 mt-4 rounded">
                  <h3 className="text-xl font-bold">25+ Years Experience</h3>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h2 className="text-3xl font-bold mb-4 text-orange-800">
                  About Our Company
                </h2>
                <p className="mb-4 text-orange-900">
                  With over 25 years of experience in the logistics industry,
                  we&apos;ve built a reputation for reliability, efficiency, and
                  customer satisfaction. Our team of experts is dedicated to
                  providing the best logistics solutions for businesses of all
                  sizes.
                </p>
                <Link to="/about">
                  <Button>Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="py-16 bg-orange-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-orange-800">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Plane,
                  title: "Air Freight",
                  description:
                    "Ideal for larger shipments, we work with the best airlines in the world to guarantee you safe and quick delivery.",
                },
                {
                  icon: Ship,
                  title: "Ocean Freight",
                  description:
                    "If there is not enough goods to fill a whole 20 foot container, we suggest shipping less than a container's capacity.",
                },
                {
                  icon: Truck,
                  title: "Land Transport",
                  description:
                    "It is cost efficient with 24 to 48 hours transit time to major cities. Great for delivery of sensitive products.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="text-center bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="bg-orange-600 text-white p-4 rounded-full inline-block mb-4">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-orange-800">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-orange-900">{service.description}</p>
                  {/* <a
                    href="#"
                    className="text-orange-600 hover:text-orange-700 font-semibold"
                  >
                    Read More
                  </a> */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src="/img/feature.jpg"
                  alt="Features"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h2 className="text-3xl font-bold mb-4 text-orange-800">
                  Why Choose Us
                </h2>
                <h3 className="text-2xl mb-4 text-orange-700">
                  Faster, Safe and Trusted Logistics Services
                </h3>
                <p className="mb-6 text-orange-900">
                  With Freight Experts Logistics Courier scheduled delivery
                  service, our customers get daily pick-ups for their many types
                  of repetitive deliveries. Whether it&apos;s bank deposits,
                  daily warehouse sweeps, interoffice deliveries or more,
                  we&apos;re ready to be there when you need us.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="text-orange-600 mr-2" />
                    <span className="text-orange-900">Best In Industry</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-orange-600 mr-2" />
                    <span className="text-orange-900">Emergency Services</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-orange-600 mr-2" />
                    <span className="text-orange-900">
                      24/7 Customer Support
                    </span>
                  </li>
                </ul>
                {/* <Button>Learn More</Button> */}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Tracking Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-[95%] h-[90vh] rounded-lg p-2 overflow-y-scroll m:w-[680px] mx-auto">
          <DialogHeader>
            <DialogTitle>Tracking Information</DialogTitle>
          </DialogHeader>
          {isLoading ? (
            <div className="flex items-center justify-center h-20">
              <Loader className="animate-spin text-orange-600" />
            </div>
          ) : trackingData ? (
            <div className="space-y-4">
              <div className="w-full h-64 bg-orange-100 rounded-lg">
                <Map data={trackingData} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 bg-orange-50 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold text-orange-800">
                    SENDER INFO
                  </h2>
                  <p>
                    <span className="font-medium text-orange-700">
                      Sender Name:
                    </span>{" "}
                    <span className="text-orange-900">
                      {trackingData.sender_name}
                    </span>
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Sender Number:
                    </span>{" "}
                    <span className="text-orange-900">
                      {trackingData.sender_number}
                    </span>
                  </p>
                </div>
                <div className="space-y-2 bg-orange-50 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold text-orange-800">
                    RECEIVER INFO
                  </h2>
                  <p>
                    <span className="font-medium text-orange-700">
                      Receiver Name:
                    </span>{" "}
                    <span className="text-orange-900">
                      {trackingData.receiver_name}
                    </span>
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Receiver Number:
                    </span>{" "}
                    <span className="text-orange-900">
                      {trackingData.receiver_number}
                    </span>
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Receiver Address:
                    </span>{" "}
                    <span className="text-orange-900">
                      {trackingData.receiver_address}
                    </span>
                  </p>
                </div>
              </div>
              <div className="space-y-2 bg-orange-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-orange-800">
                  PACKAGE INFORMATION
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  <p>
                    <span className="font-medium text-orange-700">
                      Package weight:
                    </span>{" "}
                    <span className="text-orange-900">
                      {trackingData.weight}
                    </span>
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Shipping Method:
                    </span>{" "}
                    <span className="text-orange-900">
                      {trackingData.method}
                    </span>
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">Status:</span>{" "}
                    <span className="text-orange-900">
                      {trackingData.status}
                    </span>
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Current Location:
                    </span>{" "}
                    <span className="text-orange-900">
                      {trackingData.current_location}
                    </span>
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Package Type:
                    </span>{" "}
                    <span className="text-orange-900">
                      {trackingData.package_type}
                    </span>
                  </p>
                </div>
                <p>
                  <span className="font-medium text-orange-700">
                    Description:
                  </span>{" "}
                  <span className="text-orange-900">{trackingData.desc}</span>
                </p>
              </div>
            </div>
          ) : (
            <p className="text-red-500 text-center p-4">
              No Shipments Found with the provided Tracking Number. Please
              provide a valid Tracking Number.
            </p>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
