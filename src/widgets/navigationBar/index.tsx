import Link from 'next/link'
import styles from './ui/styles.module.scss'
import global from '../../app/global.module.scss'

export default function NavigationBar() {
    return (
    <div className={styles.NavigationBar}>
            <Link href="/about" className={styles.NavLink}>My Works</Link>
            <Link href="/about" className={styles.NavLink}>My Blog</Link>
            <Link href="/about" className={styles.NavLink}>My Contact</Link>
    </div>
            )
    
}
