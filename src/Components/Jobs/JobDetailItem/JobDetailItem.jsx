import styles from './JobDetailItem.module.css';

const JobDetailItem = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.icon} alt="" className={styles.img} />
      <p className={styles.title}>{props.text}</p>
    </div>
  );
};

export default JobDetailItem;
