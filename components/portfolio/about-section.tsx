"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Play, GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const personalData = [
  { icon: MapPin, label: "Ubicación", value: "Ciudad, País" },
  { icon: Calendar, label: "Experiencia", value: "+3 años" },
  { icon: GraduationCap, label: "Formación", value: "Ing. en Sistemas de Información" },
  { icon: Briefcase, label: "Estado", value: "Disponible para proyectos" },
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
                Soy un apasionado por crear soluciones digitales que combinan diseño 
                elegante con ingeniería robusta. Mi trabajo se centra en la intersección 
                del diseño y el desarrollo, creando experiencias que no solo se ven bien, 
                sino que están meticulosamente construidas para el rendimiento y la usabilidad.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Me especializo en el desarrollo frontend con tecnologías modernas, 
                implementando testing riguroso y mejores prácticas de accesibilidad 
                para garantizar productos de alta calidad.
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

          {/* Right Column - Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="overflow-hidden bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-secondary/50 flex items-center justify-center">
                  {/* Video thumbnail placeholder */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent" />
                  
                  {/* Play button */}
                  <motion.button
                    className="relative z-10 p-6 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Reproducir video de presentación"
                  >
                    <Play className="h-8 w-8 ml-1" />
                  </motion.button>

                  {/* Corner decorations */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30" />
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
