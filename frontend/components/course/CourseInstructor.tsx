export function CourseInstructor() {
  return (

    <div
      className="
        bg-white
        rounded-3xl
        border
        border-black/5
        shadow-sm
        p-8
      "
    >

      {/* HEADER */}
      <div className="mb-8">

        <span
          className="
            inline-flex
            items-center
            bg-[#E8F5CC]
            text-[#47662E]
            font-semibold
            text-sm
            px-4
            py-2
            rounded-full
            mb-5
          "
        >
          Instrutor
        </span>

        <h2
          className="
            text-3xl
            font-black
            text-[#1F2E27]
          "
        >
          Responsável pelo Curso
        </h2>

      </div>

      {/* PERFIL */}
      <div
        className="
          flex
          items-center
          gap-5
          mb-8
        "
      >

        {/* FOTO */}
        <div
          className="
            w-24
            h-24
            rounded-3xl
            bg-[#99CB38]
            flex
            items-center
            justify-center
            text-4xl
            font-black
            text-black
            shrink-0
          "
        >
          C
        </div>

        {/* INFOS */}
        <div>

          <h3
            className="
              text-2xl
              font-black
              text-[#1F2E27]
              mb-2
            "
          >
            César Nangi
          </h3>

          <p
            className="
              text-[#47662E]
              font-semibold
              mb-3
            "
          >
            Especialista Corporativo
          </p>

          <p className="text-gray-600 leading-relaxed">
            Atua no treinamento interno de equipes,
            desenvolvimento profissional e capacitação
            técnica de colaboradores.
          </p>

        </div>

      </div>

      {/* ESTATÍSTICAS */}
      <div className="grid grid-cols-2 gap-4 mb-8">

        {/* CARD */}
        <div
          className="
            rounded-2xl
            bg-[#F8F7F2]
            border
            border-black/5
            p-5
          "
        >

          <p className="text-gray-500 text-sm mb-2">
            Cursos
          </p>

          <h3
            className="
              text-3xl
              font-black
              text-[#1F2E27]
            "
          >
            12
          </h3>

        </div>

        {/* CARD */}
        <div
          className="
            rounded-2xl
            bg-[#F8F7F2]
            border
            border-black/5
            p-5
          "
        >

          <p className="text-gray-500 text-sm mb-2">
            Alunos
          </p>

          <h3
            className="
              text-3xl
              font-black
              text-[#1F2E27]
            "
          >
            1.2k
          </h3>

        </div>

      </div>

      {/* BOTÃO */}
      <button
        className="
          w-full
          h-[58px]
          rounded-2xl
          bg-[#1F2E27]
          hover:bg-[#2A3B33]
          transition-all
          text-white
          text-lg
          font-bold
        "
      >
        Ver Perfil Completo
      </button>

    </div>

  )
}