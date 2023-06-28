import styled from 'styled-components';

type StackItemProps = {
  label:string,
  onChange?: (value: string) => void,
  UserStacks: string[]
}

const Container = styled.li`
list-style-type: none;
  input{
    display: none;
  }
  input[type='checkbox']:checked + label div{
    box-sizing: border-box;
    border: 1px solid red;
  }
  input[type='checkbox']:checked + label div:before{
    content: '';
    position:absolute;
    z-index: -1;
    width:7px;
    height:7px;
    border-radius: 1rem;
    background-color: red;
  }
  .stackLabel{
    position: static;
    padding: 0;
    display: inline;
    margin: 1rem;
    div{
      width: 35px;
      height: 35px;
      margin: 0rem 4px 0rem 4px;
      border-radius: 2rem;
      background-color: white;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
    div:hover{
      cursor: pointer;
    }
    span{
      position: absolute;
      font-size: 1.2rem;
      width: 43px;
      text-align: center;
      visibility: hidden;
    }
    div:hover + span{
      visibility: visible;
    }
  }
`;

export default function StackItem({ label, onChange = undefined, UserStacks }:StackItemProps) {
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) {
      return;
    }
    onChange(event.target.id);
  };
  return (
    <Container className="stack">
      <input type="checkBox" id={`${label}`} onChange={handleChange} checked={UserStacks.includes(`${label}`)} />
      <label className="stackLabel" htmlFor={`${label}`}>
        <div className={`${label}`} style={{ backgroundImage: `url(/images/library/resized/${label}.png)` }} />
        <span className="test">{label}</span>
      </label>
    </Container>
  );
}
