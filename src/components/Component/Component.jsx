import { CardWithCode, SelectedText, Title } from "components";
import React from "react";

export const Component = () => {
  const codeFunction1 = `function Welcome(props) {
    return <h1>Привет, {props.name}</h1>;
  }`;
  const codeClass1 = `class Welcome extends React.Component {
    render() {
      return <h1>Привет, {this.props.name}</h1>;
    }
  }`;

  const codeFunction2 = `const Test = ({ name }) => {
    // Сразу деструктурируем, тк входящие пропсы это объект
    return (
      <div>
        <p>Привет, меня зовут{name}</p>
      </div>
    );
  };
  // Здесь мы создали компонент и дали ему возможность принять пропсы, переданные от родителя.
  <Test name='Alex'/>
  // Компонент выше выведет на экран Привет, меня зовут Alex`;

  return (
    <div className="wrapper">
      <div className="content">
        <Title title="Компоненты" />
        <p>
          Компоненты позволяют разбить интерфейс на независимые части, которые
          легко применяются как в отдельности друг от друга, так и вместе и даже
          несколько раз.
        </p>
        <p>
          Компоненты ведут себя как{" "}
          <SelectedText text="обычные функции Javascript" />. Они принимают
          произвольные входные данные и возвращают React-элементы, описывающиее,
          что мы хотим увидеть на экране.
        </p>
        <p>Компоненты делятся на классовые и функциональные!</p>
        <ol>
          <li>Функциональные! </li>
          <p>
            Эта функция - компонент, потому что она получает данные в одном
            объекте (пропсы) в качестве параметра и возвращает React элемент.
          </p>
          <CardWithCode codeString={codeFunction1} />
          <li>Классовые </li>
          <CardWithCode codeString={codeClass1} />
        </ol>
        <p>Проще всего объявить React компонент как функцию</p>
        <CardWithCode codeString={codeFunction2} />
        <p>
          {" "}
          Компонента должна вести себя как <SelectedText text="чистая" />{" "}
          функция
        </p>
        <p>Чистой называется функция, которая:</p>
        <ol>
          <li>
            {" "}
            <p>
              Для одинаковых входных данных всегда возвращает один результат.
            </p>
          </li>
          <li>
            <p>
              Не имеет побочных эффектов (то есть не изменяет внешние
              состояния).
            </p>
          </li>
          <li>
            <p>зависит от внешних состояний.</p>
          </li>
        </ol>
      </div>
    </div>
  );
};
