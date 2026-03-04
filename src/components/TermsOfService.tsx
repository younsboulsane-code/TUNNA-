import React from 'react';
import { FileText, Clock, AlertCircle, Scale } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  const effectiveDate = "March 3, 2026";

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-tunna-blue/10 rounded-2xl mb-6">
          <FileText className="w-8 h-8 text-tunna-blue" />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-tunna-text mb-4">
          Terms of Service
        </h1>
        <div className="flex items-center justify-center gap-2 text-gray-400 font-medium">
          <Clock className="w-4 h-4" />
          <span>Effective Date: {effectiveDate}</span>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 prose prose-gray max-w-none">
        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">1. Acceptance of Terms</h2>
          <p className="mb-4">By accessing or using the Tunna AI website and services (“Services”), you agree to be bound by these Terms of Service (“Terms”).</p>
          <p className="font-medium text-tunna-blue">If you do not agree, do not use our Services. Simple.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">2. Eligibility</h2>
          <p className="mb-4">You must be at least 18 years old (or the age of legal majority in your jurisdiction) to use Tunna AI.</p>
          <p>By using our Services, you confirm that you meet this requirement and have the legal capacity to enter into these Terms.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">3. Services Overview</h2>
          <p className="mb-4">Tunna AI provides AI-powered tools, automation systems, and related digital services designed to enhance productivity and streamline workflows.</p>
          <p>We reserve the right to modify, suspend, or discontinue any part of the Services at any time without prior notice. We improve continuously to provide the best experience.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">4. Account Registration</h2>
          <p className="mb-6">To access certain features, you may need to create an account. You agree to:</p>
          <ul className="list-disc pl-6 space-y-3 mb-8">
            <li>Provide accurate, current, and complete information.</li>
            <li>Maintain the security and confidentiality of your login credentials.</li>
            <li>Notify us immediately of any unauthorized use of your account.</li>
          </ul>
          <p className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm">
            <strong>Responsibility:</strong> You are responsible for all activity that occurs under your account.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">5. Acceptable Use</h2>
          <p className="mb-6">We expect all users to interact with our platform responsibly. You agree not to:</p>
          <ul className="list-disc pl-6 space-y-3 mb-8">
            <li>Use the Services for any unlawful or unauthorized purposes.</li>
            <li>Violate any applicable local, state, national, or international laws.</li>
            <li>Interfere with, disrupt, or attempt to gain unauthorized access to our platform.</li>
            <li>Attempt to reverse-engineer, decompile, or exploit the underlying technology.</li>
            <li>Upload or transmit malicious code, viruses, or harmful content.</li>
            <li>Infringe on the intellectual property rights of Tunna AI or others.</li>
          </ul>
          <div className="p-4 bg-red-50 border-l-4 border-red-400 rounded-r-xl">
            <p className="font-bold text-red-700">Misuse results in immediate termination of access. No exceptions.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">6. Intellectual Property</h2>
          <p className="mb-4">All content, branding, software, design, and technology on the Tunna AI website are owned by or licensed to Tunna AI and are protected by intellectual property laws.</p>
          <p className="mb-6">You may not copy, distribute, modify, or reproduce any materials from our platform without express written permission.</p>
          <p className="italic text-gray-500 text-sm border-t border-gray-100 pt-4">Your content remains yours. Our platform remains ours.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">7. Payments and Billing</h2>
          <p className="mb-6">If you choose to purchase paid Services from Tunna AI:</p>
          <ul className="list-disc pl-6 space-y-3 mb-8">
            <li>You agree to provide valid and current payment information.</li>
            <li>Fees are billed as described at the time of purchase or subscription.</li>
            <li>Payments are non-refundable unless explicitly stated otherwise in writing.</li>
          </ul>
          <p>We reserve the right to change our pricing at any time, provided that we give you reasonable notice of such changes.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">8. Termination</h2>
          <p className="mb-4">We may suspend or terminate your access to the Services at our sole discretion if you violate these Terms, engage in harmful or fraudulent behavior, or create legal risk for Tunna AI.</p>
          <p>You may stop using the Services at any time by closing your account or ceasing access.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">9. Disclaimer of Warranties</h2>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-2xl">
            <div className="flex items-center gap-2 text-amber-800 font-bold mb-4">
              <AlertCircle className="w-6 h-6" />
              <span className="text-lg">AS IS BASIS</span>
            </div>
            <p className="text-amber-900 leading-relaxed">
              The Services are provided “as is” and “as available.” We do not guarantee uninterrupted operation, error-free performance, or specific business outcomes. Use of our Services is at your own discretion and risk.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">10. Limitation of Liability</h2>
          <p className="mb-4">To the fullest extent permitted by law, Tunna AI shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits, data, or business interruption.</p>
          <p>Our total liability for any claim arising out of these Terms will not exceed the amount you paid to us in the previous 12 months.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">11. Indemnification</h2>
          <p>You agree to indemnify and hold Tunna AI harmless from any claims, damages, or legal disputes arising from your use of the Services, your violation of these Terms, or your infringement of any third-party rights.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">12. Third-Party Services</h2>
          <p className="mb-4">Our Services may integrate with or link to third-party platforms. We do not control and are not responsible for their content, privacy policies, or performance.</p>
          <p>Your interaction with third-party services is at your own risk and subject to their respective terms.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">13. Privacy</h2>
          <p>Your use of Tunna AI is also governed by our Privacy Policy, which is incorporated into these Terms by reference. We encourage you to review it carefully.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">14. Governing Law</h2>
          <p className="mb-4">These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Tunna AI operates, without regard to conflict-of-law principles.</p>
          <p>Any legal disputes shall be resolved exclusively in the competent courts of that jurisdiction.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6">15. Changes to These Terms</h2>
          <p className="mb-4">We may update these Terms at any time to reflect changes in our services or legal requirements.</p>
          <p>Continued use of the Services after such changes constitutes your acceptance of the revised Terms. We recommend staying informed by checking this page regularly.</p>
        </section>

        <section className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
          <h2 className="text-2xl font-display font-bold text-tunna-text mb-6 flex items-center gap-3">
            <Scale className="w-7 h-7 text-tunna-blue" />
            16. Contact Information
          </h2>
          <p className="mb-6 text-gray-600">For legal inquiries or questions regarding these Terms, please contact us:</p>
          <div className="space-y-3">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Entity</span>
              <span className="text-tunna-text font-bold">Tunna AI</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Legal Email</span>
              <span className="text-tunna-blue font-bold">legal@tunna.ai</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Official Website</span>
              <span className="text-gray-600 font-medium">www.tunna.ai</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
