import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Фоновые блюры */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl animate-pulse"
          style={{ top: "10%", left: "5%", animationDuration: "4s" }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-primary/8 blur-3xl animate-pulse"
          style={{ bottom: "10%", right: "5%", animationDuration: "6s", animationDelay: "1s" }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl transition-all duration-1000 ease-out"
          style={{ left: `${mousePosition.x - 150}px`, top: `${mousePosition.y - 150}px` }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Левая колонка — текст */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-дизайнер • Нейрофотограф</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
              Ксения{" "}
              <span className="text-primary relative inline-block">
                Макарова
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C50 5 150 5 198 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-primary"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-4 animate-fade-in-up animate-delay-100 leading-relaxed">
              Создаю премиальные визуалы, нейрофотосессии и брендинг для бизнеса, экспертов и личных брендов.
            </p>
            <p className="text-base text-muted-foreground mb-10 animate-fade-in-up animate-delay-100 leading-relaxed">
              Выглядеть дорого в соцсетях — без аренды студий, гонораров фотографам и долгих согласований.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-200 mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                asChild
              >
                <a href="#contact">
                  Оставить заявку
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/20 text-foreground hover:bg-primary/5 hover:border-primary font-semibold px-8 py-6 text-lg backdrop-blur-sm bg-transparent"
                asChild
              >
                <a href="#portfolio">Смотреть работы</a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground animate-fade-in-up animate-delay-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>150+ проектов</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
                <span>120+ клиентов</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "1s" }} />
                <span>Онлайн по всей России</span>
              </div>
            </div>
          </div>

          {/* Правая колонка — фото */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up animate-delay-200">
            <div className="relative">
              {/* Золотое кольцо-свечение */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-110" />
              {/* Брендовый аватар-круг */}
              <img
                src="https://cdn.poehali.dev/projects/643e4ca9-3453-4d4d-97e1-17d0a75cdf1b/bucket/b209edb0-7c68-4d3e-96e2-dca9c2663f85.png"
                alt="Ксения Макарова — AI-дизайнер и нейрофотограф"
                className="relative z-10 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] object-cover rounded-full border-2 border-primary/40 shadow-2xl shadow-primary/20"
              />
              {/* Декоративные элементы */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border border-primary/40 rounded-full animate-ping" style={{ animationDuration: "3s" }} />
              <div className="absolute -bottom-6 -left-6 w-5 h-5 bg-primary/60 rounded-full animate-pulse" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
