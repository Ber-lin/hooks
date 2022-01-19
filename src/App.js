import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect,useRef,forwardRef, createRef} from 'react'
function Example(props) {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);//初始值是0
  console.log(props.text)
  useEffect(()=>{
    document.title=`You clicked ${count} times`
    return ()=>{
      console.log('这是effect hook的return')
    }
  },[count])//第二个参数加上count代表仅在count更改时更新
  return (
    <div>
      {props.children}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

function Foo(props){
  const inputRef=useRef()
  const onClick=(params)=>{
    alert(inputRef.current.value)
    console.log(inputRef)
  }
  return (
    <div>
      <input type='text' ref={inputRef}/>
      <button onClick={onClick}>展示</button>
      <h2>------------------------------------</h2>
    </div>
  )
}

const Ref=forwardRef((params,inputRef)=>{//ref转发使用forwardRef包裹子组件

  const onClick=(params)=>{
    alert(inputRef.current.value)
    console.log(inputRef.current)
  }
  return (
    <div>
      <input type='text' ref={inputRef}/>
      <button onClick={onClick}>展示</button>
    </div>
  )
})

function HooksApp() {
  const [num, setNumber] = useState(0);
  const handleClick = () => {
      for (let i = 0; i < 5; i++) {
          setTimeout(() => {
              setNumber(num + 1)
              console.log(num)
          }, 1000)
      }
  }
  return <button onClick={handleClick} >{num}</button>
}
function App(props) {
  const inputRef=createRef()
  // console.log(inputRef)
  const onClick=()=>{
    alert(inputRef.current.value)
    console.log(inputRef.current)
  }
  //父组件给子组件传递ref
  return (
    <div>
      <Foo/>
      <Ref ref={inputRef} />
      <button onClick={onClick}>父组件</button>
      <Example text='这是example的props'>
        <h1>Welcome</h1>
      </Example>
      <HooksApp></HooksApp>
    </div>
  )
}

export default App;
