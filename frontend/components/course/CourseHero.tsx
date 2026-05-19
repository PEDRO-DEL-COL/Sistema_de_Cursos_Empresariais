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

export function CourseHero({
  course,
}: CourseHeroProps) {
  return (

    <div
      className="
        relative
        h-[420px]
        rounded-3xl
        overflow-hidden
        shadow-sm
      "
    >

      {/* IMAGEM */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: `url(${course.image})`,
        }}
      />

      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#0F1A14]/95
          via-[#132019]/80
          to-[#132019]/20
        "
      />

      {/* CONTEÚDO */}
      <div
        className="
          relative
          z-10
          h-full
          flex
          flex-col
          justify-between
          p-8
          text-white
        "
      >

        {/* TOPO */}
        <div>

          {/* BADGE */}
          <span
            className="
              inline-flex
              items-center
              bg-[#99CB38]
              text-black
              font-bold
              text-sm
              px-5
              py-2
              rounded-full
              mb-6
            "
          >
            {course.category}
          </span>

          {/* TÍTULO */}
          <h1
            className="
              text-5xl
              font-black
              leading-tight
              max-w-[500px]
              mb-5
            "
          >
            {course.title}
          </h1>

          {/* DESCRIÇÃO */}
          <p
            className="
              text-lg
              text-gray-200
              leading-relaxed
              max-w-[520px]
            "
          >
            {course.description}
          </p>

        </div>

        {/* RODAPÉ */}
        <div className="flex items-end justify-between">

          {/* INFOS */}
          <div className="flex gap-10">

            <div>

              <p className="text-sm text-gray-300">
                Duração
              </p>

              <h3 className="text-3xl font-bold">
                {course.duration}
              </h3>

            </div>

            <div>

              <p className="text-sm text-gray-300">
                Nível
              </p>

              <h3 className="text-3xl font-bold">
                {course.level}
              </h3>

            </div>

            <div>

              <p className="text-sm text-gray-300">
                Alunos
              </p>

              <h3 className="text-3xl font-bold">
                1.250
              </h3>

            </div>

          </div>

          {/* BOTÃO */}
          <button
            className="
              bg-[#99CB38]
              hover:bg-[#ACEF2E]
              text-black
              font-bold
              px-8
              py-4
              rounded-2xl
              transition-all
              duration-300
            "
          >
            ▶ Começar Curso
          </button>

        </div>

      </div>

    </div>

  )
}