import styles from "./styles.module.css";
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
    <div className={styles.friendPageMainDiv}>
        {Array.from({ length: 6 }).map((_, index) => (

        <div className={styles.cardDiv} key={index}>
          <div className={styles.cardUpperDiv}>
                <div className={styles.upperLoader}></div>

          </div>
                <div className={styles.lowerLoader}></div>

      </div>

       ) )}
  </div>
  )
};