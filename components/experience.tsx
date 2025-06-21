export function Experience() {
  const experiences = [
    {
      title: "Full Stack Intern",
      company: "DasinAq",
      period: "October 2024 – November 2024",
      description: [
        "Developed a responsive Learning Content Management System with React.js front-end (Hooks, Context API) and Express/MongoDB backend.",
        "Implemented component-based architecture for an instructor-controlled admin dashboard; managed state via Context API and optimized data layer with Redis caching.",
        "Consumed and tested RESTful JSON APIs using Axios, ensuring seamless integration between front-end and backend teams.",
        "Deployed front-end on Vercel and backend on Heroku, leveraging CI/CD pipelines for rapid iteration.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Work <span className="text-red-400">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-red-400">{exp.title}</h3>
                  <p className="text-lg text-gray-300">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-400 mt-2 md:mt-0">{exp.period}</span>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="text-red-400 mr-2 mt-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
