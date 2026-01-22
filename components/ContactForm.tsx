import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mjgknjww", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        // Reset success message after 8 seconds
        setTimeout(() => setStatus('idle'), 8000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Get a Free Consultation</h3>
      
      {status === 'success' ? (
        <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-300 z-10">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
          <p className="text-gray-600">Thank you for contacting Sarah Sanctuary Homes. We will get back to you shortly via email or WhatsApp.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-6 text-brand-600 font-bold hover:text-brand-700 underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form 
            onSubmit={handleSubmit} 
            action="https://formspree.io/f/mjgknjww" 
            method="POST"
            className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                placeholder="+256 700 000000"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Interested Service</label>
            <select
              id="service"
              name="service"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
            >
              <option value="buy_property">Buying Property</option>
              <option value="sell_property">Selling Property</option>
              <option value="surveying">Land Surveying</option>
              <option value="construction">Construction Management</option>
              <option value="other">Other Inquiry</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
              placeholder="Tell us more about your needs..."
            ></textarea>
          </div>

          {status === 'error' && (
             <div className="bg-red-50 text-red-700 p-3 rounded-lg flex items-center text-sm">
                <AlertCircle className="h-4 w-4 mr-2" />
                Something went wrong. Please check your internet connection or try again later.
             </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-brand-900 text-white font-bold py-4 rounded-lg hover:bg-brand-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none shadow-md text-lg"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
          
          <p className="text-xs text-center text-gray-500 mt-4">
            By submitting this form, you agree to be contacted by Sarah Sanctuary Homes.
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;