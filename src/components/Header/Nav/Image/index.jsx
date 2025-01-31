import { motion } from 'framer-motion';
import styles from './stylesImage.module.css'
import { opacity } from '../../anim';

export default function Index({ src, isActive }) {
    return (
        <motion.div variants={opacity} initial="initial" animate={isActive ? "open" : "closed"} className={styles.imageContainer}>
            <img
                src={`/images/${src}`}
                fill={true}
                alt="image"
                loading='lazy'
            />
        </motion.div>
    )
}