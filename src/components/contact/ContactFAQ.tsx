
import { faqData } from "../../data/contactData";

const ContactFAQ = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Quick answers to common questions about admissions and courses
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
