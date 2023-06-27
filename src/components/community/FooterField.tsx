import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { CommunityItem } from '../../type/types';
import Button from '../ui/Button';

type FooterFieldProps={
  Page : string
  Search : string
  communityItems : CommunityItem[]
  radioValue : string
}

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-block: 1.5rem;
  .clone{
    visibility: hidden;
  }
  .pageButtonBox{
    display: flex;
    text-align: center;
    padding-block: 1rem;
    a{
      margin: .3rem;
      text-decoration: none;
      color: ${(props) => props.theme.colors.textMain};
    }
  }
  .ButtonBox{
    text-align: center;
    button{
      width: 100px;
      margin: auto;
    }
  }
`;

export default function FooterField({
  Page, Search, communityItems, radioValue,
}:FooterFieldProps) {
  const [pageLength, setPageLength] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setPageLength(Math.ceil((communityItems.length) / 10));
  }, [communityItems]);

  const pageRouterSearch = () => {
    const result = [];
    for (let i = 0; i < pageLength; i++) {
      result.push(
        <Link to={`/communities?page=${i + 1}&sort=${radioValue}&search=${Search}`} key={i}>
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

  const pageRouter = () => {
    const result = [];
    for (let i = 0; i < pageLength; i++) {
      result.push(
        <Link to={`/communities?page=${i + 1}&sort=${radioValue}`} key={i}>
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
        <Button label="글작성" />
      </div>
      <div className="pageButtonBox">
        {
          Search ? (
            <>
              {Number(Page) === 1 && <Link to={`/communities?page=1&sort=${radioValue}&search=${Search}`}>{'<'}</Link>}
              {Number(Page) !== 1 && <Link to={`/communities?page=${Number(Page) - 1}&sort=${radioValue}&search=${Search}`}>{'<'}</Link>}
              {pageRouterSearch()}
              {Number(Page) === pageLength && <Link to={`/communities?page=${pageLength}&sort=${radioValue}&search=${Search}`}>{'>'}</Link>}
              {Number(Page) !== pageLength && <Link to={`/communities?page=${Number(Page) + 1}&sort=${radioValue}&search=${Search}`}>{'>'}</Link>}
            </>
          ) : (
            <>
              {Number(Page) === 1 && <Link to={`/communities?page=1&sort=${radioValue}`}>{'<'}</Link>}
              {Number(Page) !== 1 && <Link to={`/communities?page=${Number(Page) - 1}&sort=${radioValue}`}>{'<'}</Link>}
              {pageRouter()}
              {Number(Page) === pageLength && <Link to={`/communities?page=${pageLength}&sort=${radioValue}`}>{'>'}</Link>}
              {Number(Page) !== pageLength && <Link to={`/communities?page=${Number(Page) + 1}&sort=${radioValue}`}>{'>'}</Link>}
            </>
          )
        }
      </div>
      <div className="ButtonBox">
        <Button label="글작성" type="submit" onClick={handleClick} />
      </div>
    </Container>
  );
}
