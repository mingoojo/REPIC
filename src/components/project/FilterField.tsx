import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useProjectQueryStore from '../../hooks/useProjectQueryStore';

type FilterFieldProps = {
  Page : string
  Search : string
}

const Container = styled.tr`
align-items: center;
line-height: 40px;
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
`;

export default function FilterField({ Page, Search }:FilterFieldProps) {
  const [{ radioValue }] = useProjectQueryStore();
  return (
    <Container>
      {
        Search ? (
          <td>
            <Link className={`${radioValue === 'All' && 'active'}`} to={`/projects?page=${Page}&filter=All&search=${Search}`}>전체</Link>
            <Link className={`${radioValue === 'Front' && 'active'}`} to={`/projects?page=${Page}&filter=Front&search=${Search}`}>프론트앤드</Link>
            <Link className={`${radioValue === 'Back' && 'active'}`} to={`/projects?page=${Page}&filter=Back&search=${Search}`}>백앤드</Link>
            <Link className={`${radioValue === 'Design' && 'active'}`} to={`/projects?page=${Page}&filter=Design&search=${Search}`}>디자인</Link>
            <Link className={`${radioValue === 'Plan' && 'active'}`} to={`/projects?page=${Page}&filter=Plan&search=${Search}`}>기획</Link>
          </td>
        ) : (
          <td>
            <Link className={`${radioValue === 'All' && 'active'}`} to={`/projects?page=${Page}&filter=All`}>전체</Link>
            <Link className={`${radioValue === 'Front' && 'active'}`} to={`/projects?page=${Page}&filter=Front`}>프론트앤드</Link>
            <Link className={`${radioValue === 'Back' && 'active'}`} to={`/projects?page=${Page}&filter=Back`}>백앤드</Link>
            <Link className={`${radioValue === 'Design' && 'active'}`} to={`/projects?page=${Page}&filter=Design`}>디자인</Link>
            <Link className={`${radioValue === 'Plan' && 'active'}`} to={`/projects?page=${Page}&filter=Plan`}>기획</Link>
          </td>
        )
      }
    </Container>
  );
}
