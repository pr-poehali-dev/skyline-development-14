import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Оформление для IT-специалиста",
    category: "Оформление ВКонтакте",
    image: "https://cdn.poehali.dev/projects/643e4ca9-3453-4d4d-97e1-17d0a75cdf1b/bucket/ba791c7b-1bdb-4ace-9498-774cf74d73a9.jpg",
    description:
      "Полная упаковка группы ВК для программиста: обложка, меню и виджеты в технологичном синем стиле. Визуал, который передаёт экспертность и профессионализм.",
    tags: ["ВКонтакте", "IT", "Обложка", "Меню"],
  },
  {
    title: "Оформление сообщества для волонтёров",
    category: "Оформление ВКонтакте",
    image: "https://cdn.poehali.dev/projects/643e4ca9-3453-4d4d-97e1-17d0a75cdf1b/bucket/d813e42c-1510-483f-ab4e-a234efca39d2.jpg",
    description:
      "Мощная патриотическая упаковка ВК под ключ: обложка, меню и виджеты в едином кинематографичном стиле. Сообщество, которое цепляет с первого экрана.",
    tags: ["ВКонтакте", "Обложка", "Виджеты", "Брендинг"],
  },
  {
    title: "Упаковка ВК для косметолога",
    category: "Оформление ВКонтакте",
    image: "https://cdn.poehali.dev/projects/643e4ca9-3453-4d4d-97e1-17d0a75cdf1b/bucket/66f659dd-d179-4040-8aa1-35049293839d.jpg",
    description:
      "Полная упаковка сообщества ВК для косметолога и лешмейкера: обложка, аватар, меню и виджеты в нежном бежево-золотом стиле. Профиль, который вызывает доверие с первого взгляда.",
    tags: ["ВКонтакте", "Бьюти", "Обложка", "Меню"],
  },
  {
    title: "Нейрофотосессия — личный бренд",
    category: "AI-фотосессия",
    image: "https://cdn.poehali.dev/projects/643e4ca9-3453-4d4d-97e1-17d0a75cdf1b/bucket/43352aa1-bf08-4438-a44b-cdbc7c10db58.png",
    description:
      "Студийный портрет для личного бренда — без выезда в студию. Профессиональный образ эксперта, готовый к использованию в соцсетях, рекламе и на сайте.",
    tags: ["Нейросети", "Личный бренд", "Портрет"],
  },
  {
    title: "Фотобудка — семейная съёмка",
    category: "AI-фотосессия",
    image: "https://cdn.poehali.dev/projects/643e4ca9-3453-4d4d-97e1-17d0a75cdf1b/bucket/6e0e932a-9ab8-4969-92db-5477f2442f00.png",
    description:
      "Серия живых чёрно-белых портретов в стиле фотобудки. Тёплые искренние кадры для личного блога и соцсетей.",
    tags: ["Нейросети", "Ч/Б", "Портрет"],
  },
  {
    title: "Лофт-портрет — репортажный стиль",
    category: "AI-фотосессия",
    image: "https://cdn.poehali.dev/projects/643e4ca9-3453-4d4d-97e1-17d0a75cdf1b/bucket/0336c24c-53a4-4c89-b98f-90797aec566b.png",
    description:
      "Живой репортажный портрет в лофт-пространстве. Естественность и лёгкость — идеально для блога и личного бренда.",
    tags: ["Нейросети", "Лофт", "Личный бренд"],
  },
  {
    title: "Гламурный студийный портрет",
    category: "AI-фотосессия",
    image: "https://cdn.poehali.dev/projects/643e4ca9-3453-4d4d-97e1-17d0a75cdf1b/bucket/9f9a87a4-7181-42f4-9d42-3042e97d385b.png",
    description:
      "Чёрно-белый студийный портрет с профессиональным светом и постановкой. Образ уверенной, стильной женщины — для аватара, рекламы и PR.",
    tags: ["Нейросети", "Студия", "Гламур"],
  },
  {
    title: "Арт-портрет в цвете",
    category: "AI-фотосессия",
    image: "https://cdn.poehali.dev/projects/643e4ca9-3453-4d4d-97e1-17d0a75cdf1b/bucket/db69a977-084e-4e46-bc2e-f8cf0b99dada.png",
    description:
      "Нейроиллюстрация в живописном стиле — портрет среди сиреневых цветов. Тёплая весенняя атмосфера для блога, подарка или личного архива.",
    tags: ["Нейросети", "Арт", "Иллюстрация"],
  },
  {
    title: "Фэнтези-образ: Снежная королева",
    category: "AI-фотосессия",
    image: "https://cdn.poehali.dev/projects/643e4ca9-3453-4d4d-97e1-17d0a75cdf1b/bucket/eefd1b8f-b596-446d-a490-dee3a5a98a7c.png",
    description:
      "Эпический нейрообраз в стиле фэнтези: ледяная корона, хрустальный макияж, атмосфера зимней сказки. Для тематических фотокниг, аватаров и арт-проектов.",
    tags: ["Нейросети", "Фэнтези", "Арт"],
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
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
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