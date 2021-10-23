import styles from './LessonItem.module.css';
import playIcon from '../../assets/icons/play-button.svg';
import arrowIcon from '../../assets/icons/arrow.svg';

const LessonItem = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.mainContent}>
        <img className={styles.image} src={props.image} alt="" />
        <div className={styles.main}>
          <p className={styles.title}>{props.title}</p>
          <div className={styles.bottom}>
            <img src={playIcon} alt="" />
            <p>{props.time}</p>
          </div>
        </div>
      </div>

      <img className={styles.arrow} src={arrowIcon} alt="" />
    </div>
  );
};

export default LessonItem;
