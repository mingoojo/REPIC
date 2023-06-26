import { styled } from 'styled-components';
import useUserInfoUpdateStore from '../../hooks/useUserInfoUpdateStore';
import { UserData, allStacks } from '../../type/types';
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
  const [{ UserStacks, UserNickName, UserIntro }, userInfoUpdateStore] = useUserInfoUpdateStore();

  // 정보업데이트! [사진변경, 스택 변경, 닉네임변경, 소개글 변경]
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 사진파일 변경이 된다면 사진 업로드
    if (file.name) {
      userInfoUpdateStore.uploadIMG({ file, Uid: userInfo.uid, docId: userInfo.id });
    }

    // 스택 삭제
    allStacks.forEach((stack) => {
      userInfoUpdateStore.delDocumentField({
        tranaction: 'Users', docId: userInfo.id, updateKey: 'stacks', updateValue: stack,
      });
    });

    // 스택 다시 작성
    UserStacks.forEach((stack) => {
      userInfoUpdateStore.writeDocumentField({
        tranaction: 'Users', docId: userInfo.id, updateKey: 'stacks', updateValue: stack,
      });
    });

    // 닉네임 변경
    userInfoUpdateStore.updateDocumentField({
      tranaction: 'Users', docId: userInfo.id, updateKey: 'nickName', updateValue: UserNickName,
    });

    // 자기소개 변경
    userInfoUpdateStore.updateDocumentField({
      tranaction: 'Users', docId: userInfo.id, updateKey: 'introduce', updateValue: UserIntro,
    });
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Button label="정보 변경" type="submit" />
      </form>
    </Container>
  );
}
