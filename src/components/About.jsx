import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800">
      <Navbar />
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Move In Corp is a collective of passionate developers and computer science students dedicated to building innovative, impactful, and scalable solutions. Our team thrives on collaboration, creativity, and a shared vision to push the boundaries of technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-2">
                To empower communities and businesses by delivering high-quality software solutions that solve real-world problems. We believe in the power of technology to transform lives and industries.
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4">
                <li>Innovate with purpose and integrity</li>
                <li>Foster a culture of learning and growth</li>
                <li>Embrace diversity and unique perspectives</li>
                <li>Deliver excellence through teamwork</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">What Sets Us Apart</h3>
              <p className="text-gray-700 mb-2">
                Our team combines academic knowledge with hands-on experience, allowing us to approach challenges from multiple angles. We value open communication, continuous improvement, and a relentless drive to exceed expectations.
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4">
                <li>Cutting-edge technology stack</li>
                <li>Strong focus on user experience</li>
                <li>Agile and adaptive project management</li>
                <li>Commitment to security and scalability</li>
              </ul>
            </div>
          </div>
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More About Us</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We are not just coders—we are problem solvers, designers, and innovators. Our journey is fueled by curiosity and a desire to make a positive impact. Whether working on client projects or our own initiatives, we strive to create technology that matters.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
