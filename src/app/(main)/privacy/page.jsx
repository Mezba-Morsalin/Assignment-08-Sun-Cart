import React from "react";

import "animate.css";

export const metadata = {
  title: "Sun Cart - Privacy & Policy",
  description: "Privacy policy of Sun Cart",
};

const PrivacyPage = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto py-12 space-y-8 animate__animated animate__fadeIn">

      <h1 className="text-3xl lg:text-4xl font-bold text-center bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent animate__animated animate__fadeInDown">
        Privacy Policy
      </h1>

      <div className="space-y-6 text-gray-600 leading-relaxed">

        <p className="animate__animated animate__fadeIn">
          Welcome to Sun Cart. Your privacy is important to us. This Privacy
          Policy explains how we collect, use, and protect your information when
          you use our website.
        </p>

        <div className="animate__animated animate__fadeInUp">
          <h2 className="text-xl font-semibold text-black mb-2">
            Information We Collect
          </h2>
          <p>
            We may collect personal information such as your name, email
            address, and profile image when you create an account or update your
            profile. We also collect usage data to improve our services.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp">
          <h2 className="text-xl font-semibold text-black mb-2">
            How We Use Your Information
          </h2>
          <p>
            Your information is used to provide and improve our services,
            personalize your experience, and communicate important updates
            regarding your account or our platform.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp">
          <h2 className="text-xl font-semibold text-black mb-2">
            Data Protection
          </h2>
          <p>
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the internet is
            100% secure.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp">
          <h2 className="text-xl font-semibold text-black mb-2">
            Cookies
          </h2>
          <p>
            Sun Cart may use cookies to enhance user experience, track site
            usage, and improve performance.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp">
          <h2 className="text-xl font-semibold text-black mb-2">
            Third-Party Services
          </h2>
          <p>
            We may use third-party services for authentication, analytics, or
            database management. These services have their own privacy policies.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp">
          <h2 className="text-xl font-semibold text-black mb-2">
            Your Rights
          </h2>
          <p>
            You have the right to access, update, or delete your personal
            information at any time through your profile settings.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp">
          <h2 className="text-xl font-semibold text-black mb-2">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp">
          <h2 className="text-xl font-semibold text-black mb-2">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us through our website.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPage;