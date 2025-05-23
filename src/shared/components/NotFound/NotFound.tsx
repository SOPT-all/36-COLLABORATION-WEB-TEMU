import { useNavigate } from 'react-router-dom';
import * as styles from '@shared/components/NotFound/NotFound.css';
import Head from '@shared/components/head/Head';
import { ROUTES } from '@router/constant/routes';

const NotFount = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Head level="h2" tag="head_sb_20">
        🚫 페이지를 찾을 수 없습니다
      </Head>

      <button type="button" className={styles.button} onClick={() => navigate(ROUTES.HOME)}>
        홈으로 이동
      </button>
    </div>
  );
};

export default NotFount;
