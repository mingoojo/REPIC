import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useProjectQueryStore from '../../hooks/useProjectQueryStore';

const Container = styled.tr`
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
`;
export default function SearchField() {
  const navigate = useNavigate();
  const [{ searchText, radioValue }, projectQueryStore] = useProjectQueryStore();
  const searchConfirm = () => {
    if (searchText) {
      navigate(`/projects?page=1&filter=${radioValue}&search=${searchText}`);
    } else if (!searchText) {
      navigate(`/projects?page=1&filter=${radioValue}`);
    }
  };

  // 엔터키 활성화 메서드
  const handleKey = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchConfirm();
    }
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    projectQueryStore.changeSearchText(e.target.value);
  };

  return (
    <Container>
      <td>
        <input type="text" value={searchText} onKeyUp={handleKey} onChange={handleChange} placeholder="검색하세요" />
        <button type="button" onClick={searchConfirm}>검색</button>
      </td>
    </Container>
  );
}
