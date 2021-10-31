import { useState, useEffect } from 'react';

interface IFetchFnResponse<TData> {
  data: TData[];
}

function useAxios<TData>(
  fetchFn: (option: any) => Promise<IFetchFnResponse<TData>>,
  deps: any[],
): { data: TData[]; isLoading: boolean; error: any } {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<TData[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const callApi = async () => {
      try {
        setIsLoading(true);

        const { data = [] } = await fetchFn({
          params: { limit: 10 },
        });

        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    callApi();
  }, deps);

  return { data, isLoading, error };
}

export default useAxios;
