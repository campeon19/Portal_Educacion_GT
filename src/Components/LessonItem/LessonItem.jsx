import styles from './LessonItem.module.css';
import playIcon from '../../assets/icons/play-button.svg';

const LessonItem = (props) => {
  return (
    <div className={styles.item}>
      <p className={styles.title}>{props.title}</p>
      <div className={styles.bottom}>
        <img src={playIcon} alt="" />
        <p>{props.time}</p>
      </div>
    </div>
  );
};

export default LessonItem;
