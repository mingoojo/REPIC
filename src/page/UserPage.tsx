import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import getUserInfo from '../utils/getUserInfo';
import UserView from '../components/user/UserView';
import useUserQueryStore from '../hooks/useUserQueryStore';

export default function UserPage() {
  const paramsId = useParams();
  const [params] = useSearchParams();
  const { gotUserInfo } = getUserInfo({ uid: String(paramsId.id) });
  const [, userQueryStore] = useUserQueryStore();

  const Sort = params.get('sort') ?? '';

  useEffect(() => {
    userQueryStore.changeRadioValue(Sort);
  }, [Sort]);

  if (!gotUserInfo) {
    return null;
  }

  return (
    <UserView UserInfo={gotUserInfo} userId={String(paramsId.id)} Sort={Sort} />
  );
}
