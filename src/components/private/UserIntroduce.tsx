import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PrivateData } from '../../type/types';
import Colume from './Colume';

const Article = styled.article`
width: 62%;
float: right;
padding-block: 1rem;
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
.column{
  border: 1px solid #222;
  border-radius: 1rem;
  padding: 1rem;
  margin-block: 1rem;
  min-height: 100px;
}
`;
type UserIntroduceProps = {
  myPrivateData: PrivateData[]
}

export default function UserIntroduce({ myPrivateData }:UserIntroduceProps) {
  const navigate = useNavigate();
  const [MyPrivateData] = myPrivateData;
  function handleClick() {
    navigate(`/private/write/${MyPrivateData.uid}`);
  }
  return (
    <Article>
      <div>
        <h2>
          자기소개
        </h2>
        <div className="introduce">
          {
            MyPrivateData.introduce === '' ? (
              <p>작성된 소개글이 없습니다.</p>
            ) : (
              <p>{MyPrivateData.introduce}</p>
            )
          }
        </div>
      </div>
      <div>
        <div>
          <h2>
            작성글
          </h2>
        </div>
        {
          MyPrivateData.column.length ? (
            <div>
              {
                MyPrivateData.column.map((col, index) => {
                  const key = `column-${index}`;
                  return (
                    <Colume key={key} col={col} />
                  );
                })
              }
            </div>
          ) : (
            <div className="column">
              작성된 글이 없습니다.
            </div>
          )
        }
        <div className="buttonField">
          <button type="button" onClick={handleClick}> + </button>
        </div>
      </div>
    </Article>
  );
}
