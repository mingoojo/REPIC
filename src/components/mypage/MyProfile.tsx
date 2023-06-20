import styled from 'styled-components';
import { PrivateData } from '../../type/types';

type MyProfileProps = {
  Url : string
  PrivateItem:PrivateData[]
}

const Container = styled.div`
border: 1px solid ${(props) => props.theme.colors.textMain};
padding: 1rem;
  .myHeader{
    display: flex;
    align-items: center;
    .thumbnailBox{
      margin-right: 2rem;
      img{
        background-color: white;
        border-radius: 25px;
        width: 50px;
        height: 50px;
      }
    }
  }
  .myBody{
    .introPara{
      padding-block: 1rem;
      border-bottom: 1px solid ${(props) => props.theme.colors.textMain};
    }
    .stacks{
      h1{
        padding-top: 1rem;
      }
      ul{
        margin-block: 1rem;
        display: flex;
        li{
          padding: 0.5rem;
          img{
            border-radius: 12.5px;
            width: 25px;
            height: 25px;
            background-color: white;
          }
        }
      }
    }
  }
`;

export default function MyProfile({ Url, PrivateItem }:MyProfileProps) {
  return (
    <Container>
      <div className="myHeader">
        <div className="thumbnailBox">
          <img src={`${Url}`} alt="" />
        </div>
        <div className="infoBox">
          <h1>
            {PrivateItem[0].nickName}
          </h1>
          <p>
            {PrivateItem[0].email}
          </p>
        </div>
      </div>
      <div className="myBody">
        <div className="introPara">
          <p>
            {PrivateItem[0].introduce}
          </p>
        </div>
        <div className="stacks">
          <h1>
            [
            사용가능 스택
            ]
          </h1>
          <ul>
            {
              PrivateItem[0].stacks.map((stack) => (
                <li key={stack}>
                  <img src={`/images/library/resized/${stack}.png`} alt={`${stack}`} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </Container>
  );
}
