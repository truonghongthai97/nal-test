import { MouseEvent } from 'react';

import { useMemo } from 'react';

import isNumber from 'src/utils/isNumber';
import { ReactComponent as PreIcon } from 'src/assets/icons/pre.svg';
import { ReactComponent as NextIcon } from 'src/assets/icons/next.svg';
import * as S from './style';
import { IProps } from './type';

const Pagination = ({ count = 5, page, onChange }: IProps) => {
  const fakeItems = useMemo(
    () => Array.from(Array(count).keys(), x => x + 1),
    [count],
  );

  const handleClickItem = (
    e: MouseEvent<HTMLButtonElement>,
    currentPage: number,
  ) => {
    if (onChange && page !== currentPage) {
      onChange(e, currentPage);
    }
  };

  const handleClickPre = (e: MouseEvent<HTMLButtonElement>) => {
    if (onChange && isNumber(page) && page! > 1) {
      onChange(e, page! - 1);
    }
  };

  const handleClickNext = (e: any) => {
    if (onChange && isNumber(page) && page! < count) {
      onChange(e, page! + 1);
    }
  };

  return (
    <S.PaginationWrapper>
      <li>
        <S.PaginationItem disabled={page === 1} onClick={handleClickPre}>
          <PreIcon />
        </S.PaginationItem>
      </li>
      {fakeItems.map(item => (
        <li key={`pagination-item-${item}`}>
          <S.PaginationItem
            onClick={e => handleClickItem(e, item)}
            className={page === item ? 'is-selected' : ''}
          >
            {item}
          </S.PaginationItem>
        </li>
      ))}
      <li>
        <S.PaginationItem disabled={page === count} onClick={handleClickNext}>
          <NextIcon />
        </S.PaginationItem>
      </li>
    </S.PaginationWrapper>
  );
};

export default Pagination;
