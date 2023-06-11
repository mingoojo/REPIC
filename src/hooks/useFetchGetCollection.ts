import { collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import { storeApiService } from '../apiServices/StoreApiService';
import CollectionDocumentStore from '../store/CollectionDocumentStore';

type useFetchGetCollectionProps = {
  transaction : string,
  paramsId? : string
}

export default function useFetchGetCollection({ transaction, paramsId }:
  useFetchGetCollectionProps) {
  // 정보받아오는 이벤트
  const Store = container.resolve(CollectionDocumentStore);
  const [{ CollectionDocument }] = useStore(Store);

  const [error, setError] = useState(null);

  useEffect(() => storeApiService.unsubscribeCollection(
    { transaction, setError, paramsId },
  ), [collection]);
  return {
    CollectionDocument,
    error,
  };
}
