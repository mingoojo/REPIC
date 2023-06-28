import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { UserData } from '../type/types';
import { appFireStore } from '../firebase/config';

export default function getUserInfo({ uid }:{uid : string}) {
  const [gotUserInfo, setGotUserInfo] = useState<UserData>();

  // 유저정보 받아오기
  useEffect(() => {
    onSnapshot(
      collection(appFireStore, 'Users'),
      (snapshot) => {
        snapshot.docs.forEach((docu) => {
          const result = { ...docu.data(), id: docu.id } as UserData;
          if (uid === result.uid) {
            setGotUserInfo(result);
          }
        });
      },
    );
  }, []);

  return {
    gotUserInfo,
  };
}
