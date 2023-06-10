import { collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import { storeApiService } from '../apiServices/StoreApiService';
import CollectionDocumentStore from '../store/CollectionDocumentStore';

export default function useFetchGetCollection(transaction:string) {
  const Store = container.resolve(CollectionDocumentStore);
  const [{ CollectionDocument }] = useStore(Store);

  const [error, setError] = useState(null);

  useEffect(() => storeApiService.unsubscribeCollection({ transaction, setError }), [collection]);
  return {
    CollectionDocument,
    error,
  };
}
