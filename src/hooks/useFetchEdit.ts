import { storeApiService } from '../apiServices/StoreApiService';
import { CreatedTime } from '../type/types';

type fetchEditProps = {
  title : string
  text : string
  transaction : string
  createdTime : CreatedTime
}

export default function useFetchEdit() {
  function fetchEdit({
    title, text, transaction, createdTime,
  }:fetchEditProps) {
    return null;
  }

  return {
    fetchEdit,
  };
}
