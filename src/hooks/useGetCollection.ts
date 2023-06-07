import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { appFireStore } from '../firebase/config';

export default function useGetCollection(transaction:string) {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(appFireStore, transaction),
      (snapshot) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result:any = [];
        snapshot.docs.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(result);
        setError(null);
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (err:any) => setError(err.message),
    );
    return unsubscribe;
  }, [collection]);
  return {
    documents,
    error,
  };
}
