import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError('');
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      createdAt: new Date(),
    });
    
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  } catch (error) {
    console.error('Error:', error);
    setError('Failed to submit form. Please try again.');
  } finally {
    setLoading(false);
  }
};

  return (
    <>
    <Header/>
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0b1a", fontFamily: "'Raleway', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap');
        .roboto { font-family: 'Roboto', sans-serif; font-weight: 700; }
        .open-sans { font-family: 'Open Sans', sans-serif; font-weight: 400; }
      `}</style>

      <section className="relative overflow-hidden py-16 px-4" style={{background: "radial-gradient(ellipse at 50% 0%, #2d1b4e 0%, #1a0f2e 50%, #0f0a1e 100%)"}}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="roboto text-white lg:text-5xl text-3xl font-bold mb-4">
              Get In <span className="text-pink-400">Touch</span>
            </h1>

            <p className="open-sans text-gray-300 text-lg">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="mb-8 p-4 bg-green-500/20 border border-green-500 rounded-lg">
              <p className="text-green-400 text-center font-semibold">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-8 p-4 bg-red-500/20 border border-red-500 rounded-lg">
              <p className="text-red-400 text-center font-semibold">
                {error}
              </p>
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white/5 border border-pink-400/30 rounded-xl p-8 backdrop-blur-sm space-y-6">
            
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="relative">
                <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                  Full Name <span className="text-pink-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/10 border border-pink-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-400 transition-colors duration-300"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                  Email Address <span className="text-pink-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/10 border border-pink-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-400 transition-colors duration-300"
                  />
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-gray-300 font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 bg-white/10 border border-pink-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-400 transition-colors duration-300"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-gray-300 font-semibold mb-2">
                Subject <span className="text-pink-400">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help you?"
                className="w-full px-4 py-3 bg-white/10 border border-pink-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-400 transition-colors duration-300"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                Message <span className="text-pink-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us more about your project..."
                rows="6"
                className="w-full px-4 py-3 bg-white/10 border border-pink-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-400 transition-colors duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 shadow-lg shadow-pink-500/20 hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{background: "linear-gradient(135deg, #f59e0b, #ef4444)"}}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {/* Form Note */}
            <p className="open-sans text-gray-400 text-sm text-center pt-2">
              We'll respond to your message within 24 hours.
            </p>
          </form>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Phone Card */}
            <div className="bg-white/5 border border-pink-400/30 rounded-lg p-6 text-center hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-shadow duration-300">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-white font-bold text-lg mb-2">Call Us</h3>
              <p className="text-gray-400">+1 (555) 000-0000</p>
            </div>

            {/* Email Card */}
            <div className="bg-white/5 border border-pink-400/30 rounded-lg p-6 text-center hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-shadow duration-300">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-white font-bold text-lg mb-2">Email Us</h3>
              <p className="text-gray-400">contact@oossolution.com</p>
            </div>

            {/* Location Card */}
            <div className="bg-white/5 border border-pink-400/30 rounded-lg p-6 text-center hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-shadow duration-300">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-white font-bold text-lg mb-2">Visit Us</h3>
              <p className="text-gray-400">123 Business Street, City, Country</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default ContactPage;
