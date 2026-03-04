import React from 'react';
import { Shield, Clock, Mail } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  const effectiveDate = "March 3, 2026";

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-tunna-blue/10 rounded-2xl mb-6">
          <Shield className="w-8 h-8 text-tunna-blue" />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-tunna-text mb-4">
          Privacy Policy
        </h1>
        <div className="flex items-center justify-center gap-2 text-gray-400 font-medium">
          <Clock className="w-4 h-4" />
          <span>Effective Date: {effectiveDate}</span>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 prose prose-gray max-w-none">
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          Tunna AI (“we,” “our,” or “us”) respects your privacy. 
          <br /><br />
          This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or use our services. By accessing or using our website, you agree to this policy.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">1. Introduction</h2>
          <p className="mb-4">Tunna AI respects your privacy. We are committed to protecting the personal information you share with us.</p>
          <p>This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or use our services. By accessing or using our website, you agree to the terms outlined in this policy.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">2. Information We Collect</h2>
          <p className="mb-8">We collect only what is necessary to operate effectively and provide you with the best possible experience.</p>
          
          <h3 className="text-xl font-bold text-tunna-text mt-10 mb-4">a) Information You Provide</h3>
          <p className="mb-4">When you interact with our services, you may voluntarily provide us with:</p>
          <ul className="list-disc pl-6 space-y-3 mb-8">
            <li><strong>Name:</strong> To personalize your experience.</li>
            <li><strong>Email address:</strong> For communication and account updates.</li>
            <li><strong>Account information:</strong> Credentials and profile details.</li>
            <li><strong>Messages:</strong> Any inquiries or support requests you send.</li>
            <li><strong>Payment details:</strong> Processed securely via third-party providers.</li>
          </ul>

          <h3 className="text-xl font-bold text-tunna-text mt-10 mb-4">b) Automatically Collected Information</h3>
          <p className="mb-4">Our systems automatically collect certain data to ensure technical functionality:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>IP address and browser type.</li>
            <li>Device information and operating system.</li>
            <li>Pages visited and time spent on our site.</li>
            <li>Usage data and navigation patterns.</li>
            <li>Cookies and similar tracking technologies.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">3. How We Use Your Information</h2>
          <p className="mb-6">We use the information we collect for various business purposes:</p>
          <ul className="list-disc pl-6 space-y-3 mb-8">
            <li>To provide, maintain, and improve our services.</li>
            <li>To enhance website functionality and user experience.</li>
            <li>To communicate with you regarding updates or inquiries.</li>
            <li>To process transactions securely.</li>
            <li>To ensure security and prevent fraudulent activity.</li>
            <li>To comply with our legal and regulatory obligations.</li>
          </ul>
          <div className="p-4 bg-tunna-blue/5 border-l-4 border-tunna-blue rounded-r-xl">
            <p className="font-bold text-tunna-blue">Important: We do not sell your personal data to third parties.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">4. Cookies and Tracking</h2>
          <p className="mb-6">Tunna AI uses cookies and similar technologies to understand how you use our site and to improve your experience.</p>
          <h4 className="text-lg font-bold text-tunna-text mb-3">We use these tools to:</h4>
          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>Improve overall user experience.</li>
            <li>Analyze website traffic and performance.</li>
            <li>Remember your preferences and settings.</li>
          </ul>
          <p>You have the option to disable cookies through your browser settings, though some features of our site may not function correctly as a result.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">5. Third-Party Services</h2>
          <p className="mb-6">We may partner with trusted third-party providers to facilitate our services, including:</p>
          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>Payment processors for secure transactions.</li>
            <li>Analytics providers to understand site usage.</li>
            <li>Hosting services for website infrastructure.</li>
            <li>Email communication platforms.</li>
          </ul>
          <p>These providers access your data only as necessary to perform their specific tasks and are contractually obligated to protect your information.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">6. Data Retention</h2>
          <p className="mb-4">We retain your personal information only for as long as is necessary to fulfill the purposes outlined in this policy.</p>
          <p>This includes retention for business purposes, legal compliance, and security requirements. When data is no longer required, it is securely deleted or anonymized.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">7. Data Security</h2>
          <p className="mb-4">We implement a variety of technical and organizational safeguards designed to protect your information from unauthorized access or disclosure.</p>
          <p className="italic text-gray-500">Note: While we strive to use commercially acceptable means to protect your data, no method of transmission over the internet is 100% secure. Use our services at your own risk.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">8. Your Rights</h2>
          <p className="mb-6">Depending on your location, you may have specific rights regarding your personal data, such as the right to:</p>
          <ul className="list-disc pl-6 space-y-3 mb-8">
            <li>Access the data we hold about you.</li>
            <li>Correct any inaccurate or incomplete information.</li>
            <li>Request the deletion of your personal data.</li>
            <li>Object to or restrict the processing of your data.</li>
            <li>Withdraw your consent at any time.</li>
          </ul>
          <div className="mt-6 p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
            <Mail className="w-6 h-6 text-tunna-blue" />
            <div>
              <p className="text-sm font-bold text-tunna-text">Exercise your rights</p>
              <p className="text-sm text-gray-500">Contact our privacy team at: <span className="font-bold">privacy@tunna.ai</span></p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">9. Children’s Privacy</h2>
          <p>Tunna AI does not knowingly collect or solicit data from individuals under the age of 13. If we learn that we have collected personal information from a child under 13, we will delete that information as quickly as possible.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">10. International Users</h2>
          <p>If you are accessing our website from outside our primary operating country, please be aware that your data may be transferred to, stored, and processed in other jurisdictions where data protection laws may differ.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">11. Changes to This Policy</h2>
          <p className="mb-4">We may update our Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.</p>
          <p>When updates are made, we will revise the “Effective Date” at the top of this page. We encourage you to review this policy periodically.</p>
        </section>

        <section>
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">12. Contact Us</h2>
          <p>If you have any questions or concerns regarding this Privacy Policy or our data practices, please reach out to us at <span className="text-tunna-blue font-bold">support@tunna.ai</span>.</p>
        </section>
      </div>
    </div>
  );
};
