import Navbar from './Navbar';
import Footer from './Footer';

const teamDetails = [
  {
    name: "Usmaan Sayed",
    role: "Full Stack Developer",
    description: "Usmaan specializes in both frontend and backend development, with a passion for building scalable web applications and leading collaborative projects.",
    skills: ["React", "Node.js", "MongoDB", "UI/UX"],
    emoji: "🧑‍💻"
  },
  {
    name: "Ammar Khan",
    role: "Developer & CIS Student",
    description: "Ammar is focused on information systems and software engineering, bringing a strong analytical mindset and a love for solving complex problems.",
    skills: ["JavaScript", "Python", "SQL", "System Design"],
    emoji: "💡"
  },
  {
    name: "Syed Aariz",
    role: "Frontend Developer",
    description: "Syed crafts beautiful and responsive user interfaces, ensuring seamless user experiences across all platforms.",
    skills: ["React", "Tailwind CSS", "Figma", "Accessibility"],
    emoji: "🎨"
  },
  {
    name: "Said Akmermer",
    role: "Backend Developer",
    description: "Said is passionate about server-side logic, database management, and building robust APIs for modern web apps.",
    skills: ["Node.js", "Express", "PostgreSQL", "API Design"],
    emoji: "🛠️"
  },
  {
    name: "Omer Polat",
    role: "DevOps & Security",
    description: "Omer ensures our projects are secure, scalable, and efficiently deployed, with expertise in cloud infrastructure and automation.",
    skills: ["AWS", "Docker", "CI/CD", "Security"],
    emoji: "🔒"
  }
];

function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800">
      <Navbar />
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
              Meet the passionate individuals behind Move In Corp. Each member brings unique skills and perspectives to our collaborative projects.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {teamDetails.map((member, idx) => (
              <div key={idx} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-3xl font-bold">{member.emoji}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1 text-center">{member.name}</h3>
                  <div className="text-indigo-600 text-center font-medium mb-2">{member.role}</div>
                  <p className="text-gray-600 text-center mb-4 flex-1">{member.description}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.skills.map((skill, i) => (
                      <span key={i} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">{skill}</span>
                    ))}
                  </div>
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

export default Team;
