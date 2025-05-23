import * as styles from '@shared/components/Loading/Loading.css';

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner} aria-label="loading" />
    </div>
  );
};

export default Loading;
