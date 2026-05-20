// Ícones SVG inline para cada tecnologia
const skills = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "HTML, CSS",
    subtitle: "e JavaScript",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "React.js",
    subtitle: "do básico ao avançado",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Node.js e",
    subtitle: "APIs REST",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: "Banco de Dados",
    subtitle: "e Deploy",
  },
]

type CourseAboutProps = {
  course: {
    title: string
    category: string
  }
}

export function CourseAbout({ course }: CourseAboutProps) {
  return (
    <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-8">

      {/* SOBRE */}
      <h2 className="text-xl font-bold text-[#1F2E27] mb-3">
        Sobre o curso
      </h2>
      <p className="text-gray-600 leading-relaxed mb-8">
        Este curso foi criado para quem deseja dominar o desenvolvimento
        web completo. Você aprenderá as principais tecnologias do mercado,
        construindo projetos reais e desenvolvendo habilidades práticas
        para se tornar um desenvolvedor completo.
      </p>

      {/* O QUE VOCÊ VAI APRENDER */}
      <h2 className="text-xl font-bold text-[#1F2E27] mb-4">
        O que você vai aprender
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="
              flex items-center gap-4
              rounded-2xl border border-black/5
              bg-[#F8F7F2] px-5 py-4
            "
          >
            {/* ÍCONE */}
            <div className="
              w-11 h-11 rounded-xl bg-[#E8F5CC]
              text-[#47662E] flex items-center justify-center shrink-0
            ">
              {skill.icon}
            </div>
            {/* TEXTO */}
            <div>
              <p className="font-semibold text-[#1F2E27] leading-tight">
                {skill.title}
              </p>
              <p className="text-sm text-gray-500">{skill.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}