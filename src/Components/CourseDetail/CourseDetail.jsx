import LessonItem from '../LessonItem/LessonItem';
import styles from './CourseDetail.module.css';
import { useParams } from 'react-router-dom';
import IconButton from '../IconButton/IconButton';
import shareIcon from '../../assets/icons/share.svg';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { fetchCourseDetail } from '../../util/http';
import NoData from '../NoData/NoData';

const CourseDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [current, setCurrent] = useState(0);

  const fetchData = useCallback(async () => {
    const dataR = await fetchCourseDetail(id);

    if (dataR) {
      const formatedData = Object.keys(dataR).map((key) => {
        return { id: key, ...dataR[key] };
      });
      setData(formatedData);
      setCurrent(0);
    } else {
      setData(null);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  let currentData;

  if (data) {
    currentData = data[current];
  }

  const onItemChangeHandler = (index) => setCurrent(index);

  return (
    <Fragment>
      {data && (
        <div className={styles.container}>
          <div className={styles.main}>
            <iframe
              className={styles.video}
              src={`https://www.youtube.com/embed/${currentData.video_url}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <div className={`${styles.content} ${styles.row}`}>
              <div>
                <h1 className={styles.title}>{currentData.title}</h1>
                <p className={styles.desDate}>
                  {currentData.views} visualizaciones -{' '}
                  {new Date(currentData.date).toUTCString()}
                </p>
              </div>

              <div>
                <IconButton icon={shareIcon} title="Compartir" />
              </div>
            </div>

            <div className={styles.content}>
              <h1 className={styles.description}>Descripcion</h1>
              <p>{currentData.description}</p>
            </div>
          </div>
          <div className={styles.lessons}>
            <div className={styles.lessonsHeader}>Listado de lecciones</div>
            <div className={styles.lessonsMain}>
              {data.map((item, index) => {
                return (
                  <LessonItem
                    key={item.id}
                    title={item.title}
                    time={item.duration}
                    image={item.image}
                    isCurrent={index === current}
                    onClick={onItemChangeHandler.bind(null, index)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
      {!data && <NoData />}
    </Fragment>
  );
};

export default CourseDetail;
