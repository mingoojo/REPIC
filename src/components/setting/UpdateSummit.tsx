import { styled } from 'styled-components';
import useUserInfoUpdateStore from '../../hooks/useUserInfoUpdateStore';
import { UserData } from '../../type/types';
import Button from '../ui/Button';

type UpdateSummitProps = {
  file : File
  userInfo : UserData
}

const Container = styled.div`
text-align: center;
  button{
    width: 100%;
  }
`;

export default function UpdateSummit({ file, userInfo }:UpdateSummitProps) {
  const [, userInfoUpdateStore] = useUserInfoUpdateStore();
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file.name) {
      userInfoUpdateStore.UpdateData({ file, uid: userInfo.uid });
    }
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Button label="정보 변경" type="submit" />
      </form>
    </Container>
  );
}
