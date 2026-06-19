import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const items = [
  {
    title: "Заварочный стакан",
    category: "Товары для кухни",
    image: "https://cdn.poehali.dev/projects/643e4ca9-3453-4d4d-97e1-17d0a75cdf1b/bucket/827b6849-5be0-4ac9-9467-54642816fed1.jpg",
    tags: ["Wildberries", "Ozon", "Инфографика"],
  },
  {
    title: "United Colors of Benetton",
    category: "Парфюмерия",
    image: "https://cdn.poehali.dev/projects/643e4ca9-3453-4d4d-97e1-17d0a75cdf1b/bucket/2e5c9c00-40c5-4339-9548-4def52594cef.jpg",
    tags: ["Wildberries", "Ozon", "Инфографика"],
  },
  {
    title: "Электробритва Polaris",
    category: "Электроника",
    image: "https://cdn.poehali.dev/projects/643e4ca9-3453-4d4d-97e1-17d0a75cdf1b/bucket/dfd064df-cb4a-4da3-841b-d8f555dadc38.jpg",
    tags: ["Wildberries", "Ozon", "Инфографика"],
  },
  {
    title: "Летняя юбка",
    category: "Одежда",
    image: "https://cdn.poehali.dev/projects/643e4ca9-3453-4d4d-97e1-17d0a75cdf1b/bucket/4aa0b1d1-4693-4c28-b092-916c14c87c82.jpg",
    tags: ["Wildberries", "Ozon", "Инфографика"],
  },
  {
    title: "MIXIT Pro Complex",
    category: "Уход за волосами",
    image: "https://cdn.poehali.dev/projects/643e4ca9-3453-4d4d-97e1-17d0a75cdf1b/bucket/39cc7c14-ec12-4445-8600-ac9e47c1d803.jpg",
    tags: ["Wildberries", "Ozon", "Инфографика"],
  },
  {
    title: "Свитер укороченный",
    category: "Одежда",
    image: "https://cdn.poehali.dev/projects/643e4ca9-3453-4d4d-97e1-17d0a75cdf1b/bucket/5d225c23-a156-476c-ad89-d73fb14a9a28.jpg",
    tags: ["Wildberries", "Ozon", "Инфографика"],
  },
]

export function MarketplaceSection() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="marketplace" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="container mx-auto max-w-7xl">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Wildberries · Ozon · AliExpress</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Инфографика для маркетплейсов
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Карточки товаров, которые выделяются среди конкурентов и увеличивают конверсию. Грамотная инфографика — это не просто красиво, это больше продаж.
          </p>
        </div>

        {/* Сетка */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Изображение */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Оверлей при наведении */}
              <div className={`absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent transition-opacity duration-300 ${active === index ? "opacity-100" : "opacity-0"} flex flex-col justify-end p-6`}>
                <p className="text-xs text-primary font-semibold mb-1">{item.category}</p>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, ti) => (
                    <span key={ti} className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Хочу такую карточку <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Категория — всегда видна */}
              <div className={`absolute top-3 left-3 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 text-xs font-medium text-primary transition-opacity duration-300 ${active === index ? "opacity-0" : "opacity-100"}`}>
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-lg gap-2 shadow-lg shadow-primary/25"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Заказать инфографику <ArrowRight className="h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">Готово за 1–3 дня · Правки включены</p>
        </div>

      </div>
    </section>
  )
}