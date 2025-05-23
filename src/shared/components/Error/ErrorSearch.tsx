import { useNavigate } from 'react-router-dom';
import * as styles from '@shared/components/Error/ErrorSearch.css';
import Head from '@shared/components/head/Head';
import { ROUTES } from '@router/constant/routes';

interface ErrorSearchProps {
  text: string;
}

const ErrorSearch = ({ text }: ErrorSearchProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Head level="h2" tag="head_sb_20">
        {text}
      </Head>
      <div className={styles.buttonWrapper}>
        <button type="button" className={styles.button} onClick={() => window.location.reload()}>
          새로 고침
        </button>
        <button type="button" className={styles.button} onClick={() => navigate(ROUTES.HOME)}>
          홈으로 이동
        </button>
      </div>
    </div>
  );
};

export default ErrorSearch;
