import styles from './stylesNav.module.css'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Image from './Image';

const links = [
    {
        title: "Sobre mi",
        href: "#sobre-mi",
        src: "/sobre-mi-header.webp"
    },
    {
        title: "Experiencia",
        href: "#experiencia",
        src: "/experiencia-header.webp"
    },
    {
        title: "Proyectos",
        href: "#proyectos",
        src: "/proyectos-header.webp"
    },
    {
        title: "Educación",
        href: "#educacion",
        src: "/educacion-header.webp"
    },
    {
        title:"Conocimientos",
        href: "#conocimientos",
        src: "/conocimientos-header.webp"
    },
    {
        title: "Contacto",
        href: "#contacto",
        src: "/contacto-header.webp"
    }
]

export default function Index({closeMenu}) {

    const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

    return (
        <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}  closeMenu={closeMenu} />
                    {/* <Footer /> */}
                </div>
                <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive} />
            </div>
        </motion.div>
    )
}