import styles from './IconButton.module.css';

const IconButton = (props) => {
  return (
    <div className={styles.button}>
      <img src={props.icon} alt="" />
      <p>{props.title}</p>
    </div>
  );
};

export default IconButton;
