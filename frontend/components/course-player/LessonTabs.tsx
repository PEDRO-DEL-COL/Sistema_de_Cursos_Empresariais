"use client"

import {
  FileText,
  Download,
  NotebookPen,
} from "lucide-react"

export function LessonTabs() {
  return (
    <div className="mt-6 rounded-3xl border border-neutral-200 bg-white shadow-sm">
      
      {/* HEADER TABS */}
      <div className="flex items-center gap-8 border-b border-neutral-200 px-6 pt-6">
        
        <button className="border-b-2 border-lime-700 pb-4 text-sm font-semibold text-lime-800">
          Sobre a aula
        </button>

        <button className="pb-4 text-sm font-medium text-neutral-500 transition hover:text-neutral-800">
          Materiais
        </button>

        <button className="pb-4 text-sm font-medium text-neutral-500 transition hover:text-neutral-800">
          Anotações
        </button>
      </div>

      {/* CONTEÚDO */}
      <div className="grid gap-6 p-6 xl:grid-cols-[1fr_320px]">
        
        {/* ESQUERDA */}
        <div>
          
          <p className="text-base leading-relaxed text-neutral-700">
            HTML (HyperText Markup Language) é a linguagem de marcação utilizada
            para criar o conteúdo das páginas web.
          </p>

          <p className="mt-6 text-base leading-relaxed text-neutral-700">
            Nesta aula veremos:
          </p>

          <div className="mt-6 space-y-4">
            
            <LessonTopic text="O que é HTML e sua importância" />

            <LessonTopic text="Estrutura básica de um documento HTML" />

            <LessonTopic text="Principais tags e elementos" />

            <LessonTopic text="Criando sua primeira página" />
          </div>
        </div>

        {/* DIREITA */}
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
          
          <div className="flex items-center gap-2">
            
            <FileText className="h-5 w-5 text-lime-700" />

            <h3 className="text-lg font-semibold text-neutral-900">
              Materiais de apoio
            </h3>
          </div>

          <div className="mt-6 space-y-4">
            
            <MaterialItem
              title="Slides da aula"
              type="PDF • 2.4MB"
            />

            <MaterialItem
              title="Exemplos de código"
              type="ZIP • 1.8MB"
            />

            <MaterialItem
              title="Resumo da aula"
              type="PDF • 900KB"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

/* -------------------------- */
/* COMPONENTES AUXILIARES */
/* -------------------------- */

interface LessonTopicProps {
  text: string
}

function LessonTopic({
  text,
}: LessonTopicProps) {
  return (
    <div className="flex items-start gap-3">
      
      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-lime-700" />

      <p className="text-neutral-700">
        {text}
      </p>
    </div>
  )
}

interface MaterialItemProps {
  title: string
  type: string
}

function MaterialItem({
  title,
  type,
}: MaterialItemProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-4">
      
      <div className="flex items-center gap-3">
        
        <NotebookPen className="h-5 w-5 text-lime-700" />

        <div>
          
          <p className="font-medium text-neutral-900">
            {title}
          </p>

          <p className="text-sm text-neutral-500">
            {type}
          </p>
        </div>
      </div>

      <button className="transition hover:scale-110">
        <Download className="h-5 w-5 text-neutral-500" />
      </button>
    </div>
  )
}