export function Sidebar() {
  return (
    <aside
      className="
        w-[260px]
        min-h-screen
        bg-[#33473C]
        text-white
        flex
        flex-col
        justify-between
        p-6
      "
    >

      {/* LOGO */}
      <div>

        <div className="flex items-center gap-3 mb-12">

          <div
            className="
              w-14
              h-14
              rounded-full
              bg-[#99CB38]
              flex
              items-center
              justify-center
              text-2xl
            "
          >
            🎓
          </div>

          <div>
            <h1 className="text-2xl font-bold leading-6">
              Sistema
            </h1>

            <p className="text-[#99CB38] font-semibold">
              de Cursos
            </p>
          </div>

        </div>

        {/* MENU */}
        <nav className="flex flex-col gap-4">

          <button
            className="
              bg-[#99CB38]
              text-black
              font-semibold
              rounded-xl
              p-4
              text-left
            "
          >
            Início
          </button>

          <button className="p-4 text-left hover:bg-white/10 rounded-xl transition">
            Meus Cursos
          </button>

          <button className="p-4 text-left hover:bg-white/10 rounded-xl transition">
            Certificados
          </button>

          <button className="p-4 text-left hover:bg-white/10 rounded-xl transition">
            Favoritos
          </button>

          <button className="p-4 text-left hover:bg-white/10 rounded-xl transition">
            Histórico
          </button>

          <button className="p-4 text-left hover:bg-white/10 rounded-xl transition">
            Perfil
          </button>

        </nav>
      </div>

      {/* CARD INFERIOR */}
      <div
        className="
          bg-white/10
          rounded-2xl
          p-6
          text-center
        "
      >

        <div className="text-5xl mb-4">
          🏆
        </div>

        <h2 className="font-bold text-xl mb-2">
          Continue aprendendo!
        </h2>

        <p className="text-sm text-gray-300 mb-5">
          Acesse novos cursos e desenvolva suas habilidades.
        </p>

        <button
          className="
            bg-[#99CB38]
            text-black
            font-semibold
            w-full
            p-3
            rounded-xl
          "
        >
          Ver meus cursos
        </button>

      </div>
    </aside>
  )
}