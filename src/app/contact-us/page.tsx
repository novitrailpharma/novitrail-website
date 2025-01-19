import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-novitrail-orange/60 via-novitrail-blue/50 to-novitrail-blue/90 flex items-center justify-center px-6 py-10">
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <h1 className="text-3xl font-bold text-novitrail-blue mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-gray-600 text-center mb-8">
            We’d love to hear from you! Fill out the form below, and we’ll get
            back to you as soon as possible.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-novitrail-blue focus:border-novitrail-blue text-sm"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-novitrail-blue focus:border-novitrail-blue text-sm"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is your inquiry about?"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-novitrail-blue focus:border-novitrail-blue text-sm"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-novitrail-blue focus:border-novitrail-blue text-sm"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-novitrail-blue text-white font-semibold rounded-lg shadow-md hover:bg-novitrail-blue/90 focus:outline-none focus:ring-2 focus:ring-novitrail-blue focus:ring-offset-2 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Information */}
          <div className="mt-8 border-t pt-6 text-center">
            <p className="text-sm text-gray-500">
              Or reach us directly at{" "}
              <a
                href="mailto:info@novitrail.com"
                className="text-novitrail-blue font-medium hover:text-novitrail-orange transition-colors"
              >
                info@novitrail.com
              </a>{" "}
              or call us at{" "}
              <a
                href="tel:+917622490181"
                className="text-novitrail-blue font-medium hover:text-novitrail-orange transition-colors"
              >
                +91-7622-490181
              </a><a
              href="tel:+917622494181"
              className="text-novitrail-blue font-medium hover:text-novitrail-orange transition-colors"
            >
              {" or +91-7622-494181"}
            </a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
