import { Column } from '../../type/types';
import getCreatedTime from '../../utils/getCreatedTime';

type ColumeProps = {
  col : Column
}

export default function Colume({ col }:ColumeProps) {
  const { date } = getCreatedTime({ time: col.createdTime });
  return (
    <div className="column">
      <h1>
        {col.title}
      </h1>
      <p>
        {col.text}
      </p>
      <p>
        {date}
      </p>
    </div>
  );
}
