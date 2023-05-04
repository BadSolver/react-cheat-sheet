import { CardWithCode, Title } from "components";
import React from "react";

export const Refs = () => {
  const codeOne = ` class MyComponent extends React.Component {
        constructor(props) {
          super(props);
          this.myRef = React.createRef();
        }
        render() {
          return <div ref={this.myRef} />;
        }
    }`;
  const codeTwo = `   import { useRef } from 'react';

    function MyComponent () {
        const refContainer = useRef(initialValue);
        return (
            <div ref={refContainer} />
        );
    }`;
  return (
    <div>
      <Title title="Refs" />
      <p>
        Refs (далее просто «ссылки») предоставляет способ доступа к DOM-узлам
        или React-элементам, созданным в методе render().
      </p>
      <p>Есть несколько хороших примеров использования ссылок:</p>
      <ul>
        <li>
          <p>
            Управление фокусом, выделение текста или воспроизведение
            медиаресурсами.
          </p>
        </li>
        <li>
          <p>Выполнение анимаций в императивном подходе.</p>
        </li>
        <li>
          <p>Интеграция со сторонними библиотеками, взаимодействующие с DOM.</p>
        </li>
      </ul>
      <p>
        Ссылки создаются с использованием React.createRef() и добавляются к
        React-элементам с помощью атрибута ref. Ссылки обычно присваиваются
        свойству экземпляра, когда компонент создаётся таким образом, чтобы на
        них можно было ссылаться по всему компоненту.
      </p>
      <CardWithCode codeString={codeOne} />
      <p>В функциональных компонентах используется хук useRef:</p>
      <CardWithCode codeString={codeTwo} />
      <p>
        useRef возвращает изменяемый ref-объект, свойство .current которого
        инициализируется переданным аргументом (initialValue). Возвращённый
        объект будет сохраняться в течение всего времени жизни компонента.
      </p>
    </div>
  );
};
