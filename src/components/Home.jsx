import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Home() {
  const teamMembers = [
    "Usmaan Sayed",
    "Ammar Khan", 
    "Syed Aariz",
    "Said Akmermer",
    "Omer Polat"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight">
              <span className="block">Move In</span>
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Corp
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-indigo-100 font-light max-w-2xl mx-auto">
              Innovative Development Team
            </p>
            
            <p className="text-lg text-indigo-200 max-w-3xl mx-auto leading-relaxed">
              We are a dynamic group of 5 passionate developers and computer scientists  
              dedicated to creating exceptional projects and innovative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link to="/projects" className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center text-center">
                View Our Work
              </Link>
              <Link to="/contact" className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-indigo-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-green-400 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 border border-gray-100">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl font-bold">
                        {member.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-white"></div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                    {member}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {member === "Ammar Khan" ? "Developer & CIS Student" : "Developer & CS Student"}
                  </p>
                  
                  <div className="flex justify-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-indigo-100 cursor-pointer transition-colors">
                      <span className="text-xs">💻</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-indigo-100 cursor-pointer transition-colors">
                      <span className="text-xs">🔗</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Move In Corp, we combine our academic knowledge with practical experience 
              to build cutting-edge projects. Our diverse team brings together unique perspectives 
              and skills to tackle complex challenges and deliver innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pushing boundaries with creative solutions and cutting-edge technology to solve real-world problems.
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Working together to achieve excellence through teamwork, communication, and shared vision.
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology</h3>
                <p className="text-gray-600 leading-relaxed">
                  Leveraging modern tools, frameworks, and best practices to build scalable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-indigo-200">Team Members</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-indigo-200">Projects</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-indigo-200">Dedication</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-indigo-200">Innovation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;