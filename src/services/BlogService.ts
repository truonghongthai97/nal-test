import { AxiosRequestConfig } from 'axios';

import BaseService from './BaseService';

class BlogService extends BaseService {
  getBlogs = (config: AxiosRequestConfig) => {
    return this.get('/blogs', config);
  };

  getBlog = (config: AxiosRequestConfig) => {
    const { params, ...restConfig } = config;

    if (params.id) {
      return this.get(`/blogs/${params.id}`, restConfig);
    }
  };
}

export default BlogService;
