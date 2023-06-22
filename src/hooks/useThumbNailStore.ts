import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import ThumbNailStore from '../store/ThumbNailStore';

export default function useThumbNailStore() {
  const thumbNailStore = container.resolve(ThumbNailStore);
  return useStore(thumbNailStore);
}
