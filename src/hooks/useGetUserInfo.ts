import useStore from './useStore';

export default function useGetUserInfo() {
  const store = useStore();
  const { UserInfo } = store.state;
  return (
    JSON.parse(UserInfo)
  );
}
