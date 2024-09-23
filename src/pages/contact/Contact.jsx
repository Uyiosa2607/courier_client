import Header from "@/components/sys/Header";
import Footer from "@/components/sys/Footer";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "courier_services",
        "template_ht4780h",
        form.current,
        "X16ZK_Fas-bbeQ4Ba"
      )
      .then(
        (result) => {
          alert("message sent");
        },
        (error) => {
          alert("something went wrong please reload page and try again");
        }
      );
  };

  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 sm:py-16">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              {/* <div className="bg-orange-600 text-white text-center p-4 mb-4 rounded-lg">
                <h4 className="text-lg sm:text-xl font-semibold">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  410 Golf Course Dr, Charlottesville, USA
                </h4>
              </div> */}
              <div className="w-full h-[470px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.4263948555896!2d-78.4767!3d38.0293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b3862f80d39f57%3A0xd339a1ed0d227bd4!2s410%20Golf%20Course%20Dr%2C%20Charlottesville%2C%20VA%2022902%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h6 className="text-orange-600 text-sm font-bold uppercase mb-2">
                Contact Us
              </h6>
              <h1 className="text-2xl sm:text-3xl font-bold text-orange-800 mb-4">
                Contact For Any Queries
              </h1>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="mb-4">
                  <input
                    type="text"
                    name="user_name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="user_email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="email_details"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
