"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con drag & drop, notificaciones en tiempo real y colaboración en equipo.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    title: "API REST Service",
    description: "API RESTful escalable con autenticación JWT, rate limiting y documentación completa con Swagger.",
    technologies: ["Node.js", "Express", "JWT", "Redis"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Analytics Dashboard",
    description: "Dashboard interactivo para visualización de datos con gráficos dinámicos y reportes exportables.",
    technologies: ["React", "D3.js", "Tailwind", "GraphQL"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    title: "Testing Framework",
    description: "Framework de testing personalizado para automatización de pruebas E2E con reportes detallados.",
    technologies: ["Jest", "Cypress", "Playwright", "CI/CD"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "DevOps Pipeline",
    description: "Pipeline de CI/CD completo con despliegue automático, monitoreo y alertas en tiempo real.",
    technologies: ["Docker", "GitHub Actions", "AWS", "Terraform"],
    github: "https://github.com",
    featured: false,
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Mi Trabajo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Proyectos Destacados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos en los que he trabajado, desde aplicaciones web hasta soluciones backend.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <motion.div 
                      className="p-3 rounded-lg bg-primary/10 text-primary"
                      whileHover={{ rotate: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Folder className="h-6 w-6" />
                    </motion.div>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`Ver código de ${project.title} en GitHub`}
                        >
                          <Github className="h-5 w-5" />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`Ver demo de ${project.title}`}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground text-xs font-medium border border-border/50 hover:border-primary/30 hover:text-primary transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Ver más en GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
