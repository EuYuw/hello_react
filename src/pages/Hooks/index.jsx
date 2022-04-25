/**
 * Hooks可以让你在函数组件中使用state及其他react特性
 */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

function HooksDemo() {
  const [count, setCount] = React.useState(0); // 使用state，参数为默认值
  const [name, setName] = React.useState('WY'); // 使用state
  let refInput = React.useRef();

  function addCount() {
    setCount((count) => ++count);
  }

  function changeName() {
    setName(Math.random().toFixed('3') + 'yu');
  }

  function unmountNode() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
  }

  function getInputValue() {
    alert(refInput.value);
  }

  // 使用useEffect，一个方法能使用三种声明周期
  useEffect(() => {
    const timerNo = setInterval(() => {
      addCount();
    }, 1000);
    // 这里面的返回值当作类组件componentWillUnmount触发时的回调
    return () => {
      clearInterval(timerNo);
    };
  }, []); // 当第二个参数为空时，此时第一个方法里的回调相当于类组件的componentDidMount，有值时相当于监听，类似componentDidUpdate

  return (
    <div>
      <h3>
        当前和为：{count},我的名字是{name}
      </h3>
      <div>
        <button onClick={addCount}>点击+1</button>
        <button onClick={changeName}>点击改名</button>
        <button onClick={unmountNode}>卸载组件</button>
        <input type="text" ref={(n) => (refInput = n)} placeholder="hooks useRef" />
        <button onClick={getInputValue}>获取input值</button>
      </div>
    </div>
  );
}

export default HooksDemo;
