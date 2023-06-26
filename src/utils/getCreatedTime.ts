import { CreatedTime } from '../type/types';

type getCreatedTimeProps = {
  createdTime :CreatedTime
}

export default function getCreatedTime({ createdTime }:getCreatedTimeProps) {
  const fireBaseTime = new Date(
    createdTime.seconds * 1000 + createdTime.nanoseconds / 1000000,
  );
  const date = fireBaseTime.toLocaleDateString('ko-KR');
  const atTime = fireBaseTime.toLocaleTimeString();
  return {
    date, atTime,
  };
}
