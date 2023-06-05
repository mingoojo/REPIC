import useStore from './useStore';

export default function useGetUserInfo() {
  const store = useStore();
  const { UserInfo } = store.state;
  if (UserInfo === '') {
    return (
      null
    );
  }
  return (
    JSON.parse(UserInfo)
  );
}
