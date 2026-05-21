"use client"

import {
  Play,
  Volume2,
  Settings,
  Maximize,
} from "lucide-react"

interface VideoPlayerProps {
  thumbnail?: string
  title?: string
  duration?: string
  currentTime?: string
}

export function VideoPlayer({
  thumbnail = "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  title = "Introdução ao HTML",
  duration = "16:25",
  currentTime = "08:47",
}: VideoPlayerProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
      
      {/* VIDEO */}
      <div className="relative aspect-video w-full bg-black">
        
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover"
        />

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Botão play central */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 backdrop-blur transition hover:scale-105">
            <Play className="ml-1 h-8 w-8 text-green-900 fill-green-900" />
          </button>
        </div>

        {/* CONTROLES */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          
          {/* Barra */}
          <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-white/30">
            <div className="h-full w-[55%] rounded-full bg-lime-500" />
          </div>

          {/* Linha controles */}
          <div className="flex items-center justify-between text-white">
            
            <div className="flex items-center gap-4">
              
              <button className="transition hover:scale-110">
                <Play className="h-5 w-5 fill-white" />
              </button>

              <span className="text-sm font-medium">
                {currentTime} / {duration}
              </span>
            </div>

            <div className="flex items-center gap-4">
              
              <button className="transition hover:scale-110">
                <Volume2 className="h-5 w-5" />
              </button>

              <button className="transition hover:scale-110">
                <Settings className="h-5 w-5" />
              </button>

              <button className="transition hover:scale-110">
                <Maximize className="h-5 w-5" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}