import { appAuth } from '../firebase/config';
import useUserStore from './useUserStore';

export default function usefetchUnsubscribe() {
  const [, store] = useUserStore();

  const unsubscribe = () => {
    appAuth.onAuthStateChanged((userCurrent) => {
      store.setIsAuthReady(true);
      if (userCurrent) {
        store.setUser(userCurrent);
      }
    });
  };

  return {
    unsubscribe,
  };
}
