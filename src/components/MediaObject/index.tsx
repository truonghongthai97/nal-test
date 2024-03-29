import { useMemo } from 'react';
import * as S from './style';
import { IProps } from './type';

import formatDate from 'src/utils/formatDate';

const MediaObject = ({ className, media, alt = 'image' }: IProps) => {
  const createdAt = useMemo(
    () => formatDate(media.createdAt),
    [media.createdAt],
  );

  return (
    <S.Wrapper className={className}>
      <S.ImageWrapper>
        <S.Image src={media.image} alt={alt} />
      </S.ImageWrapper>

      <S.ContentWrapper>
        <S.Title>{media.title}</S.Title>
        <S.ContentText>{media.content}</S.ContentText>
      </S.ContentWrapper>

      <S.CreatedAt>{createdAt}</S.CreatedAt>
    </S.Wrapper>
  );
};

export default MediaObject;
