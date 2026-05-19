type CourseModulesProps = {
  course: {
    title: string
  }
}

export function CourseModules({
  course,
}: CourseModulesProps) {
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
          Conteúdo
        </span>

        <h2
          className="
            text-4xl
            font-black
            text-[#1F2E27]
            mb-4
          "
        >
          Módulos do Curso
        </h2>

        <p
          className="
            text-gray-600
            text-lg
            leading-relaxed
          "
        >
          Explore as etapas e acompanhe o conteúdo
          disponível no treinamento.
        </p>

      </div>

      {/* LISTA DE MÓDULOS */}
      <div className="flex flex-col gap-5">

        {/* MÓDULO */}
        <div
          className="
            rounded-3xl
            border
            border-black/5
            bg-[#F8F7F2]
            p-6
          "
        >

          <div className="flex items-center justify-between mb-5">

            <div className="flex items-center gap-5">

              {/* ÍCONE */}
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#99CB38]
                  flex
                  items-center
                  justify-center
                  text-3xl
                "
              >
                🚀
              </div>

              {/* TEXTO */}
              <div>

                <h3
                  className="
                    text-2xl
                    font-black
                    text-[#1F2E27]
                    mb-2
                  "
                >
                  Introdução ao Curso
                </h3>

                <p className="text-gray-600">
                  Primeiros passos e visão geral.
                </p>

              </div>

            </div>

            {/* STATUS */}
            <span
              className="
                bg-[#DDF4B8]
                text-[#47662E]
                font-bold
                px-5
                py-2
                rounded-full
              "
            >
              Concluído
            </span>

          </div>

          {/* AULAS */}
          <div className="flex flex-col gap-3">

            <div
              className="
                flex
                items-center
                justify-between
                bg-white
                rounded-2xl
                px-5
                py-4
                border
                border-black/5
              "
            >

              <div>

                <h4
                  className="
                    font-bold
                    text-[#1F2E27]
                    mb-1
                  "
                >
                  Aula 1 — Apresentação
                </h4>

                <p className="text-sm text-gray-500">
                  12 minutos
                </p>

              </div>

              <button
                className="
                  bg-[#1F2E27]
                  hover:bg-[#2A3B33]
                  transition-all
                  text-white
                  font-semibold
                  px-5
                  py-3
                  rounded-xl
                "
              >
                Assistir
              </button>

            </div>

            <div
              className="
                flex
                items-center
                justify-between
                bg-white
                rounded-2xl
                px-5
                py-4
                border
                border-black/5
              "
            >

              <div>

                <h4
                  className="
                    font-bold
                    text-[#1F2E27]
                    mb-1
                  "
                >
                  Aula 2 — Objetivos do treinamento
                </h4>

                <p className="text-sm text-gray-500">
                  18 minutos
                </p>

              </div>

              <button
                className="
                  bg-[#1F2E27]
                  hover:bg-[#2A3B33]
                  transition-all
                  text-white
                  font-semibold
                  px-5
                  py-3
                  rounded-xl
                "
              >
                Assistir
              </button>

            </div>

          </div>

        </div>

        {/* MÓDULO */}
        <div
          className="
            rounded-3xl
            border
            border-black/5
            bg-[#F8F7F2]
            p-6
          "
        >

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-5">

              {/* ÍCONE */}
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#99CB38]
                  flex
                  items-center
                  justify-center
                  text-3xl
                "
              >
                📚
              </div>

              {/* TEXTO */}
              <div>

                <h3
                  className="
                    text-2xl
                    font-black
                    text-[#1F2E27]
                    mb-2
                  "
                >
                  Fundamentos Essenciais
                </h3>

                <p className="text-gray-600">
                  Conceitos fundamentais do treinamento.
                </p>

              </div>

            </div>

            {/* STATUS */}
            <span
              className="
                bg-gray-200
                text-gray-700
                font-bold
                px-5
                py-2
                rounded-full
              "
            >
              Em andamento
            </span>

          </div>

        </div>

        {/* MÓDULO */}
        <div
          className="
            rounded-3xl
            border
            border-black/5
            bg-[#F8F7F2]
            p-6
          "
        >

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-5">

              {/* ÍCONE */}
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#99CB38]
                  flex
                  items-center
                  justify-center
                  text-3xl
                "
              >
                🏆
              </div>

              {/* TEXTO */}
              <div>

                <h3
                  className="
                    text-2xl
                    font-black
                    text-[#1F2E27]
                    mb-2
                  "
                >
                  Projeto Final
                </h3>

                <p className="text-gray-600">
                  Aplicação prática dos conhecimentos.
                </p>

              </div>

            </div>

            {/* STATUS */}
            <span
              className="
                bg-gray-200
                text-gray-700
                font-bold
                px-5
                py-2
                rounded-full
              "
            >
              Bloqueado
            </span>

          </div>

        </div>

      </div>

    </div>

  )
}