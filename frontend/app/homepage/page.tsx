"use client"

import { useState } from "react"

import { Sidebar } from "@/components/layout/Sidebar"
import { Navbar } from "@/components/layout/Navbar"

import { CourseCard } from "@/components/dashboard/CourseCard"
import { CategoryFilter } from "@/components/dashboard/CategoryFilter"

import { courses } from "@/mocks/courses"

export default function Homepage() {

  const categories = [
    "Todos",
    "Tecnologia",
    "Negócios",
    "Design",
    "Marketing",
    "Desenvolvimento Pessoal",
  ]

  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const [searchTerm, setSearchTerm] = useState("")

  const filteredCourses = courses.filter((course) => {

    const matchesCategory =
      selectedCategory === "Todos" ||
      course.category === selectedCategory

    const matchesSearch =
      course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      course.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      course.category
        .toLowerCase()
        .includes(searchTerm.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <main className="flex min-h-screen bg-[#E2DFCC]">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTEÚDO */}
      <div className="flex-1 flex flex-col">

        {/* NAVBAR */}
        <Navbar
          search={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* ÁREA PRINCIPAL */}
        <section className="p-8">

          {/* HEADER */}
          <div className="mb-10">

            <h1 className="text-4xl font-bold text-[#33473C] mb-3">
              Olá, César 👋
            </h1>

            <p className="text-gray-600 text-lg">
              Explore os cursos disponíveis e continue evoluindo.
            </p>

          </div>

          {/* TOPO DA SEÇÃO */}
          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-bold text-[#33473C]">
              Cursos Disponíveis
            </h2>

            <button
              className="
                bg-[#33473C]
                text-white
                px-5
                py-2
                rounded-xl
                hover:opacity-90
                transition
              "
            >
              Ver Todos
            </button>

          </div>

          {/* FILTRO DE CATEGORIAS */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* GRID DE CURSOS */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              2xl:grid-cols-4
              gap-6
            "
          >

            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}

          </div>

        </section>
      </div>
    </main>
  )
}