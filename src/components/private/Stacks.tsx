type StacksProps = {
  myStack : string[],
  setMyStack: (myStack : string[]) => void,
}

export default function Stacks({ myStack, setMyStack }:StacksProps) {
  const handleStackState = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (myStack.includes(e.target.id)) {
      const inputdata = myStack.filter((stack) => (
        stack !== e.target.id
      ));
      setMyStack(inputdata);
    } else if (!myStack.includes(e.target.id)) {
      const inputdata = [...myStack, e.target.id];
      setMyStack(inputdata);
    }
  };
  return (
    <div>
      <h2>
        사용가능한 기술
      </h2>
      <div className="stackBox">
        <div className="front">
          <div className="stack">
            <input type="checkBox" onChange={handleStackState} checked={myStack.includes('react')} id="react" />
            <label className="stackLabel" htmlFor="react">
              <div className="react" />
            </label>
          </div>
          <div className="stack">
            <input type="checkBox" onChange={handleStackState} checked={myStack.includes('vue')} id="vue" />
            <label className="stackLabel" htmlFor="vue">
              <div className="vue" />
            </label>
          </div>
          <div className="stack">
            <input type="checkBox" onChange={handleStackState} checked={myStack.includes('angler')} id="angler" />
            <label className="stackLabel" htmlFor="angler">
              <div className="angler" />
            </label>
          </div>
          <div className="stack">
            <input type="checkBox" onChange={handleStackState} checked={myStack.includes('javascript')} id="javascript" />
            <label className="stackLabel" htmlFor="javascript">
              <div className="javascript" />
            </label>
          </div>
          <div className="stack">
            <input type="checkBox" onChange={handleStackState} checked={myStack.includes('typescript')} id="typescript" />
            <label className="stackLabel" htmlFor="typescript">
              <div className="typescript" />
            </label>
          </div>
          <div className="stack">
            <input type="checkBox" onChange={handleStackState} checked={myStack.includes('svelte')} id="svelte" />
            <label className="stackLabel" htmlFor="svelte">
              <div className="svelte" />
            </label>
          </div>
          <div className="stack">
            <input type="checkBox" onChange={handleStackState} checked={myStack.includes('next')} id="next" />
            <label className="stackLabel" htmlFor="next">
              <div className="next" />
            </label>
          </div>
        </div>
        <div className="back">
          <div className="stack">
            <input type="checkBox" onChange={handleStackState} checked={myStack.includes('diango')} id="diango" />
            <label className="stackLabel" htmlFor="diango">
              <div className="diango" />
            </label>
          </div>
          <div className="stack">
            <input type="checkBox" onChange={handleStackState} checked={myStack.includes('docker')} id="docker" />
            <label className="stackLabel" htmlFor="docker">
              <div className="docker" />
            </label>
          </div>
          <div className="stack">
            <input type="checkBox" onChange={handleStackState} checked={myStack.includes('express')} id="express" />
            <label className="stackLabel" htmlFor="express">
              <div className="express" />
            </label>
          </div>
          <div className="stack">
            <input type="checkBox" onChange={handleStackState} checked={myStack.includes('java')} id="java" />
            <label className="stackLabel" htmlFor="java">
              <div className="java" />
            </label>
          </div>
          <div className="stack">
            <input type="checkBox" onChange={handleStackState} checked={myStack.includes('mongodb')} id="mongodb" />
            <label className="stackLabel" htmlFor="mongodb">
              <div className="mongodb" />
            </label>
          </div>
          <div className="stack">
            <input type="checkBox" onChange={handleStackState} checked={myStack.includes('mysql')} id="mysql" />
            <label className="stackLabel" htmlFor="mysql">
              <div className="mysql" />
            </label>
          </div>
          <div className="stack">
            <input type="checkBox" onChange={handleStackState} checked={myStack.includes('nest')} id="nest" />
            <label className="stackLabel" htmlFor="nest">
              <div className="nest" />
            </label>
          </div>
          <div className="stack">
            <input type="checkBox" onChange={handleStackState} checked={myStack.includes('nodejs')} id="nodejs" />
            <label className="stackLabel" htmlFor="nodejs">
              <div className="nodejs" />
            </label>
          </div>
          <div className="stack">
            <input type="checkBox" onChange={handleStackState} checked={myStack.includes('postgresql')} id="postgresql" />
            <label className="stackLabel" htmlFor="postgresql">
              <div className="postgresql" />
            </label>
          </div>
          <div className="stack">
            <input type="checkBox" onChange={handleStackState} checked={myStack.includes('spring')} id="spring" />
            <label className="stackLabel" htmlFor="spring">
              <div className="spring" />
            </label>
          </div>
        </div>
        <div className="global">
          <div className="stack">
            <input type="checkBox" onChange={handleStackState} checked={myStack.includes('github')} id="github" />
            <label className="stackLabel" htmlFor="github">
              <div className="github" />
            </label>
          </div>
          <div className="stack">
            <input type="checkBox" onChange={handleStackState} checked={myStack.includes('aws')} id="aws" />
            <label className="stackLabel" htmlFor="aws">
              <div className="aws" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
