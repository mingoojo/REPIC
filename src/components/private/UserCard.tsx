import { useDarkMode } from 'usehooks-ts';
import { appAuth } from '../../firebase/config';
import { PrivateData } from '../../type/types';
import ContainerUserCard from './privateStyle/UserCardStyle';

type UserCardProps = {
  myPrivateData : PrivateData[]
  radioToggle : string
  setRadioToggle:(radioToggle:string) => void
}

export default function UserCard({ myPrivateData, radioToggle, setRadioToggle }:UserCardProps) {
  const { currentUser } = appAuth;
  const { isDarkMode } = useDarkMode();

  if (currentUser === null) {
    return (
      null
    );
  }

  return (
    <ContainerUserCard>
      <aside>
        <h1>
          {myPrivateData[0].nickName}
        </h1>
        <div className="Thumbnail">
          <img src="" alt="" />
        </div>
        <div>
          {myPrivateData[0].email}
        </div>
      </aside>
      {
        currentUser.uid === myPrivateData[0].uid ? (
          <div className="userToggle">
            <div className="infoLabel">
              <input type="radio" name="setting" id="info" checked={radioToggle === 'info'} onChange={() => { setRadioToggle('info'); }} />
              <label htmlFor="info">
                {
                  isDarkMode ? (
                    <img src="/images/icons/setting02.png" alt="icon" />
                  ) : (
                    <img src="/images/icons/setting04.png" alt="icon" />
                  )
                }
                <p>
                  정보수정하기
                </p>
              </label>
            </div>
            <div>
              <input type="radio" name="setting" id="write" checked={radioToggle === 'write'} onChange={() => { setRadioToggle('write'); }} />
              <label htmlFor="write">
                {
                  isDarkMode ? (
                    <img src="/images/icons/more01.png" alt="icon" />
                  ) : (
                    <img src="/images/icons/more03.png" alt="icon" />

                  )
                }
                <p>
                  내가 쓴 글보기
                </p>
              </label>
            </div>
          </div>
        ) : (
          null
        )
      }

    </ContainerUserCard>
  );
}
