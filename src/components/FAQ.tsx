import React from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Mail, Globe } from 'lucide-react';
import { cn } from '../utils';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      question: "What is Tunna AI?",
      answer: "Tunna AI builds intelligent digital systems designed to simplify work, automate processes, and improve performance. We don’t add complexity. We remove it."
    },
    {
      question: "Who is Tunna AI for?",
      answer: "Tunna AI is designed for: Businesses seeking automation, Teams improving workflow efficiency, Founders building smarter systems, and Individuals who value precision over clutter. If you want technology that works quietly and effectively — you’re in the right place."
    },
    {
      question: "How does Tunna AI work?",
      answer: "Our platform uses advanced AI technologies to analyze, automate, and optimize tasks. You connect your workflows. We make them sharper."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. We implement industry-standard security practices to protect your data. We do not sell your personal information. Privacy is not optional. It’s foundational."
    },
    {
      question: "Do I need technical skills to use Tunna AI?",
      answer: "No. Tunna AI is built to be intuitive and accessible. Simple interface. Powerful engine."
    },
    {
      question: "What industries do you support?",
      answer: "Tunna AI solutions are adaptable across industries, including: Technology, E-commerce, Marketing, Finance, Operations, and Consulting. Intelligence scales across sectors."
    },
    {
      question: "Can I customize solutions?",
      answer: "Yes. We offer tailored configurations to meet your specific business goals and operational needs. No one-size-fits-all systems."
    },
    {
      question: "How do I get started?",
      answer: "Simply: Create an account, Connect your systems, Configure your preferences, and Activate intelligent workflows. Precision begins immediately."
    },
    {
      question: "Do you offer support?",
      answer: "Yes. Our support team is available to assist with onboarding, troubleshooting, and optimization. Fast. Clear. Efficient."
    },
    {
      question: "How can I contact Tunna AI?",
      answer: "For inquiries, partnerships, or support, you can reach us via email at support@tunna.ai or visit our website at www.tunna.ai. We respond with clarity."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-tunna-blue/10 rounded-2xl mb-6">
          <HelpCircle className="w-8 h-8 text-tunna-blue" />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-tunna-text mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-500 font-medium">Clear answers. No noise.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className={cn(
              "bg-white rounded-2xl border transition-all duration-200",
              openIndex === index ? "border-tunna-blue shadow-md" : "border-gray-100 shadow-sm hover:border-gray-200"
            )}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-8 py-6 flex items-center justify-between text-left"
            >
              <span className={cn(
                "text-lg font-bold transition-colors",
                openIndex === index ? "text-tunna-blue" : "text-tunna-text"
              )}>
                {index + 1}. {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-tunna-blue" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="px-8 pb-8">
                <div className="h-px bg-gray-50 mb-6" />
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 bg-tunna-text rounded-3xl p-10 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-tunna-blue/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="relative z-10">
          <h3 className="text-2xl font-display font-bold mb-4">Still have questions?</h3>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Our team is here to help you optimize your workflows and remove complexity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:support@tunna.ai"
              className="flex items-center gap-2 px-6 py-3 bg-tunna-blue text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              support@tunna.ai
            </a>
            <a 
              href="https://tunna.ai"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-colors"
            >
              <Globe className="w-4 h-4" />
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
