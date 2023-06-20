import { useEffect } from 'react';
import styled from 'styled-components';
import useFetchThumbStorage from '../../hooks/useFetchThumbStorage';
import { PrivateData, ProjectItem } from '../../type/types';

type CardAuthProps = {
  project : ProjectItem,
  privateItem:PrivateData[]
}

const Container = styled.div`
display: flex;
align-items: center;
  img{
    border-radius: 15px;
    width: 30px;
    height: 30px;
  }
`;

export default function CardAuth({ privateItem, project }:CardAuthProps) {
  const { Url, ThumbsDownload } = useFetchThumbStorage();
  const PrivateItem = privateItem.filter((item) => (
    item.uid === project.uid
  ));
  useEffect(() => {
    if (PrivateItem.length) {
      ThumbsDownload({ userInfo: PrivateItem[0].uid });
    }
  }, [PrivateItem]);

  return (
    <Container>
      <img src={`${Url}`} alt="" />
      <h1>
        {PrivateItem[0].nickName}
      </h1>
    </Container>
  );
}
