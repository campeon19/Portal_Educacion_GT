import styles from './NoData.module.css';
import noDataIcon from '../../assets/images/no-data.png';

const NoData = () => {
    return <div className={styles.container}>
        <div className={styles.content}>
            <img className={styles.image} src={noDataIcon} alt=""/>
            <p className={styles.title}>No hay lecciones disponibles para este curso...</p>
        </div>
    </div>
};

export default NoData;