import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useCommunityQueryStore from '../../hooks/useCommunityQueryStore';

type SortingfieldProps = {
  radioValue : string
  Page : string
  searchConfirm: () => void
  searchText:string
  Search:string
}

const Container = styled.div`
padding-block: 2rem;
border-bottom: 1px solid ${(props) => props.theme.colors.textMain};
display: flex;
justify-content: space-between;
align-items: center;

  table{
    padding-block: 1.2rem;
    a{
      color : ${(props) => props.theme.colors.textMain};
      text-decoration: none;
      padding: 1rem;
      border-radius: 1rem;
    }
    .active{
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
    margin-block: 1rem;
    th{
      display: flex;
      a{
        text-decoration: none;
      }
    }
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

export default function Sortingfield({
  radioValue, Page, searchConfirm, searchText, Search,
}:SortingfieldProps) {
  const [, communityQueryStore] = useCommunityQueryStore();
  // 엔터키 활성화 메서드
  const handleKey = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchConfirm();
    }
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    communityQueryStore.changeSearchText(e.target.value);
  };

  return (
    <Container>
      <table>
        <thead>
          <tr>
            {
              Search ? (
                <th>
                  <Link className={`${radioValue === 'Recent' && 'active'}`} to={`/communities?page=${Page}&sort=Recent&search=${Search}`}>최신순</Link>
                  <Link className={`${radioValue === 'View' && 'active'}`} to={`/communities?page=${Page}&sort=View&search=${Search}`}>조회순</Link>
                  <Link className={`${radioValue === 'Likes' && 'active'}`} to={`/communities?page=${Page}&sort=Likes&search=${Search}`}>좋아요순</Link>
                </th>
              ) : (
                <th>
                  <Link className={`${radioValue === 'Recent' && 'active'}`} to={`/communities?page=${Page}&sort=Recent`}>최신순</Link>
                  <Link className={`${radioValue === 'View' && 'active'}`} to={`/communities?page=${Page}&sort=View`}>조회순</Link>
                  <Link className={`${radioValue === 'Likes' && 'active'}`} to={`/communities?page=${Page}&sort=Likes`}>좋아요순</Link>
                </th>
              )
            }
          </tr>
        </thead>
      </table>
      <div className="searchField">
        <input type="text" value={searchText} onKeyUp={handleKey} onChange={handleChange} placeholder="검색하세요" />
        <button type="button" onClick={searchConfirm}>검색</button>
      </div>
    </Container>
  );
}
