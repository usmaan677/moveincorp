import Navbar from './Navbar';
import Footer from './Footer';

const projects = [
  {
    title: 'Connext (UH Clubs App)',
    status: 'Live',
    description: 'A platform for University of Houston students to discover, join, and manage campus clubs. Features include club discovery, event calendars, and member management. Built to foster student engagement and community.',
    link: '#',
    badge: 'New',
    emoji: '🚀'
  },
  {
    title: 'Move In UH Club',
    status: 'Coming Soon',
    description: 'A new UH student club focused on helping students transition smoothly into university life. Stay tuned for more updates and opportunities to get involved!',
    link: '#',
    badge: 'Coming Soon',
    emoji: '🎓'
  },
  {
    title: 'Move In Non-Profit',
    status: 'In Progress',
    description: 'A non-profit initiative by Move In Corp dedicated to supporting students and the local community through outreach, resources, and events. More information coming soon.',
    link: '#',
    badge: 'In Progress',
    emoji: '🤝'
  }
];

function Project() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800">
      <Navbar />
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white min-h-[80vh]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore some of the projects our team is working on to make a difference at UH and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-3xl font-bold">{project.emoji}</span>
                    </div>
                    <span className={`absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-semibold ${project.badge === 'New' ? 'bg-green-100 text-green-700' : project.badge === 'Coming Soon' ? 'bg-yellow-100 text-yellow-700' : 'bg-purple-100 text-purple-700'}`}>{project.badge}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1 text-center">{project.title}</h3>
                  <div className="text-indigo-600 text-center font-medium mb-2">Status: {project.status}</div>
                  <p className="text-gray-600 text-center mb-4 flex-1">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Project;
