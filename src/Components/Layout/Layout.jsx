import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.css';

const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.main}>{props.children}</div>
    </div>
  );
};

export default Layout;
