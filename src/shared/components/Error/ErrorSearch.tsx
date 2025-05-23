import { useNavigate } from 'react-router-dom';
import * as styles from '@shared/components/Error/Error.css';
import Head from '@shared/components/head/Head';
import Text from '@shared/components/text/Text';
import { ROUTES } from '@router/constant/routes';

const ErrorSearch = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Head level="h2" tag="head_sb_20">
        😞 오류 발생
      </Head>
      <Text tag="body_regular_18">검색 결과가 없습니다</Text>
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
