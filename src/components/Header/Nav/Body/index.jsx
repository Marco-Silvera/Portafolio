import { motion } from 'framer-motion';
import styles from './stylesBody.module.css'
import { blur, translate } from '../../anim';

export default function Body({ links, selectedLink, setSelectedLink, closeMenu }) {

    const getChars = (word) => {
        let chars = [];
        word.split("").forEach((char, i) => {
            chars.push(
                <motion.span
                    className='text-[#9898A6] font-space-grotesk'
                    custom={[i * 0.02, (word.length - i) * 0.01]}
                    variants={translate}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    key={char + i}>
                    {char === " " ? "\u00A0" : char} {/* Manejo explícito del espacio */}
                </motion.span>
            )
        })
        return chars;
    }




    const handleClick = (e, href) => {
        e.preventDefault();

        // Primero cerramos el menú
        closeMenu();

        // Esperamos un poco para que la animación de cierre del menú comience
        setTimeout(() => {
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Limpiamos el hash de la URL
                history.pushState('', document.title, window.location.pathname + window.location.search);
            }
        }, 300); // Ajusta este valor según la duración de tu animación de cierre
    }


    return (
        <div className={styles.body}>
            {
                links.map((link, index) => {
                    const { title, href } = link;
                    return (<a key={`l_${index}`} href={href} onClick={(e) => handleClick(e, href)} >
                        <motion.p
                            className={styles.pbody}
                            onMouseOver={() => { setSelectedLink({ isActive: true, index }) }}
                            onMouseLeave={() => { setSelectedLink({ isActive: false, index }) }}
                            variants={blur}
                            animate={selectedLink.isActive && selectedLink.index != index ? "open" : "closed"}>
                            {getChars(title)}
                        </motion.p>
                    </a>)
                })
            }
        </div>
    )
}