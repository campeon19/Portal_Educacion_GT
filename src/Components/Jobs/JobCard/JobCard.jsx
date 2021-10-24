import styles from './JobCard.module.css';
import officeIcon from '../../../assets/icons/office-building.png';

const JobCard = (props) => {
  const { time, payment, title, company, requirements, description } =
    props.data;

  const showText =
    description.length > 75 ? description.slice(0, 75) + '...' : description;

  let moreThan3;

  if (requirements.length > 3) {
    moreThan3 = requirements.length - 3;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.time}>{time}</div>
        <div className={styles.payment}>Q{payment} / mes</div>
      </div>

      <p className={styles.title}>{title}</p>

      <div className={styles.company}>
        <img src={officeIcon} alt="" />
        <p>{company}</p>
      </div>

      <div className={styles.requirements}>
        {(moreThan3 ? requirements.slice(0, 3) : requirements).map(
          (item, index) => {
            return (
              <div key={index} className={styles.requirementsItem}>
                {item}
              </div>
            );
          }
        )}

        {moreThan3 && <div className={styles.moreR}>+{moreThan3}</div>}
      </div>

      <p className={styles.description}>{showText}</p>

      <div className={styles.divisor}></div>

      <div className={styles.button}>VER TRABAJO</div>
    </div>
  );
};

export default JobCard;
