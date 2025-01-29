import Card from "./Card/index"
import { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const items = [
  {
    id: 1,
    nombre: "Pachamama Turismo Responsable",
    descripcion: "Diseño y desarrollo de una web para una agencia de turismo, con un enfoque en funcionalidad, gestión de contenido y experiencia del usuario. Optimizado para SEO.",
    imagen:
      "./Screenshot_WEB_1.png",
    demo: "https://pachamama-project.vercel.app/",
    repositorio: "https://github.com/Marco-Silvera/Pachamama",
    path: "/proyecto-1",
    color: "#BBACAF",
    bullets: [
      "Mejora de rendimiento del <b>23,4%</b>",
      "Implementación de mejoras en SEO",
      "Disponible en <b>Francés</b> y <b>Español</b>",
      "Contenido automatizado con JSON",
    ]
  },
  {
    id: 2,
    nombre: "Catálogo de productos",
    descripcion: "Catálogo de productos con carrito de compras, permite a los usuarios gestionar productos. Utiliza Supabase para la gestión de datos y generación automática de páginas por producto agregado.",
    imagen:
      "./Screenshot_WEB_2.png",
    demo: "https://consultoriafiei.com/",
    repositorio: "https://github.com/Marco-Silvera/ProyectoGerencia",
    path: "/proyecto-2",
    color: "#977F6D",
    bullets: [
      "Carrito de compras funcional",
      "Agregar, editar y eliminar productos",
      "<b>Generación automática</b> de páginas web",
      "Base de datos en <b>Supabase</b>"
    ]
  },
  {
    id: 3,
    nombre: "Consultoria FIEI",
    descripcion: "Proyecto universitario que consiste en una web de consultoría para la FIEI. Incluye formulario de contacto, blog, galería de imágenes y diseño responsive.",
    imagen:
      "./Screenshot_WEB_3.png",
    demo: "https://www.consultoriafiei.com/",
    repositorio: "https://github.com/Marco-Silvera/ProyectoGerencia",
    path: "/proyecto-3",
    color: "#C2491D",
    bullets: [
      "Diseño responsive",
      "Uso de HTML, CSS y JavaScript",
      "Animaciones de navegación",
    ]
  },
  {
    id: 4,
    nombre: "Aluraflix",
    descripcion: "Proyecto de Alura ONE (Oracle Next Education), el cual busca replicar la interfaz de Netflix. Incluye secciones y permitr agregar, editar y eliminar películas.",
    imagen:
      "./Screenshot_WEB_4.png",
    demo: "https://alura-flix-pi-two.vercel.app/",
    repositorio: "https://github.com/Marco-Silvera/AluraFlix",
    path: "/proyecto-4",
    color: "#B62429",
    bullets: [
      "Diseño tipo <b>Netflix</b>",
      "Agregar, editar y eliminar películas",
      "Diseño responsive",
    ]
  },
  {
    id: 5,
    nombre: "50 Projects in 50 Days",
    descripcion: "Proyecto de 50 días con 50 proyectos de HTML, CSS y JavaScript. Incluye proyectos de animaciones, efectos, diseños y funcionalidades.",
    imagen:
      "./Screenshot_WEB_5.png",
    demo: "https://marco-silvera.github.io/50-Projects/main/",
    repositorio: "https://github.com/Marco-Silvera/50-Projects",
    path: "/proyecto-4",
    color: "#B62429",
    bullets: [
      "Proyectos de animaciones y efectos",
      "Diseño y funcionalidades interactivas",
      "Uso de HTML, CSS y JavaScript",
    ]
  },
  // color: "#88A28D"
];
const bullets = items ? items.bullets : [];

export default function ProjectList() {

  const container = useRef(null);
  const lastCard = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div id="proyectos" className="w-full flex flex-col justify-center items-center bg-fixed bg-no-repeat bg-cover bg-center scroll-mt-[62px] gap-10">
      <h2 className="top-[50px] lg:top-[100px] relative text-xl md:text-2xl lg:text-4xl w-fit bg-gradient-to-r from-[#9898A6] to-[#fdfdfe] text-transparent bg-clip-text uppercase font-normal tracking-[.96px]">Proyectos</h2>
      <section ref={container}
        className="w-full max-w-[1000px] p-5 md:m-0 flex flex-col"
      >
        {
          items.map((item, i) => {
            const targetScale = 1 - ((items.length - i) * 0.05)
            return <Card key={i} i={i} bullets={bullets} {...item} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} ref={i === items.length - 1 ? lastCard : null} />
          })
        }
      </section>
    </div>
  )
}

