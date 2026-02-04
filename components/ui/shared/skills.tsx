export default function Skills() {
  const skills = [
    {
      title: 'Frontend',
      items: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
      ],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express', 'PHP', 'Prisma', 'REST APIs', 'JWT / Auth'],
    },
    {
      title: 'Database',
      items: ['PostgreSQL', 'MySQL', 'MS SQL', 'MongoDB'],
    },
    {
      title: 'Tools & DevOps',
      items: ['Git & GitHub', 'Docker', 'Swagger', 'CI/CD', 'Linux'],
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-black">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-black/80 max-w-2xl mx-auto">
            Technologies I use to design, build, and scale modern web
            applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl bg-[#0B1020] p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">
                {group.title}
              </h3>

              <ul className="space-y-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="inline-block mr-2 mb-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
