import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../ui/Button';
import InputBundle from '../ui/InputBundle';

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
    div{
      margin-block: 1rem;
    }
    label{
      text-align: left;
      p{
        margin-bottom: 1rem;
      }
      input{
        border-radius: 1rem;
        border: none;
        background-color: ${(props) => props.theme.colors.buttonMain};
        height: 40px;
        width: 300px;
        padding: 1rem;
        color: ${(props) => props.theme.colors.textMain};
      }
    }
    p{
      margin-top: 2rem;
      a{
        color: ${(props) => props.theme.colors.primaryDeep};
      }
    }
  }
`;

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordComfirm, setPasswordComfirm] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Container>
      <p className="signup">REPIC회원가입</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <InputBundle label="Email" value={email} onChange={setEmail} />
          <InputBundle label="NickName" value={displayName} onChange={setDisplayName} />
          <InputBundle label="Password" value={password} onChange={setPassword} />
          <InputBundle label="PasswordComfirm" value={passwordComfirm} onChange={setPasswordComfirm} />
          <Button type="submit" label="가입하기" />
          <p>
            이미 회원이신가요?
            <Link to="/login">로그인</Link>
          </p>
        </fieldset>
      </form>
    </Container>
  );
}
