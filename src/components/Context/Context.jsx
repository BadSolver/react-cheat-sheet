import { CardWithCode, Title } from "components";
import React from "react";

export const Context = () => {
  const codeOne = `const MyContext = React.createContext(defaultValue);`;
  const codeTwo = `<MyContext.Provider value={value}> </MyContext.Provider>`;
  const codeThree = `  <MyContext.Consumer>
    {value => /* отрендерить что-то, используя значение контекста */}
  </MyContext.Consumer>`;
  const codeFour = `const value = useContext(MyContext);`;
  return (
    <div>
      <Title title="Контекст" />
      <p>
        Контекст разработан для передачи данных для всего дерева
        React-компонентов, не прокидывая через пропсы.
      </p>
      <p>Создать контекст:</p>
      <CardWithCode codeString={codeOne} />
      <p>
        defaultValue - дефолтное значение или объект для получения через
        контекст
      </p>
      <p>
        Вызывая React.createContext мы получаем объект, который содержит два
        компонента:
      </p>
      <p>
        1. Компонент Provider. Благодаря ему все дочерние компоненты могут
        получать значения, которые мы ему передаем.
      </p>
      <CardWithCode codeString={codeTwo} />
      <p>
        Компонент Provider принимает проп value, который будет передан во все
        компоненты, использующие этот контекст и являющиеся потомками этого
        компонента Provider. Один Provider может быть связан с несколькими
        компонентами, потребляющими контекст. Так же компоненты Provider могут
        быть вложены друг в друга, переопределяя значение контекста глубже в
        дереве.
      </p>
      <p>
        2. Компонент Consumer - это React-компонент, который подписывается на
        изменения контекста.
      </p>
      <p>
        Consumer принимает функцию в качестве дочернего компонента. Эта функция
        принимает текущее значение контекста и возвращает React-компонент.
        Передаваемый аргумент value будет равен ближайшему (вверх по дереву)
        значению этого контекста, а именно пропу value компонента Provider. Если
        такого компонента Provider не существует, аргумент value будет равен
        значению defaultValue, которое было передано в createContext().
      </p>
      <CardWithCode codeString={codeThree} />
      <p>
        Хук useContext. Принимает один параметр - это объект контекста,
        получаемый при вызове React.createContext и возвращает текущее значение
        контекста для этого контекста.
      </p>
      <p>
        Текущее значение контекста определяется пропом value ближайшего
        MyContext.Provider над вызывающим компонентом в дереве.
      </p>
      <CardWithCode codeString={codeFour} />
      <p>Контекст лучше всего создавать в отдельном файле.</p>
    </div>
  );
};
