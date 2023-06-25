/* eslint-disable no-alert */
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SettingView from '../components/setting/SettingView';
import { appAuth } from '../firebase/config';
import useUserInfoStore from '../hooks/useUserInfoStore';

export default function SettingPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [{ UserInfo }, userInfoStore] = useUserInfoStore();
  const { currentUser } = appAuth;

  useEffect(() => {
    userInfoStore.readUserInfo({ uid: String(params.id) });
  }, [userInfoStore]);

  if (params.id !== currentUser?.uid) {
    alert('잘못된 접근입니다.');
    navigate('/');
  }

  if (!UserInfo.length) {
    return null;
  }
  if (currentUser === null) {
    return null;
  }

  const [userInfo] = UserInfo;

  return (
    <SettingView userInfo={userInfo} />
  );
}
