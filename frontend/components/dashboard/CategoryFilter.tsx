type CategoryFilterProps = {
  categories: string[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        flex-wrap
        mb-8
      "
    >

      {categories.map((category) => {

        const isActive = selectedCategory === category

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`
              px-5
              py-2
              rounded-xl
              font-semibold
              transition-all
              duration-200
              border

              ${
                isActive
                  ? `
                    bg-[#33473C]
                    text-white
                    border-[#33473C]
                  `
                  : `
                    bg-white
                    text-[#33473C]
                    border-gray-300
                    hover:bg-[#33473C]
                    hover:text-white
                  `
              }
            `}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}