import LessonItem from '../LessonItem/LessonItem';
import styles from './CourseDetail.module.css';
import { useParams } from 'react-router-dom';
import IconButton from '../IconButton/IconButton';
import shareIcon from '../../assets/icons/share.svg';
import {  useState } from 'react';

const DUMMY_DATA = [
  {
    id: 1,
    title: 'Matematicas',
    views: 100,
    duration: '1min',
    date: new Date(),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    video_url: 'https://www.youtube.com/embed/mCdA4bJAGGk',
    image:
      'https://swingeducation.com/wp-content/uploads/2019/03/AdobeStock_93012084-846x520.jpg',
  },
  {
    id: 2,
    title: 'Programacion en python',
    views: 200,
    duration: '5min',
    date: new Date(),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    video_url: 'https://www.youtube.com/embed/kng-mJJby8g',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH8RdrJTvyeLODmi40C_EQ4Nl0EXbLETVhCg&usqp=CAU',
  },
  {
    id: 3,
    title: 'Programacion en assembler',
    views: 1000,
    duration: '7min',
    date: new Date(),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    video_url: 'https://www.youtube.com/embed/JeznW_7DlB0',
    image: 'https://stackify.com/wp-content/uploads/2017/12/Featured.jpg',
  },
];

const CourseDetail = () => {
  const { id } = useParams();
  const [current, setCurrent] = useState(0);

  const currentData = DUMMY_DATA[current];

  const onItemChangeHandler = (index) => setCurrent(index);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <iframe
          className={styles.video}
          src={currentData.video_url}
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
              {currentData.date.toUTCString()}
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
          {DUMMY_DATA.map((item, index) => {
            return (
              <LessonItem
                key={index}
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
  );
};

export default CourseDetail;
