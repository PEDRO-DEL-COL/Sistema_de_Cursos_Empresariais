export type Lesson = {
  id: number

  title: string

  description: string

  duration: string

  completed: boolean
}

export type Module = {
  id: number

  title: string

  lessons: Lesson[]
}

export type Course = {
  id: number

  title: string

  category: string

  duration: string

  level: string

  image: string

  description: string

  instructor: string

  progress: number

  modules: Module[]
}