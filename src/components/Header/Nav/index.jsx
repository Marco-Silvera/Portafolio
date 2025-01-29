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
        src: "experiencia-header.png"
    },
    {
        title: "Experiencia",
        href: "#experiencia",
        src: "experiencia-header.png"
    },
    {
        title: "Proyectos",
        href: "#proyectos",
        src: "proyectos-header.png"
    },
    {
        title:"Conocimientos",
        href: "#conocimientos",
        src: "conocimientos-header.png"
    },
    {
        title: "Contacto",
        href: "#contacto",
        src: "contacto-header.png"
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