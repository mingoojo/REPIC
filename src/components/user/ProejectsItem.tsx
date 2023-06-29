import { useEffect } from 'react';
import { styled } from 'styled-components';
import useUserInfoStore from '../../hooks/useUserInfoStore';
import { Project } from '../../type/types';
import ItemInfo from './ItemInfo';
import ItemRow from './ItemRow';
import ItemTitle from './ItemTitle';

type ProejectsItemProps = {
  projectItem: Project
}

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.textMain};
  color: ${(props) => props.theme.colors.textMain};;
  padding: 1rem 0.5rem 1rem 0.5rem;
  &:hover{
    background-color: ${(props) => props.theme.colors.buttonMain};
    h1{
      color: ${(props) => props.theme.colors.primary}
    }
  }

`;

export default function ProejectsItem({ projectItem }:ProejectsItemProps) {
  const [{ UserInfo }, userInfoStore] = useUserInfoStore();

  useEffect(() => {
    userInfoStore.readUserInfo({ uid: projectItem.uid });
  }, []);

  if (!UserInfo.length) {
    return null;
  }
  return (
    <Container>
      <ItemInfo projectItem={projectItem} UserInfo={UserInfo} />
      <ItemTitle projectItem={projectItem} />
      <ItemRow projectItem={projectItem} />
    </Container>
  );
}
