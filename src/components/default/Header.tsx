import { styled } from 'styled-components';
import { useState } from 'react';
import useWidthStore from '../../hooks/useWidthStore';
import HeaderSmall from './header/HeaderSmall';
import HeaderMain from './header/HeaderMain';
import HeaderModal from './header/HeaderModal';

const ContainerHeader = styled.header`
border-bottom: 1px solid ${(props) => props.theme.colors.textMain};;
background-color: ${(props) => props.theme.colors.backgroundMain};
padding: 1.5rem 5rem 1.5rem 5rem;
font-family: 'Noto Sans CJK KR';
font-weight: bold;
letter-spacing :3px;
position: fixed;
top: 0;
left: 0;
right: 0;
font-size: 1.4rem;
`;

export default function Header() {
  const [{ width }] = useWidthStore();
  const [toggle, setToggle] = useState(false);

  return (
    <ContainerHeader>
      <nav>
        {
          width > 720 ? <HeaderMain /> : <HeaderSmall toggle={toggle} setToggle={setToggle} />
        }
      </nav>
      {toggle && (<HeaderModal setToggle={setToggle} toggle={toggle} />)}
    </ContainerHeader>
  );
}
