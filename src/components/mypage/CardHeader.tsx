import { useEffect } from 'react';
import useFetchThumbStorage from '../../hooks/useFetchThumbStorage';
import { PrivateData } from '../../type/types';

type CardHeaderProps = {
  params : string,
  PrivateItem : PrivateData[]
}

export default function CardHeader({ params, PrivateItem }:CardHeaderProps) {
  const { ThumbsDownload, Url } = useFetchThumbStorage();

  useEffect(() => {
    ThumbsDownload({ userInfo: params });
  }, [params, PrivateItem]);

  if (!Url) {
    return null;
  }

  console.log(Url);

  return (
    <div>
      CardHeader
    </div>
  );
}
