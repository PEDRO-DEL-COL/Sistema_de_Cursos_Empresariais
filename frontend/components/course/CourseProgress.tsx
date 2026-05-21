import Link from "next/link"

type CourseProgressProps = {
  courseId: number

  lessonId?: number

  progress?: number

  hoursCompleted?: number

  totalHours?: number
}

export function CourseProgress({
  courseId,

  lessonId = 1,

  progress = 35,

  hoursCompleted = 14,

  totalHours = 40,
}: CourseProgressProps) {

  // SVG donut chart
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-8">

      {/* TÍTULO */}
      <h2 className="text-xl font-bold text-[#1F2E27] mb-6">
        Seu progresso
      </h2>

      {/* CÍRCULO + TEXTO */}
      <div className="flex items-center gap-6 mb-6">

        {/* DONUT */}
        <div className="relative w-28 h-28 shrink-0">
          
          <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">

            {/* Trilha */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="12"
            />

            {/* Progresso */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="#99CB38"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>

          {/* TEXTO CENTRAL */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-black text-[#1F2E27]">
              {progress}%
            </span>
          </div>
        </div>

        {/* TEXTO */}
        <div className="flex flex-col gap-2">
          
          <p className="text-sm text-gray-500">
            Progresso geral
          </p>

          <p className="text-sm font-semibold text-[#1F2E27]">
            {hoursCompleted}h concluídas de {totalHours}h
          </p>

          {/* BARRA */}
          <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
            
            <div
              className="h-2 bg-[#99CB38] rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* BOTÃO PRINCIPAL */}
      <Link
        href={`/courses/${courseId}/lesson/${lessonId}`}
      >
        <button
          className="
            w-full h-[52px] rounded-2xl bg-[#1F2E27]
            hover:bg-[#2A3B33]
            transition-all text-white font-bold
            flex items-center justify-center gap-2 mb-3
          "
        >
          <span>▶</span>
          Continuar Assistindo
        </button>
      </Link>

      {/* FAVORITOS */}
      <button
        className="
          w-full h-[52px] rounded-2xl border border-black/10 bg-white
          hover:bg-gray-50 transition-all text-[#1F2E27]
          font-semibold flex items-center justify-center gap-2
        "
      >
        <span>🔖</span>
        Adicionar aos Favoritos
      </button>

    </div>
  )
}