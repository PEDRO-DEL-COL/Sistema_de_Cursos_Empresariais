type CourseHeroProps = {
  course: {
    title: string
    description: string
    category: string
    duration: string
    level: string
    image: string
  }
}

export function CourseHero({ course }: CourseHeroProps) {
  return (
    <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-sm">

      {/* IMAGEM */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${course.image})` }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1A14]/95 via-[#132019]/80 to-[#132019]/20" />

      {/* CONTEÚDO */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">

        {/* TOPO */}
        <div>

          {/* BADGE translúcido */}
          <span className="
            inline-flex items-center
            bg-white/20 backdrop-blur-sm
            text-white font-semibold text-sm
            px-4 py-1.5 rounded-full mb-5
            border border-white/30
          ">
            {course.category}
          </span>

          {/* TÍTULO */}
          <h1 className="text-5xl font-black leading-tight max-w-[500px] mb-5">
            {course.title}
          </h1>

          {/* DESCRIÇÃO */}
          <p className="text-lg text-gray-200 leading-relaxed max-w-[520px]">
            {course.description}
          </p>

        </div>

        {/* RODAPÉ — só métricas, sem botão */}
        <div className="flex gap-8">
          {[
            { icon: "🕐", value: course.duration, label: "Duração" },
            { icon: "📊", value: course.level,    label: "Nível"   },
            { icon: "👥", value: "1.250",         label: "Alunos"  },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-lg">{item.icon}</span>
              <div>
                <p className="font-bold text-white leading-tight">{item.value}</p>
                <p className="text-xs text-gray-300">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}