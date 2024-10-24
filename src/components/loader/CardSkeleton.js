// components/CardSkeleton.js
import styles from "./cardSkeleton.module.css";

const CardSkeleton = () => {
  return (
    <div className={styles.card_skeleton}>
      <div className={styles.card_skeleton_img}></div>
      <div className={styles.skeleton_title}></div>
      <div className={styles.skeleton_details}></div>
    </div>
  );
};

export default CardSkeleton;
