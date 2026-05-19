"use client"

type NavbarProps = {
  search?: string
  onSearchChange?: (value: string) => void
}

export function Navbar({
  search,
  onSearchChange,
}: NavbarProps) {
  return (
    <header
      className="
        h-[90px]
        bg-[#33473C]
        flex
        items-center
        justify-between
        px-8
      "
    >

      {/* BUSCA */}
      <div
        className="
          bg-white/10
          border
          border-white/10
          rounded-2xl
          px-5
          h-[50px]
          w-[500px]
          flex
          items-center
        "
      >

        <input
          type="text"
          placeholder="Buscar cursos..."
          value={search || ""}
            onChange={(e) => onSearchChange?.(e.target.value)}
          className="
            bg-transparent
            outline-none
            text-white
            w-full
            placeholder:text-gray-300
          "
        />

      </div>

      {/* PERFIL */}
      <div className="flex items-center gap-4 text-white">

        <div className="text-2xl">
          🔔
        </div>

        <div className="flex items-center gap-3">

          <div
            className="
              w-12
              h-12
              rounded-full
              bg-[#99CB38]
              flex
              items-center
              justify-center
              text-black
              font-bold
            "
          >
            C
          </div>

          <div>
            <p className="font-semibold">
              César
            </p>

            <p className="text-sm text-gray-300">
              Funcionário
            </p>
          </div>

        </div>

      </div>

    </header>
  )
}