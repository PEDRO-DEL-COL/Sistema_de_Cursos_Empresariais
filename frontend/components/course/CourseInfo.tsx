type CourseInfoProps = {
  course: {
    category: string
    duration: string
    level: string
  }
}

export function CourseInfo({
  course,
}: CourseInfoProps) {
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
          Informações
        </span>

        <h2
          className="
            text-3xl
            font-black
            text-[#1F2E27]
          "
        >
          Detalhes do Curso
        </h2>

      </div>

      {/* LISTA */}
      <div className="flex flex-col gap-5">

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
            p-5
          "
        >

          <div className="flex items-center gap-4">

            <div
              className="
                w-12
                h-12
                rounded-2xl
                bg-[#99CB38]
                flex
                items-center
                justify-center
                text-xl
              "
            >
              📁
            </div>

            <div>

              <p className="text-sm text-gray-500">
                Categoria
              </p>

              <h3
                className="
                  text-lg
                  font-bold
                  text-[#1F2E27]
                "
              >
                {course.category}
              </h3>

            </div>

          </div>

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
            p-5
          "
        >

          <div className="flex items-center gap-4">

            <div
              className="
                w-12
                h-12
                rounded-2xl
                bg-[#99CB38]
                flex
                items-center
                justify-center
                text-xl
              "
            >
              ⏱
            </div>

            <div>

              <p className="text-sm text-gray-500">
                Duração
              </p>

              <h3
                className="
                  text-lg
                  font-bold
                  text-[#1F2E27]
                "
              >
                {course.duration}
              </h3>

            </div>

          </div>

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
            p-5
          "
        >

          <div className="flex items-center gap-4">

            <div
              className="
                w-12
                h-12
                rounded-2xl
                bg-[#99CB38]
                flex
                items-center
                justify-center
                text-xl
              "
            >
              📈
            </div>

            <div>

              <p className="text-sm text-gray-500">
                Nível
              </p>

              <h3
                className="
                  text-lg
                  font-bold
                  text-[#1F2E27]
                "
              >
                {course.level}
              </h3>

            </div>

          </div>

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
            p-5
          "
        >

          <div className="flex items-center gap-4">

            <div
              className="
                w-12
                h-12
                rounded-2xl
                bg-[#99CB38]
                flex
                items-center
                justify-center
                text-xl
              "
            >
              🏆
            </div>

            <div>

              <p className="text-sm text-gray-500">
                Certificado
              </p>

              <h3
                className="
                  text-lg
                  font-bold
                  text-[#1F2E27]
                "
              >
                Disponível
              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}