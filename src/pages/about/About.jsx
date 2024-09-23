import Footer from "@/components/sys/Footer";
import Header from "@/components/sys/Header";

export default function About() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* About Section */}
        <section className="py-8 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <div className="relative">
                  <img
                    src="/img/about.jpg"
                    alt="About Freight Experts"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-orange-600 text-white text-center p-2 sm:p-4">
                    <h3 className="text-base sm:text-xl font-bold">
                      25+ Years Experience
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:pl-12">
                <h6 className="text-orange-600 text-sm font-bold uppercase mb-2">
                  About Us
                </h6>
                <h1 className="text-2xl sm:text-3xl font-bold text-orange-800 mb-4">
                  Trusted & Faster Logistic Service Provider
                </h1>
                <p className="text-orange-900 mb-4 text-sm sm:text-base">
                  At Freight Experts Logistics, we deliver to our customers –
                  Legal, Medical, Industrial, Automotive Industry – to prosper
                  by delivering their products on time in a professional manner.
                  Our company continuously challenges ourselves to exceed our
                  customer&apos; expectations by providing leading-edge courier
                  and messenger solutions to their needs.
                </p>
                <p className="text-orange-900 mb-4 text-sm sm:text-base">
                  We are committed to total customer satisfaction. We understand
                  that your courier and shipping needs change, so we offer the
                  customization necessary to satisfy your unique delivery
                  requirements. Your delivery deadlines will be met with
                  professional, speedy, efficient, reliable, and individual
                  service.
                </p>
                <p className="text-orange-900 text-sm sm:text-base">
                  It is this superior customer service that continues to be the
                  hallmark of our courier and messenger success and is the main
                  ingredient that prompts our long list of repeat customers to
                  call us again and again with their most discriminating
                  delivery and courier needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-orange-100 py-8 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <img
                  src="/img/feature.jpg"
                  alt="Our Features"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="w-full lg:w-1/2 lg:pl-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-orange-800 mb-6">
                  Why Choose Us
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-orange-900 text-sm sm:text-base">
                      25+ Years of Industry Experience
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-orange-900 text-sm sm:text-base">
                      Professional and Reliable Service
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-orange-900 text-sm sm:text-base">
                      Customized Solutions for Every Client
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-orange-900 text-sm sm:text-base">
                      On-Time Delivery Guarantee
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
