// import { addDoc, collection } from 'firebase/firestore';
// import { appfireStore } from '../firebase/config';
// import { fireStoreAdd, fireStoreErr, fireStoreIs } from '../store/Store';

// const initState = {
//   document: null,
//   isPending: false,
//   error: null,
//   success: false,
// };

// export default function useFireStore(transaction:any) {
//   const dispatch = useDispatch();
//   const colRef = collection(appfireStore, transaction);

//   const addDocument = async (doc:any) => {
//     dispatch(fireStoreIs('test'));
//     try {
//       const docRef = await addDoc(colRef, doc);
//       dispatch(fireStoreAdd(JSON.stringify(docRef)));
//     } catch (error) {
//       dispatch(fireStoreErr(JSON.stringify(error)));
//     }
//   };

//   const deleteDocument = (id:string) => {
//     //
//   };
//   return {
//     addDocument, deleteDocument,
//   };
// }
