import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', inquiry: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to your backend or email service
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800">
      <Navbar />
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white min-h-[80vh]">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">We'd love to hear from you! Fill out the form below and we'll get back to you soon.</p>
          </div>
          {submitted ? (
            <div className="bg-green-100 text-green-700 p-6 rounded-2xl text-center shadow-lg">
              Thank you for reaching out! We'll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-gray-100">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="inquiry">Inquiry Type</label>
                <select
                  id="inquiry"
                  name="inquiry"
                  value={form.inquiry}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="">Select an option</option>
                  <option value="General">General</option>
                  <option value="Project">Project Inquiry</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
