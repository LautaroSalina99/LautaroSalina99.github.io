"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Briefcase, MapPin, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const personalData = [
  { icon: MapPin, label: "Ubicación", value: "Corrientes, Argentina" },
  { icon: GraduationCap, label: "Formación", value: "5to ano de Ing. en Sistemas (UCP)" },
  { icon: Sparkles, label: "Intereses", value: "IA y automatizacion" },
  { icon: Briefcase, label: "Enfoque", value: "Soluciones web escalables" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Conóceme
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Sobre Mí
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text & Data */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy Lautaro Agustin Salina, estudiante de 5to ano de Ingenieria en
                Sistemas de Informacion (UCP). Disfruto transformar requerimientos
                complejos en productos web claros, mantenibles y orientados a
                resultados.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Me interesa especialmente la IA y el desarrollo de software con
                enfoque en calidad. Tambien me apasiona la cocina, una disciplina
                que aplico para trabajar con creatividad, detalle y consistencia
                en cada proyecto.
              </p>
            </div>

            {/* Personal Data Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personalData.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          <p className="text-sm font-medium text-foreground">{item.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Embedded Introduction Video */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="overflow-hidden bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-secondary/50">
                  <iframe
                    src="https://www.youtube.com/embed/STzxTlJPRmU"
                    title="Video de presentacion de Lautaro Agustin Salina"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Video de Presentación
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Conoce más sobre mi trayectoria, proyectos y motivación profesional.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
