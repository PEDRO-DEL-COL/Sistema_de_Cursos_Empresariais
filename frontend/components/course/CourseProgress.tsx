type CourseProgressProps = {
  progress?: number
}

export function CourseProgress({
  progress = 35,
}: CourseProgressProps) {

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
          Progresso
        </span>

        <h2
          className="
            text-3xl
            font-black
            text-[#1F2E27]
          "
        >
          Seu Desempenho
        </h2>

      </div>

      {/* CÍRCULO */}
      <div className="flex justify-center mb-8">

        <div
          className="
            relative
            w-44
            h-44
            rounded-full
            border-[14px]
            border-[#99CB38]
            flex
            items-center
            justify-center
          "
        >

          <div className="text-center">

            <h3
              className="
                text-5xl
                font-black
                text-[#1F2E27]
                leading-none
                mb-2
              "
            >
              {progress}%
            </h3>

            <p className="text-gray-500 text-sm">
              concluído
            </p>

          </div>

        </div>

      </div>

      {/* ESTATÍSTICAS */}
      <div className="flex flex-col gap-4 mb-8">

        {/* ITEM */}
        <div
          className="
            flex
            items-center
            justify-between
            rounded-2xl
            bg-[#F8F7F2]
            border
            border-black/5
            px-5
            py-4
          "
        >

          <span className="text-gray-600">
            Módulos completos
          </span>

          <strong className="text-[#1F2E27]">
            2/6
          </strong>

        </div>

        {/* ITEM */}
        <div
          className="
            flex
            items-center
            justify-between
            rounded-2xl
            bg-[#F8F7F2]
            border
            border-black/5
            px-5
            py-4
          "
        >

          <span className="text-gray-600">
            Tempo assistido
          </span>

          <strong className="text-[#1F2E27]">
            14h
          </strong>

        </div>

        {/* ITEM */}
        <div
          className="
            flex
            items-center
            justify-between
            rounded-2xl
            bg-[#F8F7F2]
            border
            border-black/5
            px-5
            py-4
          "
        >

          <span className="text-gray-600">
            Certificado
          </span>

          <strong className="text-[#47662E]">
            Em progresso
          </strong>

        </div>

      </div>

      {/* BOTÃO */}
      <button
        className="
          w-full
          h-[60px]
          rounded-2xl
          bg-[#1F2E27]
          hover:bg-[#2A3B33]
          transition-all
          text-white
          text-lg
          font-bold
        "
      >
        ▶ Continuar Curso
      </button>

    </div>

  )
}