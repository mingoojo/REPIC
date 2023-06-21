import { container } from 'tsyringe';
import WidthStore from '../store/WidthStore';

export default function getWindowSize() {
  const widthStore = container.resolve(WidthStore);

  const setResize = () => {
    window.addEventListener('resize', () => {
      widthStore.setWidth(window.innerWidth);
    });
  };

  const delResize = () => {
    window.removeEventListener('resize', () => {
      widthStore.setWidth(window.innerWidth);
    });
  };

  return {
    setResize, delResize,
  };
}
