import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { appFireStore } from '../firebase/config';

export default function useFetchUpdate() {
  async function fetchUpdate({
    tranaction, docId, updateKey, updateValue,
  }:{
    tranaction:string, docId:string, updateKey:string, updateValue:string
  }) {
    const Ref = doc(appFireStore, tranaction, docId);
    await updateDoc(Ref, {
      [updateKey]: updateValue,
    });
  }
  async function fetchUpdateArray({
    tranaction, docId, updateKey, updateValue,
  }:{
    tranaction:string, docId:string, updateKey:string, updateValue:string
  }) {
    const Ref = doc(appFireStore, tranaction, docId);
    await updateDoc(Ref, {
      [updateKey]: arrayUnion(updateValue),
    });
  }
  return {
    fetchUpdate, fetchUpdateArray,
  };
}
