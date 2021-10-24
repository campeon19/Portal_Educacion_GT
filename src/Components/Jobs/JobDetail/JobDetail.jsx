import styles from './JobDetail.module.css';
import { useParams } from 'react-router-dom';
import companyIcon from '../../../assets/icons/office-building.png';
import IconButton from '../../IconButton/IconButton';

// button images
import shareIcon from '../../../assets/icons/share.svg';
import contactIcon from '../../../assets/icons/contact.svg';
import JobDetailItem from '../JobDetailItem/JobDetailItem';

// Detail icons
import moneyIcon from './assets/money.png';
import clockIcon from './assets/clock.png';
import phoneIcon from './assets/phone.png';
import emailIcon from './assets/email.png';
import locationIcon from './assets/pin.png';

const JobDetail = () => {
  const { id } = useParams();

  const data = {
    title: 'UI/UX Designer',
    company: 'Portales Company',
    logo: 'https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png',
    background_image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrE61QIt9IvrkFcl3ufyoZYnevb1mLhItc8g&usqp=CAU',
    description:
      'Puesto de desarrollador web y movil que pueda resolver problemas bajo presion y que sea autodidacta.',
    time: 'Diario',
    payment: 4000,
    phone: '(502) 50569551',
    email: 'por19825@uvg.edu.gt',

    location: 'Antigua Guatemala',
    requirements: ['nodejs', 'dart', 'fluter', 'reactjs', 'react native'],
  };

  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <div className={styles.content}>
          <img
            className={styles.backImage}
            src={data.background_image}
            alt=""
          />
          <div className={styles.headerContent}>
            <div className={styles.headerMain}>
              <img src={data.logo} alt="" className={styles.logo} />

              <div className={styles.headerInfo}>
                <p className={styles.title}>{data.title}</p>
                <div className={styles.company}>
                  <img src={companyIcon} alt="" />
                  <p>{data.company}</p>
                </div>
              </div>
            </div>
            <div className={styles.headerActions}>
              <IconButton title="Aplicar" icon={contactIcon} />
              <IconButton title="Compartir" icon={shareIcon} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.double}>
            <div className={styles.details}>
              <p className={styles.descriptionTitle}>Detalles</p>
              <JobDetailItem icon={clockIcon} text={data.time} />
              <JobDetailItem icon={moneyIcon} text={`Q${data.payment} / mes`} />
              <JobDetailItem icon={phoneIcon} text={data.phone} />
              <JobDetailItem icon={emailIcon} text={data.email} />
              <JobDetailItem icon={locationIcon} text={data.location} />
            </div>

            <div className={styles.description}>
              <p className={styles.descriptionTitle}>Descripción</p>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
