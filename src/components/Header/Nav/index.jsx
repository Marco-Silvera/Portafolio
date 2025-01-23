import styles from './stylesNav.module.css'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Image from './Image';

const links = [
    {
        title: "Inicio",
        href: "/",
        src: "home.png"
    },
    {
        title: "Sobre mi",
        href: "/about",
        src: "home.png"
    },
    {
        title: "Experiencia",
        href: "/shop",
        src: "shop.png"
    },
    {
        title: "Proyectos",
        href: "/lookbook",
        src: "lookbook.png"
    },
    {
        title: "Contacto",
        href: "/contact",
        src: "contact.png"
    }
]

export default function Index() {

    const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

    return (
        <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
                    {/* <Footer /> */}
                </div>
                <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive} />
            </div>
        </motion.div>
    )
}