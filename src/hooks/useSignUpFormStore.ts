import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import SignUpFormStore from '../store/SignUpFormStore';

export default function useSignUpFormStore() {
  const signUpFormStore = container.resolve(SignUpFormStore);
  return useStore(signUpFormStore);
}
