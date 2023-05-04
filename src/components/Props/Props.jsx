import { CardWithCode, Title } from "components";
import React from "react";

export const Props = () => {
  const codeOne = ` function Welcome(props) {
    return <h1>Привет, {props.name}</h1>;
}`;
  const codeTwo = ` class Welcome extends React.Component {
  render() {
      return <h1>Привет, {this.props.name}</h1>;
  }
}`;
  const codeThree = `    const element = <Welcome name="Алиса" />;`;
  const codeFour = `  function Welcome (props) {
  return <h1> Привет, {props.name}</h1>;
}

const element = <Welcome name="Алиса" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);`;
  return (
    <div>
      <Title title="Props" />
      <p>
        То, что мы называем аргументами в мире функций, в мире компонентов
        называется свойствами.
      </p>
      <p>Функциональные компоненты свойства принимают в качестве аргумента.</p>
      <p>Props представляют собой объект, содержащие свойства.</p>
      <p>Обратиться к ним можно - props.имя-свойства.</p>
      <CardWithCode codeString={codeOne} />
      <p>
        Классовые компоненты свойства принимают по умолчанию и обратиться к ним
        можно с помощью this.props.имя-свойства.
      </p>
      <CardWithCode codeString={codeTwo} />
      <p>Элементы могут описывать и наши собственные компоненты:</p>
      <CardWithCode codeString={codeThree} />
      <p>
        Когда React встречает подобный элемент, он собирает все JSX-атрибуты и
        дочерние элементы в один объект и передаёт их нашему компоненту. Этот
        объект называется «пропсы». Например, этот компонент выведет «Привет,
        Алиса» на страницу:
      </p>
      <CardWithCode codeString={codeFour} />
      <ol>
        <li>
          <p>
            Мы передаём React-элемент Welcome name="Алиса" в ReactDOM.render
          </p>
        </li>
        <li>
          <p>React вызывает наш компонент Welcome с пропсами name: 'Алиса'</p>
        </li>
        <li>
          <p>
            Наш компонент Welcome возвращает элемент h1 Привет, Алиса h1 в
            качестве результата.
          </p>
        </li>
        <li>
          <p>
            React DOM делает минимальные изменения в DOM, чтобы получилось
            Привет, Алиса.
          </p>
        </li>
      </ol>
    </div>
  );
};
