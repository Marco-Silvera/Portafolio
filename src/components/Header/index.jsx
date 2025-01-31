import { opacity, background } from "./anim"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Nav from "./Nav"
import styles from './Header.module.css'

function Header() {

    const [isActive, setIsActive] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function toggleBurger() {
        setIsActive(!isActive);
    }

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`} data-header>
            <nav className={styles.bar}>
                <a href="/" className="font-light"><img className={`${styles.logo}`}  src="/M.webp" /></a>
                <div onMouseDown={() => { setIsActive(!isActive) }} className={styles.el}>
                    <div
                        className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
                        onClick={toggleBurger}
                    ></div>
                    <div className={styles.label}>
                        <motion.p variants={opacity} animate={isActive ? "closed" : "open"} >Menú</motion.p>
                        <motion.p variants={opacity} animate={!isActive ? "closed" : "open"} className="absolute opacity-0">Cerrar</motion.p>
                    </div>
                </div>
            </nav>
            <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"} className={styles.background} onClick={toggleBurger}></motion.div>
            <AnimatePresence mode="wait">
                {isActive &&  <Nav closeMenu={() => setIsActive(false)} client:load />}
            </AnimatePresence>
        </header>
    )
}

export default Header