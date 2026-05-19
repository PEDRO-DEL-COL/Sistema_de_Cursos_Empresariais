type CourseAboutProps = {
  course: {
    title: string
    category: string
  }
}

export function CourseAbout({
  course,
}: CourseAboutProps) {
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
          Sobre o curso
        </span>

        <h2
          className="
            text-4xl
            font-black
            text-[#1F2E27]
            leading-tight
            mb-5
          "
        >
          Aprenda {course.title}
          <br />
          de forma prática
        </h2>

        <p
          className="
            text-gray-600
            text-lg
            leading-relaxed
            max-w-[850px]
          "
        >
          Este treinamento foi desenvolvido para capacitar
          colaboradores através de uma abordagem moderna,
          prática e totalmente aplicada ao ambiente corporativo.
          O conteúdo combina teoria, exemplos reais e atividades
          voltadas para desenvolvimento profissional contínuo.
        </p>

      </div>

      {/* GRID DE SKILLS */}
      <div className="grid grid-cols-2 gap-5">

        {/* SKILL */}
        <div
          className="
            rounded-2xl
            border
            border-black/5
            bg-[#F8F7F2]
            p-6
          "
        >

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-[#99CB38]
              flex
              items-center
              justify-center
              text-2xl
              mb-5
            "
          >
            🚀
          </div>

          <h3
            className="
              text-xl
              font-bold
              text-[#1F2E27]
              mb-3
            "
          >
            Conteúdo Atualizado
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Material constantemente revisado para acompanhar
            práticas modernas do mercado.
          </p>

        </div>

        {/* SKILL */}
        <div
          className="
            rounded-2xl
            border
            border-black/5
            bg-[#F8F7F2]
            p-6
          "
        >

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-[#99CB38]
              flex
              items-center
              justify-center
              text-2xl
              mb-5
            "
          >
            🎯
          </div>

          <h3
            className="
              text-xl
              font-bold
              text-[#1F2E27]
              mb-3
            "
          >
            Aplicação Prática
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Exercícios e exemplos focados em situações reais
            do ambiente corporativo.
          </p>

        </div>

        {/* SKILL */}
        <div
          className="
            rounded-2xl
            border
            border-black/5
            bg-[#F8F7F2]
            p-6
          "
        >

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-[#99CB38]
              flex
              items-center
              justify-center
              text-2xl
              mb-5
            "
          >
            📚
          </div>

          <h3
            className="
              text-xl
              font-bold
              text-[#1F2E27]
              mb-3
            "
          >
            Módulos Organizados
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Estrutura dividida em etapas para facilitar
            o aprendizado progressivo.
          </p>

        </div>

        {/* SKILL */}
        <div
          className="
            rounded-2xl
            border
            border-black/5
            bg-[#F8F7F2]
            p-6
          "
        >

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-[#99CB38]
              flex
              items-center
              justify-center
              text-2xl
              mb-5
            "
          >
            🏆
          </div>

          <h3
            className="
              text-xl
              font-bold
              text-[#1F2E27]
              mb-3
            "
          >
            Certificação
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Emissão de certificado interno após a conclusão
            completa do treinamento.
          </p>

        </div>

      </div>

    </div>

  )
}