import { useEffect, useState, useMemo } from 'react';
import * as S from './style';
import { blogService } from 'src/services/index';
import { useParams } from 'react-router-dom';
import NoResults from 'src/components/NoResults';
import Loading from 'src/components/Loading';
import { IBaseBlog } from 'src/types/blog';
import formatDate from 'src/utils/formatDate';

const BlogDetail = () => {
  const [blogDetail, setBlogDetail] = useState<IBaseBlog | null>(null);
  const { createdAt = '' } = blogDetail || {};
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id: blogId } = useParams<{ id: string }>();
  const computedCreatedAt = useMemo(() => formatDate(createdAt), [createdAt]);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        setIsLoading(true);

        // @ts-ignore
        const { data } = await blogService.getBlog({ params: { id: blogId } });
        console.log(
          '🚀 ~ file: index.tsx ~ line 16 ~ fetchBlogDetail ~ data',
          data,
        );

        setBlogDetail(data);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogDetail();
  }, [blogId]);

  return (
    <S.Wrapper>
      {isLoading ? (
        <Loading />
      ) : blogDetail ? (
        <S.Blog>
          <S.BlogImageWrapper>
            <S.BlogImage src={blogDetail.image} alt="" />
          </S.BlogImageWrapper>
          <S.BlogTitle>{blogDetail.title}</S.BlogTitle>
          <S.BlogContentDescription>{blogDetail.content}</S.BlogContentDescription>
          <S.BlogCreatedAt>{computedCreatedAt}</S.BlogCreatedAt>
        </S.Blog>
      ) : (
        <NoResults />
      )}
    </S.Wrapper>
  );
};

export default BlogDetail;
