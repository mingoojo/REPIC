import { useEffect } from 'react';
import { container } from 'tsyringe';
import Store from '../store/Store';
import useForceUpdate from './useForceUpdate';

export default function useStore() {
  const store = container.resolve(Store);

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    store.addListener(forceUpdate);
    return () => {
      store.removeListener(forceUpdate);
    };
  }, [store, forceUpdate]);

  return store;
}
