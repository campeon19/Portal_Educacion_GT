import { Fragment, useEffect, useState } from 'react';
import JobCard from './JobCard/JobCard';
import styles from './Jobs.module.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import NoData from '../NoData/NoData';
import { fetchJobs } from '../../util/http';

const Jobs = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetchJobs();
    setData(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      {data && (
        <div className={styles.screen}>
          <div className={styles.jobsContainer}>
            {data.map((item, index) => {
              return <JobCard data={item} id={index} key={index} />;
            })}
          </div>
        </div>
      )}
      {isLoading && <LoadingSpinner />}
      {!isLoading && !data && <NoData />}
    </Fragment>
  );
};

export default Jobs;
