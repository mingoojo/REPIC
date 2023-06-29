import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { Project } from '../type/types';
import { appFireStore } from '../firebase/config';

export default function getProjectItem({ DocId }:{DocId : string}) {
  const [gotProjectItem, setGotProjectItem] = useState<Project>();

  // 유저정보 받아오기
  useEffect(() => {
    onSnapshot(
      collection(appFireStore, 'Projects'),
      (snapshot) => {
        snapshot.docs.forEach((docu) => {
          const result = { ...docu.data(), id: docu.id } as Project;
          if (DocId === result.id) {
            setGotProjectItem(result);
          }
        });
      },
    );
  }, []);

  return {
    gotProjectItem,
  };
}
