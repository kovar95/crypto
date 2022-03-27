import {useState, useEffect, useCallback} from 'react';
import { Asset } from 'services/multifarm/apiTypes';
import  multifarm from '../services/multifarm/service';

type Data = {
  isLoading: boolean,
  error: string | null,
  data: Asset | null,
}

export const useAsset = (assetId: string): Data => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Asset | null>(null);

  const findAsset = useCallback(async (aId:string) => {
    setIsLoading(true);

    try {
      const res = await multifarm.getAll();
      const asset = res.find((a) => a.assetId === aId);
      setData(asset ?? null);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.message);
      setIsLoading(false);
    }
  },[])

  useEffect(() => {
    findAsset(assetId);
  }, [assetId, findAsset]);

  return {data, error, isLoading}
};
