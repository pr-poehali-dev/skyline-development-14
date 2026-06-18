import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Crown, Users, FileText, Palette, Sparkles } from "lucide-react"

const services = [
  {
    icon: Camera,
    title: "Нейрофотосессия",
    description:
      "Профессиональные фото без выезда в студию. Создаём роскошные образы с помощью нейросетей — для личного бренда, соцсетей и рекламы. Десятки стилей и локаций без съёмочного дня.",
  },
  {
    icon: Crown,
    title: "Брендинг",
    description:
      "Разрабатываем фирменный стиль, который выделит вас среди конкурентов: логотип, палитра, шрифты и айдентика. Премиальный образ, отражающий ценность вашей экспертности.",
  },
  {
    icon: Users,
    title: "Упаковка сообщества ВК",
    description:
      "Оформляем группу ВКонтакте под ключ: обложка, аватар, меню, виджеты и оформление постов. Сообщество, которое вызывает доверие и превращает подписчиков в клиентов.",
  },
  {
    icon: FileText,
    title: "Дизайн полиграфии",
    description:
      "Визитки, буклеты, флаеры, прайсы и сертификаты в едином стиле. Элегантная полиграфия, которая работает на репутацию вашего бизнеса в офлайне.",
  },
  {
    icon: Palette,
    title: "Контент для соцсетей",
    description:
      "Создаём визуально цельную ленту: шаблоны постов, сторис и хайлайты. Ваш профиль выглядит дорого и узнаваемо с первого взгляда.",
  },
  {
    icon: Sparkles,
    title: "Премиальный подход",
    description:
      "Каждый проект — индивидуально и с вниманием к деталям. Сопровождаем от идеи до готового результата, чтобы образ вашего бренда был безупречен.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Услуги студии
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что мы <span className="text-primary">создаём</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Полный визуальный образ для экспертов и бизнеса — от нейрофотосессии до фирменного стиля и оформления соцсетей.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}