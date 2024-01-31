import styles from './ui/style.module.scss'
import Image from 'next/image'
import fb from '#/Fb.svg'
import twitter from '#/Twitter.svg'
import insta from '#/Insta.svg'
import linkedin from '#/Linkedin.svg'
import tiktok from '#/Tiktok.svg'
import Link from 'next/link'

const FooterBar = () => {
  return (
    <div className={styles.Footer}>
        <div className={styles.Social}>
            <Link href="https://www.instagram.com/milena_luxury_art?igsh=YzBsdm9rMXpla2w5"><Image src={insta} className={styles.SocialLink} alt="Instagram" /></Link>
            <Link href="https://www.tiktok.com/@milena_peony_artist?_t=8jDtKVY6UKb&_r=1"><Image src={tiktok} className={styles.SocialLink} alt="Tiktok" /></Link>
            <Link href=""><Image src={fb} className={styles.SocialLink} alt="FaceBook" /></Link>
            <Link href=""><Image src={twitter} className={styles.SocialLink} alt="Twitter" /></Link>
            <Link href=""><Image src={linkedin} className={styles.SocialLink} alt="LinkedIn" /></Link>
        </div>
        <div className={styles.Copyright}>
            Copyright &copy; 2023-2024 All rights reserved
        </div>
        </div>
  )
}

export default FooterBar