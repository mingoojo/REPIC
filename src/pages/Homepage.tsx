import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import Header from '../components/default/Header';
import { appFireStore } from '../firebase/config';

export default function HomePage() {
  async function click() {
    const washingtonRef = doc(appFireStore, 'projects', 'ZI4fkijqmjbweCNO6QiF');
    await updateDoc(washingtonRef, {
      text: '123',
    });
    await updateDoc(washingtonRef, {
      regions: arrayUnion({ test: true }),
    });
  }
  return (
    <div>
      <Header />
      <main>
        main Div
      </main>
      <button type="button" onClick={click}>teset</button>
    </div>
  );
}
