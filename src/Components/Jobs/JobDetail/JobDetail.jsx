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
import { Fragment, useCallback, useEffect, useState } from 'react';
import { fetchJobDetail } from '../../../util/http';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import NoData from '../../NoData/NoData';

const JobDetail = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const response = await fetchJobDetail(id);
    setData(response);
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const openMail = () => {
    window.open(`mailto:${data.email}?subject=${data.title}`);
  };

  return (
    <Fragment>
      {data && (
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
                  <IconButton
                    title="Aplicar"
                    icon={contactIcon}
                    onClick={openMail}
                  />
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
                  <JobDetailItem
                    icon={moneyIcon}
                    text={`Q${data.payment} / mes`}
                  />
                  <JobDetailItem icon={phoneIcon} text={data.phone} />
                  <JobDetailItem icon={emailIcon} text={data.email} />
                  <JobDetailItem icon={locationIcon} text={data.location} />
                </div>

                <div className={styles.description}>
                  <p className={styles.descriptionTitle}>Descripción</p>
                  <p>{data.description}</p>

                  <p className={styles.descriptionTitle}>Conocimiento en</p>
                  <div className={styles.requirements}>
                    {data.requirements.map((item, index) => {
                      return (
                        <div className={styles.requirementItem} key={index}>
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoading && <LoadingSpinner />}
      {!isLoading && !data && <NoData />}
    </Fragment>
  );
};

export default JobDetail;
