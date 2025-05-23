import type { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import * as styles from '@shared/components/Error/Error.css';
import Head from '@shared/components/head/Head';
import Text from '@shared/components/text/Text';
import { ROUTES } from '@router/constant/routes';
import { ERROR_MESSAGE } from '@/constant/errorMessage';

const Error = ({ error, resetErrorBoundary }: FallbackProps) => {
  const navigate = useNavigate();

  const getErrorMessage = (error: Error): string => {
    try {
      const parsed = JSON.parse(error.message);
      const { status, code } = parsed;

      const messageSet = ERROR_MESSAGE[status];
      if (!messageSet) return '알 수 없는 오류가 발생했습니다.';

      return messageSet[code] || messageSet.default || '오류가 발생했습니다.';
    } catch {
      return error.message || '문제가 발생했습니다. 다시 시도해주세요.';
    }
  };

  return (
    <div className={styles.container}>
      <Head level="h2" tag="head_sb_20">
        😞 오류 발생
      </Head>
      <Text tag="body_regular_18">{getErrorMessage(error)}</Text>
      <div className={styles.buttonWrapper}>
        <button type="button" className={styles.button} onClick={resetErrorBoundary}>
          다시 시도
        </button>
        <button type="button" className={styles.button} onClick={() => navigate(ROUTES.HOME)}>
          홈으로 이동
        </button>
      </div>
    </div>
  );
};

export default Error;
