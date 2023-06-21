import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import WidthStore from '../store/WidthStore';

export default function useWidthStore() {
  const widthStore = container.resolve(WidthStore);
  return useStore(widthStore);
}
