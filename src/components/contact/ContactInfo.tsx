import { MapPin, Phone, Mail } from "lucide-react";
import { contactInfo } from "../../data/contactData";

const ContactInfo = () => {
  const plainNumber = contactInfo.phones.whatsapp.replace(/\s/g, '');
  const whatsAppNumber = plainNumber.startsWith('0') ? `91${plainNumber.substring(1)}` : plainNumber;

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <div className="bg-primary p-3 rounded-lg">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Location</h3>
            <p className="text-gray-600">
              {contactInfo.location.address}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-primary p-3 rounded-lg">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Numbers</h3>
            <p className="text-gray-600">
              Phone: {contactInfo.phones.main}<br />
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-primary p-3 rounded-lg">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Addresses</h3>
            <p className="text-gray-600">
              General: {contactInfo.emails.general}<br />
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <button 
          onClick={() => window.open(`tel:${contactInfo.phones.main.replace(/\s/g, '')}`)}
          className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
        >
          Call Now
        </button>
        <button 
          onClick={() => window.open(`https://wa.me/${whatsAppNumber}`)}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          WhatsApp Chat
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;
