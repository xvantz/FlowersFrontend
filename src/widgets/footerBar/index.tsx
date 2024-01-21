import styles from './ui/style.module.scss'
import Image from 'next/image'
import fb from '#/fb.svg'
import twitter from '#/twitter.svg'
import insta from '#/insta.svg'
import linkedin from '#/Linkedin.svg'

const FooterBar = () => {
  return (
    <div className={styles.Footer}>
        <div className={styles.Social}>
            <Image src={fb} className={styles.SocialLink} alt="FaceBook" />
            <Image src={insta} className={styles.SocialLink} alt="Instagram" />
            <Image src={twitter} className={styles.SocialLink} alt="Twitter" />
            <Image src={linkedin} className={styles.SocialLink} alt="LinkedIn" />
        </div>
        <div className={styles.Copyright}>
            Copyright &copy; 2023 All rights reserved
        </div>
        </div>
  )
}

export default FooterBar