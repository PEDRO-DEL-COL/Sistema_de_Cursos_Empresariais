"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"

export function LoginForm() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")
  const [loading, setLoading] = useState(false)

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
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
    <div className="w-1/2 bg-[#33473C] p-8 flex flex-col justify-center">

      <h1 className="text-2xl text-white font-bold mb-6 text-center">
        Login
      </h1>

      {erro && (
        <p className="text-red-400 text-sm mb-3">
          {erro}
        </p>
      )}

      <form onSubmit={handleLogin}>

        <Input
          type="email"
          placeholder="Email"
          className="mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Senha"
          className="mb-4"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <Button
          type="submit"
          disabled={loading}
        >
          {loading ? "Entrando..." : "Entrar"}
        </Button>

      </form>
    </div>
  )
}