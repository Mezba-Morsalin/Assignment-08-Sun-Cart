import React from "react";

import "animate.css";

export const metadata = {
  title: "Sun Cart - Terms & Conditions",
  description: "Terms and conditions of Sun Cart",
};

const TermsAndCondition = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto py-12 space-y-8 animate__animated animate__fadeIn">

      <h1 className="text-3xl lg:text-4xl font-bold text-center bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent animate__animated animate__fadeInDown">
        Terms & Conditions
      </h1>

      <div className="space-y-6 text-gray-600 leading-relaxed">

        <p className="animate__animated animate__fadeIn">
          Welcome to Sun Cart. By accessing and using our website, you agree to
          comply with and be bound by the following terms and conditions.
        </p>

        <div className="animate__animated animate__fadeInUp">
          <h2 className="text-xl font-semibold text-black mb-2">
            Use of the Website
          </h2>
          <p>
            You agree to use this website only for lawful purposes. You must not
            use it in any way that may damage the website or affect its
            availability or accessibility.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp">
          <h2 className="text-xl font-semibold text-black mb-2">
            User Accounts
          </h2>
          <p>
            When creating an account, you are responsible for maintaining the
            confidentiality of your information and for all activities under
            your account.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp">
          <h2 className="text-xl font-semibold text-black mb-2">
            Product Information
          </h2>
          <p>
            We strive to ensure that all product details are accurate. However,
            we do not guarantee that descriptions, pricing, or other content is
            always complete or error-free.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp">
          <h2 className="text-xl font-semibold text-black mb-2">
            Orders & Payments
          </h2>
          <p>
            All orders are subject to availability and confirmation. We reserve
            the right to cancel or refuse any order at our discretion.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp">
          <h2 className="text-xl font-semibold text-black mb-2">
            Intellectual Property
          </h2>
          <p>
            All content on this website, including text, graphics, logos, and
            images, is the property of Sun Cart and is protected by applicable
            copyright laws.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp">
          <h2 className="text-xl font-semibold text-black mb-2">
            Limitation of Liability
          </h2>
          <p>
            Sun Cart will not be liable for any damages arising from the use or
            inability to use the website or its services.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp">
          <h2 className="text-xl font-semibold text-black mb-2">
            Changes to Terms
          </h2>
          <p>
            We may update these Terms & Conditions at any time. Continued use of
            the website means you accept the updated terms.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp">
          <h2 className="text-xl font-semibold text-black mb-2">
            Contact
          </h2>
          <p>
            If you have any questions about these Terms & Conditions, please
            contact us through our website.
          </p>
        </div>

      </div>
    </div>
  );
};

export default TermsAndCondition;