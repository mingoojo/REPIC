import { container } from 'tsyringe';
import PrivateStore from '../store/PrivateStore';

export default function useFetchPrivateStore() {
  const store = container.resolve(PrivateStore);

  // 글불러오기
  const fetchGet = store.fetchGetPrivate;

  return {
    fetchGet,
  };
}
