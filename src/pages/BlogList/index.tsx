import { useState, useEffect, useMemo, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { paths } from 'src/routes';
import { generatePath } from 'react-router';

import Pagination from 'src/components/Pagination';
import Loading from 'src/components/Loading';
import NoResults from 'src/components/NoResults';
import { IBaseBlog } from 'src/types/blog';

import * as S from './style';
import { blogService } from 'src/services/index';
import removeEmptyParams from 'src/utils/removeEmptyParams';
import debounce from 'src/utils/debounce';

const values = {
  none: {
    sortBy: '',
    order: '',
  },
  createdAtAsc: {
    sortBy: 'createdAt',
    order: 'asc',
  },
  createdAtDesc: {
    sortBy: 'createdAt',
    order: 'desc',
  },
};

const sortOptions = [
  {
    label: 'none',
    value: 'none',
  },
  {
    label: 'createdAt (Asc)',
    value: 'createdAtAsc',
  },
  {
    label: 'createdAt (Desc)',
    value: 'createdAtDesc',
  },
];

const BlogList = () => {
  const [blogs, setBlogs] = useState<IBaseBlog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [params, setParams] = useState<{
    page: number;
    sortBy: string | null;
    order: string | null;
    search: string | null;
    limit: number;
  }>({
    page: 1,
    sortBy: '',
    order: '',
    search: '',
    limit: 10,
  });
  const isEmptyList = useMemo<boolean>(() => !blogs.length, [blogs]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);

        const { data = [] } = await blogService.getBlogs({
          params: removeEmptyParams(params),
        });

        setBlogs(data);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [params]);

  const handleChangeField = (e: any) => {
    const { name, value } = e.target;
    updateParams(name, value);
  };

  const handleChangeSorting = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    // @ts-ignore
    const sortingData = values[value] || {};

    setParams(preParams => ({ ...preParams, ...sortingData }));
  };

  const updateParams = (name: string, value: any) => {
    setParams(preParams => ({ ...preParams, [name]: value }));
  };

  const handleChangeInput = debounce(
    (e: ChangeEvent<HTMLInputElement>) => {
      handleChangeField(e);
    },
    300,
    false,
  );

  return (
    <S.Wrapper>
      <S.TopActions>
        <select name="sort-blog" onChange={handleChangeSorting}>
          {sortOptions.map((option, index) => (
            <option key={option.value + index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div>
          <label>Search by all</label>
          <input type="text" name="search" onChange={handleChangeInput} />
        </div>

        <div>
          <label>Search by title</label>
          <input type="text" name="title" onChange={handleChangeInput} />
        </div>
      </S.TopActions>

      <S.Content>
        {isLoading ? (
          <Loading />
        ) : isEmptyList ? (
          <NoResults />
        ) : (
          <S.ListWrapper>
            {blogs.map(({ id, ...blogRest }) => (
              <Link key={id} to={generatePath(paths.blogDetail, { id })}>
                <S.StyledMediaObject media={blogRest} />
              </Link>
            ))}
          </S.ListWrapper>
        )}

        <Pagination
          count={10}
          page={params.page}
          onChange={(_, page) => updateParams('page', page)}
        />
      </S.Content>
    </S.Wrapper>
  );
};

export default BlogList;
