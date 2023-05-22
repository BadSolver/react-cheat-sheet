import React, { useContext, useEffect, useRef, useState } from "react";
import "./style.css";
import { MyContext } from "./MyContext";

export const List = () => {
  const { count, incrementCount } = useContext(MyContext);

  const [numbers, setNumbers] = useState([1, 555]);
  const [count1, setCount] = useState(0);

  const handleCount = () => {
    setCount(count1 + 1);
  };

  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 100);
    const newArr = [...numbers, randNumber];
    setNumbers(newArr);
  };
  // Здесь useEffect будет выполняться аналогично componentDidMount(), так как в массив зависимостей мы ничего не передали. Отработает один раз и больше не будет следить за компонентом.
  useEffect(() => {
    console.log("componentDidMount()");
  }, []);

  //   Здесь будет следить за обновлением переменной numbers, аналогично componentDidUpdate()
  useEffect(() => {
    console.log(`componentDidUpdate() `);
  }, [numbers]);

  //   А вот что бы повторить поведение componentWillUnmount() нам нужно внутри useEffect вернуть анонимную функцию с тем кодом, который должен будет выполняться перед удалением компонента
  useEffect(() => {
    console.log(`componentDidMount()`);
    return () => {
      console.log(`componentWillUnmount()`);
    };
  }, []);

  return (
    <div>
      <h1>{count1}</h1>
      <button onClick={handleCount}>+</button>
      <ul>
        {numbers.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <button onClick={addNumber}>Новое число </button>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <h1>{count}</h1>
      <button onClick={incrementCount}>+++</button>
    </div>
  );
};

// export class List extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { numbers: [1, 555] };
//     this.addNumber = this.addNumber.bind(this);
//   }

//   addNumber() {
//     console.log(this);
//     const randomNumber = Math.round(Math.random() * 100);
//     this.setState({
//       numbers: [...this.state.numbers, randomNumber],
//     });
//   }
//   componentDidMount() {
//     console.log(`Компонент был создан`);
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log(`компонент был изменен `);
//   }
//   componentWillUnmount() {
//     console.log(`Компонент был удален`);
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.numbers.map((item, index) => {
//             return <li key={index}>{item}</li>;
//           })}
//         </ul>
//         <button onClick={this.addNumber}>Новое число </button>
//       </div>
//     );
//   }
// }

// export const List = () => {
//   const [displayValue, setDisplayValue] = useState([]);
//   const [value, setValue] = useState("");

//   function f1(a, b) {
//     console.log("function work", a + b);
//   }

//   function f2() {
//     console.log("moooove");
//   }

//   const textInput = useRef();

//   const f3 = (e) => {
//     setValue(e.target.value);
//   };
//   const func4 = () => {
//     setDisplayValue([...displayValue, value]);
//   };

//   return (
//     <div>
//       <h1>События</h1>
//       <section>
//         <h2>Button</h2>
//         <button onClick={() => f1(5, 1)}>Push</button>
//       </section>
//       <section>
//         <h2>Double Click + mouse move</h2>
//         {/* Что бы передавать аргументы в функции, нужно вызывать колбэк с передачей аргументов  */}
//         {/* Если мы передаем, то вызываем анонимную функцию в которой вызываем нашу функцию с необходимыми аргументами */}
//         <div className="test" onDoubleClick={() => f1(10, 10)}></div>
//       </section>
//       <section>
//         <h2>Input</h2>
//         <input

//           type="text"
//           onChange={f3}
//           ref={textInput}
//           placeholder="введите номер телеофна"
//         />
//         <button onClick={func4}>click me</button>
//         <ul>
//           {displayValue.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };
