"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  const [isFlipped, setIsFlipped] = useState(false)

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")
  const [loading, setLoading] = useState(false)

  function handleLogin(e: any) {
    e.preventDefault()
    setErro("")
    setLoading(true)

    setTimeout(() => {
      if (email === "admin@email.com" && senha === "123") {
        localStorage.setItem("usuario", email)
        router.push("/dashboard")
      } else {
        setErro("Email ou senha inválidos")
      }

      setLoading(false)
    }, 1000)
  }

  return (
    <div className="flex items-center justify-center h-screen bg-[#E2DFCC]">

        <div className="absolute top-10 flex items-center gap-3 bg-[#33473C] p-1 rounded-full shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
  
        {/* fundo do botão */}
        <div
            className="relative w-[160px] h-[40px] cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            
            {/* slider */}
            <div
            className={`absolute top-0 left-0 w-[80px] h-full bg-[#99CB38] rounded-full transition-all duration-300 ${
                isFlipped ? "translate-x-[80px]" : ""
            }`}
            />

            {/* labels */}
            <div className="absolute w-full h-full flex items-center justify-between px-4 text-white text-sm font-semibold pointer-events-none">
            <span>Login</span>
            <span>Cadastro</span>
            </div>
        </div>
        </div>

      {/* container com perspectiva */}
      <div className="w-[700px] h-[500px] [perspective:1200px]">

        {/* card que gira */}
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >

          {/* FRONT - LOGIN */}
          <div className="absolute w-full h-full rounded-xl overflow-hidden shadow-[6px_6px_0px_rgba(0,0,0,0.2)] [backface-visibility:hidden] flex">

            {/* IMAGEM */}
            <div className="w-1/2 p-3 bg-[#33473C]">
                <div className="w-full h-full  rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('/login.png')"}} />
            </div>
            {/* FORM */}
            <div className="w-1/2 bg-[#33473C] p-8 flex flex-col justify-center">

                <h1 className="text-2xl text-white font-bold mb-6 text-center">
                Login
                </h1>

                {erro && (
                <p className="text-red-400 text-sm mb-3">{erro}</p>
                )}

                <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-3 p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#99CB38]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    className="w-full mb-4 p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#99CB38]"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#99CB38] text-white p-2 rounded hover:bg-[#729928]"
                >
                    {loading ? "Entrando..." : "Entrar"}
                </button>
                </form>
            </div>
            </div>

          {/* BACK - CADASTRO */}
          <div className="absolute w-full h-full rounded-xl overflow-hidden shadow-[6px_6px_0px_rgba(0,0,0,0.2)] [transform:rotateY(180deg)] [backface-visibility:hidden] flex">

            {/* IMAGEM */}
            <div className="w-1/2 p-3 bg-[#33473C]">
                <div className="w-full h-full  rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('/cadastro.png')"}} />
            </div>

            {/* FORM */}
            <div className="w-1/2 bg-[#33473C] p-8 flex flex-col justify-center">

                <h1 className="text-2xl text-white font-bold mb-6 text-center">
                Cadastro
                </h1>

                <input
                type="text"
                placeholder="Nome"
                className="w-full mb-3 p-2 rounded bg-gray-100"
                />

                <input
                type="email"
                placeholder="Email"
                className="w-full mb-3 p-2 rounded bg-gray-100"
                />

                <input
                type="password"
                placeholder="Senha"
                className="w-full mb-4 p-2 rounded bg-gray-100"
                />

                <button className="w-full bg-[#99CB38] text-white p-2 rounded hover:bg-[#729928]">
                Criar conta
                </button>
            </div>
            </div>

        </div>
      </div>
    </div>
  )
}