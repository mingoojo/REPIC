import { useDarkMode, useEffectOnce } from 'usehooks-ts';
import { appAuth } from '../../firebase/config';
import { PrivateData } from '../../type/types';
import ContainerUserCard from './privateStyle/UserCardStyle';
import useFetchThumbStorage from '../../hooks/useFetchThumbStorage';

type UserCardProps = {
  myPrivateData : PrivateData[]
  radioToggle : string
  setRadioToggle:(radioToggle:string) => void
}

export default function UserCard({ myPrivateData, radioToggle, setRadioToggle }:UserCardProps) {
  const { currentUser } = appAuth;
  const { isDarkMode } = useDarkMode();
  const { Url, ThumbsDownload } = useFetchThumbStorage();

  if (currentUser === null) {
    return (
      null
    );
  }

  useEffectOnce(() => {
    ThumbsDownload({ userInfo: myPrivateData[0].uid });
  });

  return (
    <ContainerUserCard>
      <aside>
        <h1>
          {myPrivateData[0].nickName[myPrivateData[0].nickName.length - 1]}
        </h1>
        <div className="Thumbnail">
          <img src={`${Url}`} alt="thumbNail" className="ThumbnailImg" />
        </div>
        <div>
          {myPrivateData[0].email}
        </div>
        <div className="stackBox">
          {myPrivateData[0].stacks.map((stack) => (
            <div className="stack" key={stack} style={{ backgroundImage: `url(/images/library/resized/${stack}.png)` }} />
          ))}
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
