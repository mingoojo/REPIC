import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import { appAuth } from '../firebase/config';
import UserStore from '../store/UserStore';

export default function useUnsubscribeFireStore() {
  const Store = container.resolve(UserStore);
  const [, store] = useStore(Store);
  const unsubscribe = () => {
    appAuth.onAuthStateChanged((user) => {
      store.isAuthUpdate(true);
      if (user) {
        store.UserUpdate(user);
      }
    });
  };
  return { unsubscribe };
}
