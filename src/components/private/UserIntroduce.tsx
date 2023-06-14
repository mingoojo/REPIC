import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PrivateData } from '../../type/types';

const Article = styled.article`
width: 62%;
float: right;
padding: 1rem;
h2{
  font-size: 2rem;
}
.introduce{
  border: 1px solid #222;
  border-radius: 1rem;
  padding: 1rem;
  margin-block: 1rem;
  min-height: 100px;
}
.buttonField{
  text-align: center;
}
`;
type UserIntroduceProps = {
  myPrivateData: PrivateData[]
}

export default function UserIntroduce({ myPrivateData }:UserIntroduceProps) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/private/write/${myPrivateData[0].uid}`);
  }
  return (
    <Article>
      <div>
        <h2>
          자기소개
        </h2>
        <div className="introduce">
          <p>{myPrivateData[0].introduce}</p>
          <p>123123</p>
        </div>
      </div>
      <div>
        <div>
          <h2>
            작성글
          </h2>
        </div>
        <div className="introduce">
          123
        </div>
        <div className="buttonField">
          <button type="button" onClick={handleClick}> + </button>
        </div>
      </div>
    </Article>
  );
}
