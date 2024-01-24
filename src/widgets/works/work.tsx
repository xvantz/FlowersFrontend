'use client'
import moment from 'moment';
import {IWork, IWorkQuery, IWorkQueryVariables, useWorkQuery } from "@/graphql/graphql"
import styles from './ui/style.module.scss'
import Image from 'next/image'
export default function Work({id}: IWorkQueryVariables){
    const {data, error, loading} = useWorkQuery({variables: {id: id}})
    const work = data?.work as IWork

    if (loading) {
        return (
            <div className={styles.works}>
                <div className={styles.workLoader}>
                    <div className={styles.loader}></div>
                </div>
            </div>
        )
      } else if (error) {
        return (
            <div className={styles.works}>
                <div className={styles.workLoader}>
                    <div className={styles.loader}></div>
                </div>
            </div>
        )
      } else {
        return (
            <div className={styles.works}>
                    <div className={styles.work}>
                        <Image src={`/${work.image}`} width={500} height={500} className={styles.workImage} alt={work.name}/>
                        <div className={styles.workInfo}>
                            <div className={styles.workName}>
                                {work?.name}
                            </div>
                            <div className={styles.workData}>
                                {moment.unix(work.createdAt).format('DD MMM YYYY')} | {work.section}
                            </div>
                            <div className={styles.workDescription}>
                                {work.description}
                            </div>
                        </div>
                    </div>
            </div>
        )
      }
}