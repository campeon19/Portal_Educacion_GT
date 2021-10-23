import LessonItem from '../LessonItem/LessonItem';
import styles from './CourseDetail.module.css';
import { useParams } from 'react-router-dom';
import IconButton from '../IconButton/IconButton';
import shareIcon from '../../assets/icons/share.svg';

// DOMMY IMAGE
import dummyImage from '../../assets/images/capture.png';

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

        <div className={`${styles.content} ${styles.row}`}>
            <div>
            <h1 className={styles.title}>Hola mundo 1</h1>
          <p className={styles.desDate}>
            1.058.789 visualizaciones - 16 oct 2021
          </p>
            </div>
         
         <div>
             <IconButton icon={shareIcon} title="Compartir"/>
         </div>
        </div>

        <div className={styles.content}>
          <h1 className={styles.description}>Descripcion</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className={styles.lessons}>
        <div className={styles.lessonsHeader}>Listado de lecciones</div>
        <div className={styles.lessonsMain}>
          <LessonItem title="Hola mundo 1" time="1min" image={dummyImage} />
          <LessonItem title="Hola mundo 2" time="1min" image={dummyImage} />
          <LessonItem title="Hola mundo 3" time="1min" image={dummyImage} />
          <LessonItem title="Hola mundo 4" time="1min" image={dummyImage} />
          <LessonItem title="Hola mundo 5" time="1min" image={dummyImage} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
