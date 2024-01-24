'use client'

import styles from './ui/style.module.scss'
import Image from 'next/image'
import { useWorksQuery } from '@/graphql/graphql';
import moment from 'moment';
import Link from 'next/link';
function Works() {
    const { data, loading, error } = useWorksQuery({
        pollInterval: 30000,
    });
    if (loading) {
        return (
            <div className={styles.works}>
                <div className={styles.textWorks}>
                    Featured Works
                </div>
                <div className={styles.workLoader}>
                    <div className={styles.loader}></div>
                </div>
            </div>
        )
      } else if (error) {
        return (
            <div className={styles.works}>
                <div className={styles.textWorks}>
                    Featured Works
                </div>
                <div className={styles.workLoader}>
                    <div className={styles.loader}></div>
                </div>
            </div>
        )
      } else {
        return (
            <div className={styles.works}>
                <div className={styles.textWorks}>
                    Featured Works
                </div>
                {data?.works.map((work) => (
                    <div className={styles.work}>
                        <Link href={`/works/${work.id}`}><Image src={`/${work.image}`} width={500} height={500} className={styles.workImage} alt={work.name}/></Link>
                        <div className={styles.workInfo}>
                            <div className={styles.workName}>
                                {work.name}
                            </div>
                            <div className={styles.workData}>
                                {moment.unix(work.createdAt).format('DD MMM YYYY')} | {work.section}
                            </div>
                            <div className={styles.workDescription}>
                                {work.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
      }
}
export default Works