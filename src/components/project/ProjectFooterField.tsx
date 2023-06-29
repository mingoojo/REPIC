import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { Project } from '../../type/types';
import useProjectQueryStore from '../../hooks/useProjectQueryStore';

type ProjectFooterFieldProps = {
  projects : Project[]
  Page : string
  Search : string
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

export default function ProjectFooterField({ projects, Page, Search }:ProjectFooterFieldProps) {
  const [pageLength, setPageLength] = useState(0);
  const [{ radioValue }] = useProjectQueryStore();
  const navigate = useNavigate();

  useEffect(() => {
    setPageLength(Math.ceil((projects.length) / 10));
  }, [projects]);

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
    navigate('/projects/write');
  };
  return (
    <Container>
      <div className="ButtonBox clone">
        <Button label="글작성" type="submit" onClick={handleClick} />
      </div>
      <div className="pageButtonBox">
        {
          Search ? (
            <>
              {Number(Page) === 1 && <Link to={`/projects?page=1&filter=${radioValue}&search=${Search}`}>{'<'}</Link>}
              {Number(Page) !== 1 && <Link to={`/projects?page=${Number(Page) - 1}&filter=${radioValue}&search=${Search}`}>{'<'}</Link>}
              {pageRouterSearch()}
              {Number(Page) === pageLength && <Link to={`/projects?page=${pageLength}&filter=${radioValue}&search=${Search}`}>{'>'}</Link>}
              {Number(Page) !== pageLength && <Link to={`/projects?page=${Number(Page) + 1}&filter=${radioValue}&search=${Search}`}>{'>'}</Link>}
            </>
          ) : (
            <>
              {Number(Page) === 1 && <Link to={`/projects?page=1&filter=${radioValue}`}>{'<'}</Link>}
              {Number(Page) !== 1 && <Link to={`/projects?page=${Number(Page) - 1}&filter=${radioValue}`}>{'<'}</Link>}
              {pageRouter()}
              {Number(Page) === pageLength && <Link to={`/projects?page=${pageLength}&filter=${radioValue}`}>{'>'}</Link>}
              {Number(Page) !== pageLength && <Link to={`/projects?page=${Number(Page) + 1}&filter=${radioValue}`}>{'>'}</Link>}
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
