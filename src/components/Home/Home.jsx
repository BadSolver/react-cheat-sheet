import React from "react";
import "./style.css";
import { Title } from "components/Title";
import { CardWithCode } from "components/CardWithCode";

export const Home = () => {
  const codeOne = `class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Список покупок для {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      )
    }
  }
  
  // Пример использования: <ShoppingList name="Марк" />`;
  const codeTwo = `return React.createElement(
    'div',
    { className: 'shopping-list' },
    React.createElement('h1' /* ... h1 children ... */),
    React.createElement('ul' /* ... ul children ... */)
  )`;

  return (
    <div>
      <Title title="Введение" />
      <p>
        React – это декларативная, эффективная и гибкая JavaScript библиотека
        для создания пользовательских интерфейсов.
      </p>
      <p>
        Она позволяет вам собирать сложный UI из маленьких изолированных
        кусочков кода, называемых «компонентами».
      </p>
      <p>
        React имеет несколько разных видов компонентов, но мы начнём с
        подклассов React.Component:
      </p>
      <CardWithCode codeString={codeOne} />
      <p>ShoppingList является примером классового компонента React.</p>
      <p>
        Компонент принимает параметры, которые называются пропсами (props,
        сокращение от properties – свойства), и возвращает из метода render()
        иерархию представлений для отображения.
      </p>
      <p>
        Метод render возвращает описание того, что вы хотите увидеть на экране.
        React берёт это описание и отображает результат.
      </p>
      <p>
        Если точнее, render возвращает React-элемент, который является
        легковесным описанием того, что нужно отрендерить.
      </p>
      <p>
        Большинство React-разработчиков используют специальный синтаксис под
        названием «JSX» для упрощения описания структуры.
      </p>
      <p>
        Во время компиляции синтаксис div преобразовывается в
        React.createElement('div'). Пример выше равнозначен вот этому:
      </p>
      <CardWithCode codeString={codeTwo} />
      <p>Далее в главах будет подробная документация</p>
    </div>
  );
};
