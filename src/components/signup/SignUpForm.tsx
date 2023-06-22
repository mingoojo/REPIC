import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../ui/Button';
import InputBundle from '../ui/InputBundle';
import useSignUpFormStore from '../../hooks/useSignUpFormStore';

const Container = styled.div`
margin-top: 3rem;
text-align: center;
  p{
    color: ${(props) => props.theme.colors.textMain}
  }
  form{
    margin: auto;
    margin-block: 2rem;
    max-width: 300px;
    p{
      margin-top: 2rem;
      a{
        color: ${(props) => props.theme.colors.primaryDeep};
      }
    }
  }
`;

export default function SignUpForm() {
  const navigate = useNavigate();
  const [{
    email, displayName, password, passwordComfirm, valid,
  }, SignUpStore] = useSignUpFormStore();

  const setEmail = (value:string) => {
    SignUpStore.changeEmail(value);
  };

  const setDisplayName = (value:string) => {
    SignUpStore.changeDisplayName(value);
  };

  const setPassword = (value:string) => {
    SignUpStore.changePassword(value);
  };

  const setPasswordComfirm = (value:string) => {
    SignUpStore.changePasswordComfirm(value);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    SignUpStore.signup().then(() => {
      navigate('/');
    });
  };
  return (
    <Container>
      <p className="signup">REPIC회원가입</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <InputBundle label="Email" value={email} onChange={setEmail} placeholder="email@exmaple.com" />
          <InputBundle label="NickName" value={displayName} onChange={setDisplayName} placeholder="Nick Name" />
          <InputBundle label="Password" type="password" value={password} onChange={setPassword} placeholder="Password" />
          <InputBundle label="PasswordComfirm" type="password" value={passwordComfirm} onChange={setPasswordComfirm} placeholder="Password" />
          <Button type="submit" label="가입하기" disable={valid} />
          <p>
            이미 회원이신가요?
            <Link to="/login">로그인</Link>
          </p>
        </fieldset>
      </form>
    </Container>
  );
}
