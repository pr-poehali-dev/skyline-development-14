import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Заказывала нейрофотосессию для своего блога — результат превзошёл ожидания! Фото выглядят дорого, как с настоящей съёмки, а выезжать никуда не пришлось. Подписчики в восторге.",
    name: "Анна",
    role: "Психолог",
  },
  {
    quote:
      "Ксения упаковала мою группу ВК под ключ — обложка, меню, оформление постов. Сообщество стало выглядеть солидно, и заявок стало заметно больше. Спасибо за вкус и профессионализм!",
    name: "Марина",
    role: "Онлайн-школа",
  },
  {
    quote:
      "Делала фирменный стиль и полиграфию для своего бьюти-кабинета. Всё в едином премиальном стиле — визитки, прайс, сертификаты. Клиенты сразу отмечают, как красиво и дорого это смотрится.",
    name: "Виктория",
    role: "Бьюти-мастер",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Отзывы клиентов
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Эксперты, онлайн-школы и бьюти-мастера доверяют нам визуальный образ своего бренда. И вот что они говорят.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}