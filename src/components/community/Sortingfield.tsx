import { useState } from 'react';
import styled from 'styled-components';
import { Radio } from '../../page/CommunityPage';

type SortingfieldProps = {
  radioValue : Radio
  setRadioValue: (radioValue : Radio) =>void
}

const Container = styled.div`
padding-block: 2rem;
border-bottom: 1px solid ${(props) => props.theme.colors.textMain};
display: flex;
justify-content: space-between;
align-items: center;

  table{
    padding-block: 1.2rem;
    input[type='radio']{
      display: none;
    }
    label{
      padding: 1rem;
      border-radius: 1rem;
    }
    input[type='radio']:checked + label{
      background-color: ${(props) => props.theme.colors.buttonMain};
      color: ${(props) => props.theme.colors.primaryDeep}
    }
  }

  .searchField{
    input{
      width: 300px;
      height: 40px;
      padding: 1rem;
      border: 2px solid ${(props) => props.theme.colors.buttonMain};
      border-radius: 0.3rem;
      background-color: ${(props) => props.theme.colors.backgroundMain};
      color: ${(props) => props.theme.colors.textMain};
    }
    button{
      height: 40px;
      padding: 1rem 2rem 1rem 2rem;
      white-space: nowrap;
      background-color: ${(props) => props.theme.colors.buttonMain};
      color: ${(props) => props.theme.colors.textMain};
      border: none;
    }
  }
@media (max-width: 720px){
  flex-direction: column;

  table{
    width: 100%;
    padding-block: 1.2rem;
    th{
      display: flex;
    }
    margin-block: 1rem;
  }
  .searchField{
    width: 100%;
    display: flex;
    input{
      width: 100%;
    }
  }
}
`;

export default function Sortingfield({ radioValue, setRadioValue }:SortingfieldProps) {
  const [searchText, setSearchText] = useState('');
  // 엔터키 활성화 메서드
  const handleKey = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      //
    }
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>
              <input type="radio" id="RecentBox" checked={radioValue === 'Recent'} onChange={() => { setRadioValue('Recent'); }} name="Sorting" />
              <label htmlFor="RecentBox">
                최신순
              </label>
              <input type="radio" id="ViewBox" checked={radioValue === 'View'} onChange={() => { setRadioValue('View'); }} name="Sorting" />
              <label htmlFor="ViewBox">
                조회순
              </label>
              <input type="radio" id="LikesBox" checked={radioValue === 'Likes'} onChange={() => { setRadioValue('Likes'); }} name="Sorting" />
              <label htmlFor="LikesBox">
                좋아요순
              </label>
            </th>
          </tr>
        </thead>
      </table>
      <div className="searchField">
        <input type="text" value={searchText} onKeyUp={handleKey} onChange={handleChange} placeholder="검색하세요" />
        <button type="button">검색</button>
      </div>
    </Container>
  );
}
