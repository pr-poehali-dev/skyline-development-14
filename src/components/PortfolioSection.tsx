import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Нейрофотосессия для эксперта",
    category: "Нейрофотосессия",
    image: "https://cdn.poehali.dev/projects/643e4ca9-3453-4d4d-97e1-17d0a75cdf1b/files/28cbca2e-3ba5-4d5a-8a29-530d370bfd46.jpg",
    description:
      "Серия премиальных портретов для личного бренда психолога. Роскошные образы в едином стиле — без выезда в студию, готовы для соцсетей и рекламы.",
    url: "#contact",
    tags: ["Нейросети", "Личный бренд", "Соцсети"],
  },
  {
    title: "Фирменный стиль бьюти-бренда",
    category: "Брендинг",
    image: "https://cdn.poehali.dev/projects/643e4ca9-3453-4d4d-97e1-17d0a75cdf1b/files/6eb67175-95d9-41cf-af3e-2a5c69d03373.jpg",
    description:
      "Логотип, палитра и айдентика для бьюти-мастера. Премиальный чёрно-золотой стиль, который подчёркивает статус и выделяет среди конкурентов.",
    url: "#contact",
    tags: ["Логотип", "Айдентика", "Бьюти"],
  },
  {
    title: "Упаковка сообщества ВК",
    category: "Соцсети",
    image: "https://cdn.poehali.dev/projects/643e4ca9-3453-4d4d-97e1-17d0a75cdf1b/files/e42f0739-84b8-485f-aa89-e8b394857299.jpg",
    description:
      "Оформление группы ВКонтакте для онлайн-школы под ключ: обложка, меню, виджеты и шаблоны постов. Сообщество, которое вызывает доверие и собирает заявки.",
    url: "#contact",
    tags: ["ВКонтакте", "Обложка", "Контент"],
  },
  {
    title: "Полиграфия для коуча",
    category: "Дизайн полиграфии",
    image: "https://cdn.poehali.dev/projects/643e4ca9-3453-4d4d-97e1-17d0a75cdf1b/files/134d9b38-d7f5-47b7-a4bb-d7ff3ecd53f1.jpg",
    description:
      "Комплект полиграфии в едином стиле: визитки, буклеты, сертификаты и прайс. Элегантный дизайн, который работает на репутацию офлайн.",
    url: "#contact",
    tags: ["Визитки", "Буклеты", "Сертификаты"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Портфолио</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Подборка наших работ — нейрофотосессии, брендинг, оформление соцсетей и полиграфия для экспертов и бизнеса.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => document.querySelector(project.url)?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Хочу так же <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}