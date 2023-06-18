import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { CommunityItem } from '../../type/types';

const Container = styled.div`
margin-block: 2rem;
display: flex;
justify-content: space-between;

.clone{
  visibility: hidden;
}

div{
  a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.textMain};
  }
  p{
    padding: 0rem 1rem 0rem 1rem;
    display: inline;
  }
  .Active{
    color: ${(props) => props.theme.colors.primary};
  }
}

.pageButtonBox{
  text-align: center;
  padding-block: 1rem;
}

.ButtonBox{
  text-align: end;
}
button{
  padding: 1rem 1.8rem 1rem 1.8rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: 500;
}
button:active{
  background-color: ${(props) => props.theme.colors.primaryDeep};
}
`;

type FooterFieldProps = {
  communityItems: CommunityItem[]
}

export default function FooterField({ communityItems }:FooterFieldProps) {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const Page = params.get('page') ?? '';

  const [pages, setPages] = useState(0);
  useEffect(() => {
    setPages(Math.ceil((communityItems.length) / 10));
  }, [communityItems]);

  const pageRouter = () => {
    const result = [];
    for (let i = 0; i < pages; i++) {
      result.push(
        <Link to={`/communities?page=${i + 1}`} key={i}>
          {
            Number(Page) === i + 1 ? (
              <p className={`pages${i + 1} Active`}>{i + 1}</p>
            ) : (
              <p className={`pages${i + 1}`}>{i + 1}</p>
            )
          }
        </Link>,
      );
    }
    return result;
  };

  const handleClick = () => {
    navigate('/communities/write');
  };

  return (
    <Container>
      <div className="ButtonBox clone">
        <button type="button" onClick={handleClick}>글작성</button>
      </div>
      <div className="pageButtonBox">
        {Number(Page) === 1 && <Link to="/communities?page=1">{'<'}</Link>}
        {Number(Page) !== 1 && <Link to={`/communities?page=${Number(Page) - 1}`}>{'<'}</Link>}
        {pageRouter()}
        {Number(Page) === pages && <Link to={`/communities?page=${pages}`}>{'>'}</Link>}
        {Number(Page) !== pages && <Link to={`/communities?page=${Number(Page) + 1}`}>{'>'}</Link>}
      </div>
      <div className="ButtonBox">
        <button type="button" onClick={handleClick}>글작성</button>
      </div>
    </Container>
  );
}
