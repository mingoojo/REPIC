import { CreatedTime } from '../type/types';

type getCreatedTimeProps = {
  time :CreatedTime
}

export default function getCreatedTime({ time }:getCreatedTimeProps) {
  const fireBaseTime = new Date(
    time.seconds * 1000 + time.nanoseconds / 1000000,
  );
  const date = fireBaseTime.toLocaleDateString('ko-KR');
  const atTime = fireBaseTime.toLocaleTimeString();
  return {
    date, atTime,
  };
}
