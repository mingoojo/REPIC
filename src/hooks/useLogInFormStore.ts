import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import LogInFormStore from '../store/LogInFormStore';

export default function useLogInFormStore() {
  const logInFormStore = container.resolve(LogInFormStore);
  return useStore(logInFormStore);
}
