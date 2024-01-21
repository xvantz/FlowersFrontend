'use client'

import styles from './ui/styles.module.scss'
import PhotoArtist from '#/PhotoArtist.svg'
import Image from 'next/image'

function Person() {
  return (
    <div className={styles.Person}>
            <div className={styles.title}>
                Hi, I am Milena,<br/>Feature Creative Artist.
            </div>
            <Image src={PhotoArtist} className={styles.Avatar} alt='PhotoMilena'/>
          </div>
  )
}

export default Person