import { DETAIL_TABLE } from '@pages/productDetail/constant/TABLE';
import { Fragment } from 'react/jsx-runtime';
import * as styles from '@pages/productDetail/components/detailTable/DetailTable.css';

const DetailTable = () => {
  return (
    <table className={styles.tableContainer}>
      <tbody>
        {DETAIL_TABLE.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Fragment key={cellIndex}>
                <th colSpan={cell.colSpan === 3 ? 1 : 1} className={styles.thStyle}>
                  {cell.title}
                </th>
                <td colSpan={cell.colSpan ?? 1} className={styles.tdStyle}>
                  {cell.value}
                </td>
              </Fragment>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DetailTable;
