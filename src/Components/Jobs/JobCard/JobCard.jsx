import styles from './JobCard.module.css';
import officeIcon from '../../../assets/icons/office-building.png';
import { useHistory } from 'react-router-dom';

const JobCard = (props) => {
  const history = useHistory();
  const { time, payment, title, company, requirements, description } =
    props.data;

  const showText =
    description.length > 75 ? description.slice(0, 75) + '...' : description;


  const navigate = () => history.push(`/jobs/${props.id}`);
  
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
        {/* {(moreThan3 ? requirements.slice(0, 3) : requirements).map(
          (item, index) => {
            return (
              <div key={index} className={styles.requirementsItem}>
                {item}
              </div>
            );
          }
        )} */}

        {<div className={styles.moreR}>Habilidades: {requirements.length}</div>}
      </div>

      <p className={styles.description}>{showText}</p>

      <div className={styles.divisor}></div>

      <div className={styles.button} onClick={navigate}>
        VER TRABAJO
      </div>
    </div>
  );
};

export default JobCard;
