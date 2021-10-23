import LessonItem from '../LessonItem/LessonItem';
import styles from './CourseDetail.module.css';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/mCdA4bJAGGk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <h1 className={styles.title}>Hola mundo 1</h1>

      </div>
      <div className={styles.lessons}>
        <div className={styles.lessonsHeader}>Listado de lecciones</div>
        <div className={styles.lessonsMain}>
          <LessonItem title="Hola mundo 1" time="1min" />
          <LessonItem title="Hola mundo 2" time="1min" />
          <LessonItem title="Hola mundo 3" time="1min" />
          <LessonItem title="Hola mundo 4" time="1min" />
          <LessonItem title="Hola mundo 5" time="1min" />
          <LessonItem title="Hola mundo 6" time="1min" />
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
