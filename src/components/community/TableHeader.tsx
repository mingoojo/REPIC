import { Radio } from './CommunityTable';

type TableHeaderProps = {
  check : Radio
  setCheck : (check : Radio) => void
}

export default function TableHeader({ check, setCheck }:TableHeaderProps) {
  return (
    <header>
      <table>
        <thead>
          <tr>
            <th>
              <label>
                <input type="radio" checked={check === 'Recent'} onChange={() => { setCheck('Recent'); }} name="Sorting" />
                최신순
              </label>
              <label>
                <input type="radio" checked={check === 'View'} onChange={() => { setCheck('View'); }} name="Sorting" />
                조회순
              </label>
              <label>
                <input type="radio" checked={check === 'Likes'} onChange={() => { setCheck('Likes'); }} name="Sorting" />
                좋아요순
              </label>
            </th>
          </tr>
        </thead>
      </table>
      <div>
        <input type="text" placeholder="검색하세요" />
      </div>
    </header>
  );
}
