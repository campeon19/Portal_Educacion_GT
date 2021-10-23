import styles from './LessonItem.module.css';
import playIcon from '../../assets/icons/play-button.svg';
import arrowIcon from '../../assets/icons/arrow.svg';

const LessonItem = (props) => {
  return (
    <div
      className={styles.item}
      style={{ backgroundColor: props.isCurrent ? '#d1d1d1' : 'white' }}
      onClick={props.onClick}
    >
      <div className={styles.mainContent}>
        <img className={styles.image} src={props.image} alt="" />
        <div className={styles.main}>
          <p className={styles.title}>{props.title}</p>
          <div className={styles.bottom}>
            <img src={playIcon} alt="" />
            <p>{props.time} minutos</p>
          </div>
        </div>
      </div>

      {!props.isCurrent && (
        <img className={styles.arrow} src={arrowIcon} alt="" />
      )}
    </div>
  );
};

export default LessonItem;
