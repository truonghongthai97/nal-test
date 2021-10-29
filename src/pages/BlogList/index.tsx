import { Link } from 'react-router-dom';
import { paths } from 'src/routes';
import { generatePath } from 'react-router';

import * as S from './style';

const BlogList = () => {
  const blogs = [
    {
      id: '1',
      createdAt: '2020-09-09T01:25:32.504Z',
      title: 'Books Shores AGP',
      image: 'http://lorempixel.com/640/480/people',
      content:
        'Use the primary SSL transmitter, then you can synthesize the 1080p port!',
    },
    {
      id: '2',
      createdAt: '2020-09-09T06:16:23.090Z',
      title: 'compressing',
      image: 'http://lorempixel.com/640/480/animals',
      content:
        "I'll synthesize the auxiliary GB bandwidth, that should protocol the GB matrix!",
    },
  ];

  return (
    <S.ListWrapper>
      {blogs.map(({ id, ...blogRest }) => (
        <Link key={id} to={generatePath(paths.blogDetail, { id })}>
          <S.StyledMediaObject media={blogRest} />
        </Link>
      ))}
    </S.ListWrapper>
  );
};

export default BlogList;
