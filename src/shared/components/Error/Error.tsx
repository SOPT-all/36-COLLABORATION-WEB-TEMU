import { ROUTES } from '@router/constant/routes';
import * as styles from '@shared/components/Error/Error.css';
import Head from '@shared/components/head/Head';
import Text from '@shared/components/text/Text';
import { useNavigate } from 'react-router-dom';

interface ErrorProps {
  message?: string;
}

const Error = ({ message = '문제가 발생했습니다. 다시 시도해주세요.' }: ErrorProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Head level="h2" tag="head_sb_24">
        😞 오류 발생
      </Head>
      <Text tag="body_regular_16">{message}</Text>
      <div className={styles.buttonWrapper}>
        <button type="button" className={styles.button} onClick={() => window.location.reload()}>
          새로고침
        </button>
        <button type="button" className={styles.button} onClick={() => navigate(ROUTES.HOME)}>
          홈으로 이동
        </button>
      </div>
    </div>
  );
};

export default Error;
