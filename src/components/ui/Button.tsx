import { styled } from 'styled-components';

type ButtonProps = {
  label : string,
  type?: 'button' | 'submit';
  disable?:boolean
}

const ButtonItem = styled.button`
margin-top: 1rem;
font-family: 'GmarketSansMedium';
border-radius: 0.5rem;
background-color: ${(props) => props.theme.colors.primary};
color: white;
font-size: 1.6rem;
font-weight: bold;
letter-spacing: 2px;
width: 300px;
height: 40px;
border: none;
&:active{
  background-color: ${(props) => props.theme.colors.primaryDeep};
}

&:disabled {
    filter: grayscale(80%);
    cursor: not-allowed;
}
`;

export default function Button({ label, type = 'button', disable = true }:ButtonProps) {
  return (
    <ButtonItem disabled={!disable} type={type}>{label}</ButtonItem>
  );
}
