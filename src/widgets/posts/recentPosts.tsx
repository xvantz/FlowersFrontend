'use client'

import {useLastPostsQuery } from '@/graphql/graphql';
import styles from './ui/styles.module.scss'
import moment from 'moment';
function Posts() {
    const { data, loading, error } = useLastPostsQuery();
    const date = moment.unix(1705334614).format('YYYY-MM-DD')
    if (loading) {
        return (
            <div className={styles.recentPosts}>
                    <div className={styles.loaderBody}>
                         <div className={styles.loader}></div>
                    </div>
                    <div className={styles.loaderBody}>
                         <div className={styles.loader}></div>
                    </div>
            </div>
        )
      } else if (error) {
        return <div>Error: {error.message}</div>;
      } else {
        return (
            <div className={styles.recentPosts}>
                {data?.lastPosts.map((post) => (
                    <div className={styles.post}>
                         <div className={styles.titlePost}>
                             {post.name}
                         </div>
                         <div className={styles.dataPost}>
                                {moment.unix(post.createdAt).format('DD MMM YYYY')}   |   {post.section}
                         </div>
                         <div className={styles.descriptionPost}>
                            {post.Description}
                         </div>
                        </div>
                ))}
            </div>
        );
      }
}

export default Posts

function uselastPostsQuery(): { data: any; loading: any; error: any; } {
    throw new Error('Function not implemented.');
}
