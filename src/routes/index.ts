import BlogList from 'src/pages/BlogList';
import BlogDetail from 'src/pages/BlogDetail';

export const paths = {
  blogList: '/blogs',
  blogDetail: '/blogs/:id',
};

const routes = [
  {
    path: paths.blogList,
    component: BlogList,
    exact: true,
  },
  {
    path: paths.blogDetail,
    component: BlogDetail,
  },
];

export default routes;
