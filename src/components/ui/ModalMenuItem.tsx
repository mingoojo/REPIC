import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

type ModalMenuItemProps = {
  label:string,
  path:string,
  onclick: () => void;
}

const Container = styled.div`
  a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.textMain};
    li{
      padding-block: 2rem;
    }
    li:hover{
      background-color: ${(props) => props.theme.colors.primary};
      color:white;
    }
  }
`;

export default function ModalMenuItem({ label, path, onclick }: ModalMenuItemProps) {
  return (
    <Container>
      <Link to={`${path}`} onClick={onclick}>
        <li>
          {label}
        </li>
      </Link>
    </Container>
  );
}
