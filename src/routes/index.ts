import React from 'react';

const Home = React.lazy(() => import('../pages/Home'));
const BlogList = React.lazy(() => import('../pages/BlogList'));
const BlogDetail = React.lazy(() => import('../pages/BlogDetail'));

export const paths = {
  home: '/',
  blogList: '/blogs',
  blogDetail: '/blogs/:id',
};

const routes = [
  {
    path: paths.home,
    component: Home,
    exact: true,
  },
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
