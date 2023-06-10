import { appAuth } from '../firebase/config';

export default function getTransAction() {
  const uid = appAuth.currentUser?.uid || '';
  let transaction = 'public';
  if (uid) {
    transaction = uid || 'public';
  }

  return { transaction, uid };
}
