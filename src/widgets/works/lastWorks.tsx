'use client'

import styles from './ui/style.module.scss'
import Image from 'next/image'
import { useWorksQuery } from '@/graphql/graphql';
import moment from 'moment';
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
                         <Image src={`/${work.image}`} width={500} height={500} className={styles.workImage} alt={work.name}/>
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
//     return (
//     <div className={style.works}>
//         <div className={style.textWorks}>
//             Featured Works
//         </div>
//         <div className={style.work}>
//             <Image src={Works1} className={style.workImage} alt='Works1'/>
//             <div className={style.workInfo}>
//                 <div className={style.workName}>
//                     Flower
//                 </div>
//                 <div className={style.workData}>
//                     12 Feb 2020 | Flower
//                 </div>
                
//                 <div className={style.workDescription}>
//                 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
//                 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
//                 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
//                 </div>
//             </div>
//         </div>
//         <div className={style.work}>
//             <Image src={Works1} className={style.workImage} alt='Works1'/>
//             <div className={style.workInfo}>
//                 <div className={style.workName}>
//                     Flower
//                 </div>
//                 <div className={style.workData}>
//                     12 Feb 2020 | Flower
//                 </div>
                
//                 <div className={style.workDescription}>
//                 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
//                 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
//                 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
//                 </div>
//             </div>
//         </div>
//         <div className={style.work}>
//             <Image src={Works1} className={style.workImage} alt='Works1'/>
//             <div className={style.workInfo}>
//                 <div className={style.workName}>
//                     Flower
//                 </div>
//                 <div className={style.workData}>
//                     12 Feb 2020 | Flower
//                 </div>
                
//                 <div className={style.workDescription}>
//                 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
//                 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
//                 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
}

export default Works