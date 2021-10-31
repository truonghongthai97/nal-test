import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
} from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://example.com'
    : process.env.REACT_APP_DEV_API_URL;

class BaseService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL,
      timeout: 10000,
    });
    this.instance.interceptors.request.use(
      this.handleRequestInterceptor,
      this.handleRequestError,
    );
    this.instance.interceptors.response.use(
      this.handleResponseInterceptor,
      this.handleResponseError,
    );
  }

  handleRequestInterceptor(config: AxiosRequestConfig) {
    return config;
  }

  handleRequestError(error: AxiosError) {
    return Promise.reject(error);
  }

  handleResponseInterceptor(response: AxiosResponse) {
    return response;
  }

  handleResponseError(error: AxiosError) {
    return Promise.reject(error);
  }

  get(url: string, config: AxiosRequestConfig) {
    return this.instance.get(url, config);
  }
}

export default BaseService;
