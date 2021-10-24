import JobCard from './JobCard/JobCard';
import styles from './Jobs.module.css';

const DUMMY_JOBS = [
  {
    id: 1,
    time: 'hourly',
    payment: 1500,
    title: 'UI/UX Designer',
    company: 'Epix Coders',
    requirements: ['UI', 'UX', 'photoshop', 'UI', 'UX', 'photoshop'],
    description:
      'We are looking for an experience UI and UX designer to work on our new proyects.',
  },
  {
    id: 1,
    time: 'hourly',
    payment: 1500,
    title: 'UI/UX Designer',
    company: 'Epix Coders',
    requirements: ['UI', 'UX', 'photoshop'],
    description:
      'We are looking for an experience UI and UX designer to work on our new proyects.',
  },
];

const Jobs = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.jobsContainer}>
        {DUMMY_JOBS.map((item, index) => {
          return <JobCard data={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Jobs;
