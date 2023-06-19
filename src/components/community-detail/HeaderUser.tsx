import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetchThumbStorage from '../../hooks/useFetchThumbStorage';
import { PrivateData } from '../../type/types';

type HeaderUserProps = {
  date : string,
  createdUser : PrivateData[]
}

export default function HeaderUser({ date, createdUser }:HeaderUserProps) {
  const { Url, ThumbsDownload } = useFetchThumbStorage();

  useEffect(() => {
    ThumbsDownload({ userInfo: createdUser[0].uid });
  }, [createdUser]);

  return (
    <div className="userInfo">
      <Link to={`/mypage/${createdUser[0].uid}`}>
        <div className="userThumbNail" style={{ backgroundImage: `url(${Url})` }} />
      </Link>
      <div className="userPara">
        <h1>
          {createdUser[0].nickName}
        </h1>
        <p>
          {'작성일 : '}
          {date}
        </p>
      </div>
    </div>
  );
}
