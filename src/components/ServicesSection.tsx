import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Film, Megaphone, Users, FileText, Palette } from "lucide-react"

const services = [
  {
    icon: Camera,
    title: "AI-фотосессии",
    description:
      "Идеальные кадры в любом образе, стиле и локации — без выезда из дома. Портреты для соцсетей, сайта и личного бренда, которые выглядят как дорогая студийная съёмка.",
  },
  {
    icon: Film,
    title: "Кино-портреты",
    description:
      "Атмосферные и глубокие изображения с кинематографическим светом и настроением. Привлекают внимание, останавливают взгляд и создают незабываемый образ эксперта.",
  },
  {
    icon: Megaphone,
    title: "Рекламные креативы",
    description:
      "Визуальные решения для ВКонтакте и других площадок, которые пробивают баннерную слепоту. Цепляющий контент, который приводит реальных клиентов.",
  },
  {
    icon: Users,
    title: "Упаковка сообщества ВК",
    description:
      "Оформляем группу ВКонтакте под ключ: обложка, аватар, меню, виджеты и шаблоны постов. Сообщество, которое вызывает доверие и превращает подписчиков в клиентов.",
  },
  {
    icon: Palette,
    title: "Брендинг",
    description:
      "Фирменный стиль, который выделит вас среди конкурентов: логотип, палитра, шрифты и айдентика. Премиальный образ, отражающий ценность вашей экспертности.",
  },
  {
    icon: FileText,
    title: "Дизайн полиграфии",
    description:
      "Визитки, буклеты, прайсы и сертификаты в едином стиле. Элегантная полиграфия, которая работает на репутацию вашего бизнеса в офлайне.",
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