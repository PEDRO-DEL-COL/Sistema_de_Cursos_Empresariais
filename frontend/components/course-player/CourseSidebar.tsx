"use client"

import {
  ChevronDown,
  Folder,
  PlayCircle,
  CheckCircle2,
} from "lucide-react"

export function CourseSidebar() {
  return (
    <aside className="w-full space-y-6">
      
      {/* PROGRESSO */}
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        
        <h2 className="text-2xl font-bold text-neutral-900">
          Conteúdo do curso
        </h2>

        <div className="mt-6">
          
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-neutral-600">
              Seu progresso geral
            </span>

            <span className="text-sm font-semibold text-neutral-900">
              35%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
            <div className="h-full w-[35%] rounded-full bg-lime-700" />
          </div>

          <p className="mt-3 text-sm text-neutral-600">
            14h de 40h concluídas
          </p>
        </div>
      </div>

      {/* MÓDULOS */}
      <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm">
        
        {/* MÓDULO 1 */}
        <div className="border-b border-neutral-200 p-5">
          
          <div className="flex items-center justify-between">
            
            <div className="flex items-center gap-3">
              <Folder className="h-5 w-5 text-lime-700" />

              <h3 className="font-semibold text-neutral-900">
                Módulo 1 - Introdução
              </h3>
            </div>

            <div className="flex items-center gap-3">
              
              <span className="text-sm text-neutral-500">
                3/3
              </span>

              <ChevronDown className="h-4 w-4 text-neutral-500" />
            </div>
          </div>

          {/* AULAS */}
          <div className="mt-5 space-y-3">
            
            <LessonCompleted
              title="1.1 Boas-vindas ao curso"
              duration="05:23"
            />

            <LessonCompleted
              title="1.2 Como funciona o curso"
              duration="04:15"
            />

            <LessonCompleted
              title="1.3 Ferramentas necessárias"
              duration="06:40"
            />
          </div>
        </div>

        {/* MÓDULO 2 */}
        <div className="p-5">
          
          <div className="flex items-center justify-between">
            
            <div className="flex items-center gap-3">
              <Folder className="h-5 w-5 text-lime-700" />

              <h3 className="font-semibold text-neutral-900">
                Módulo 2 - HTML e CSS
              </h3>
            </div>

            <div className="flex items-center gap-3">
              
              <span className="text-sm text-neutral-500">
                1/5
              </span>

              <ChevronDown className="h-4 w-4 text-neutral-500" />
            </div>
          </div>

          {/* AULAS */}
          <div className="mt-5 space-y-3">
            
            <LessonActive
              title="2.1 Introdução ao HTML"
              duration="16:25"
            />

            <LessonPending
              title="2.2 Estrutura básica do HTML"
              duration="12:10"
            />

            <LessonPending
              title="2.3 Tags e elementos"
              duration="18:30"
            />

            <LessonPending
              title="2.4 Links e imagens"
              duration="14:45"
            />

            <LessonPending
              title="2.5 Projeto prático"
              duration="22:15"
            />
          </div>
        </div>
      </div>
    </aside>
  )
}

/* -------------------------- */
/* COMPONENTES AUXILIARES */
/* -------------------------- */

interface LessonProps {
  title: string
  duration: string
}

function LessonCompleted({
  title,
  duration,
}: LessonProps) {
  return (
    <div className="flex items-center justify-between">
      
      <div className="flex items-center gap-3">
        
        <CheckCircle2 className="h-5 w-5 text-green-600" />

        <span className="text-sm text-neutral-700">
          {title}
        </span>
      </div>

      <span className="text-sm text-neutral-500">
        {duration}
      </span>
    </div>
  )
}

function LessonPending({
  title,
  duration,
}: LessonProps) {
  return (
    <div className="flex items-center justify-between">
      
      <div className="flex items-center gap-3">
        
        <PlayCircle className="h-5 w-5 text-neutral-400" />

        <span className="text-sm text-neutral-600">
          {title}
        </span>
      </div>

      <span className="text-sm text-neutral-500">
        {duration}
      </span>
    </div>
  )
}

function LessonActive({
  title,
  duration,
}: LessonProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-lime-200 bg-lime-50 px-3 py-3">
      
      <div className="flex items-center gap-3">
        
        <PlayCircle className="h-5 w-5 text-green-700 fill-green-700" />

        <span className="text-sm font-medium text-green-900">
          {title}
        </span>
      </div>

      <span className="text-sm font-semibold text-green-900">
        {duration}
      </span>
    </div>
  )
}