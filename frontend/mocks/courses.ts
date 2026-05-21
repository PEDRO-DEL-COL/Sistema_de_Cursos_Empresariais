import { Course } from "@/types/course"

export const courses: Course[] = [
  {
    id: 1,

    title: "Introdução ao Desenvolvimento Web",

    category: "Tecnologia",

    duration: "20h",

    level: "Nível Iniciante",

    image: "/courses/web.jpg",

    description:
      "Aprenda HTML, CSS e JavaScript do zero e crie suas primeiras páginas web.",

    instructor: "João Pedro Martins",

    progress: 35,

    modules: [
      {
        id: 1,

        title: "Módulo 1 - Introdução",

        lessons: [
          {
            id: 1,

            title: "1.1 Boas-vindas",

            description:
              "Introdução inicial ao curso e apresentação da plataforma.",

            duration: "05:23",

            completed: true,
          },

          {
            id: 2,

            title: "1.2 Como funciona o curso",

            description:
              "Conheça a metodologia e a estrutura do curso.",

            duration: "04:15",

            completed: true,
          },
        ],
      },

      {
        id: 2,

        title: "Módulo 2 - HTML e CSS",

        lessons: [
          {
            id: 3,

            title: "2.1 Introdução ao HTML",

            description:
              "Aprenda os conceitos fundamentais do HTML.",

            duration: "16:25",

            completed: false,
          },

          {
            id: 4,

            title: "2.2 Estrutura básica do HTML",

            description:
              "Aprenda a criar a estrutura base de uma página HTML.",

            duration: "12:10",

            completed: false,
          },

          {
            id: 5,

            title: "2.3 Tags e elementos",

            description:
              "Conheça as principais tags HTML utilizadas no mercado.",

            duration: "18:30",

            completed: false,
          },
        ],
      },
    ],
  },

  {
    id: 2,

    title: "Gestão Financeira Empresarial",

    category: "Negócios",

    duration: "16h",

    level: "Nível Intermediário",

    image: "/courses/finance.jpg",

    description:
      "Domine os principais conceitos de finanças e faça sua empresa crescer.",

    instructor: "Mariana Costa",

    progress: 60,

    modules: [
      {
        id: 1,

        title: "Módulo 1 - Fundamentos Financeiros",

        lessons: [
          {
            id: 1,

            title: "1.1 Introdução à gestão financeira",

            description:
              "Conceitos iniciais sobre administração financeira.",

            duration: "08:20",

            completed: true,
          },

          {
            id: 2,

            title: "1.2 Fluxo de caixa",

            description:
              "Aprenda a controlar entradas e saídas financeiras.",

            duration: "11:45",

            completed: true,
          },
        ],
      },
    ],
  },

  {
    id: 3,

    title: "Comunicação e Oratória",

    category: "Desenvolvimento Pessoal",

    duration: "12h",

    level: "Nível Iniciante",

    image: "/courses/oratory.jpg",

    description:
      "Desenvolva sua comunicação e fale em público com confiança.",

    instructor: "Fernanda Ribeiro",

    progress: 15,

    modules: [
      {
        id: 1,

        title: "Módulo 1 - Comunicação Básica",

        lessons: [
          {
            id: 1,

            title: "1.1 Introdução à comunicação",

            description:
              "Fundamentos essenciais da comunicação humana.",

            duration: "06:10",

            completed: false,
          },
        ],
      },
    ],
  },

  {
    id: 4,

    title: "UI/UX Design Essencial",

    category: "Design",

    duration: "18h",

    level: "Nível Intermediário",

    image: "/courses/design.jpg",

    description:
      "Aprenda os princípios do design de interfaces e melhore a experiência do usuário.",

    instructor: "Lucas Andrade",

    progress: 50,

    modules: [
      {
        id: 1,

        title: "Módulo 1 - Introdução ao UX",

        lessons: [
          {
            id: 1,

            title: "1.1 O que é UX?",

            description:
              "Conceitos fundamentais da experiência do usuário.",

            duration: "09:40",

            completed: true,
          },
        ],
      },
    ],
  },

  {
    id: 5,

    title: "Marketing Digital na Prática",

    category: "Marketing",

    duration: "14h",

    level: "Nível Iniciante",

    image: "/courses/marketing.jpg",

    description:
      "Estratégias de marketing digital para atrair, converter e fidelizar clientes.",

    instructor: "Carlos Henrique",

    progress: 20,

    modules: [
      {
        id: 1,

        title: "Módulo 1 - Fundamentos do Marketing",

        lessons: [
          {
            id: 1,

            title: "1.1 Introdução ao marketing digital",

            description:
              "Conheça os pilares do marketing moderno.",

            duration: "07:30",

            completed: false,
          },
        ],
      },
    ],
  },

  {
    id: 6,

    title: "Python para Iniciantes",

    category: "Tecnologia",

    duration: "22h",

    level: "Nível Iniciante",

    image: "/courses/python.jpg",

    description:
      "Aprenda Python do básico e desenvolva seus primeiros projetos.",

    instructor: "Ricardo Almeida",

    progress: 10,

    modules: [
      {
        id: 1,

        title: "Módulo 1 - Introdução ao Python",

        lessons: [
          {
            id: 1,

            title: "1.1 Primeiros passos",

            description:
              "Aprenda os conceitos iniciais da linguagem Python.",

            duration: "10:15",

            completed: false,
          },
        ],
      },
    ],
  },
]