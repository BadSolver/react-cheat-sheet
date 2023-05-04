import { CardWithCode, Title } from "components";
import React from "react";

export const Fragment = () => {
  const codeOne = `     import { Fragment } from 'react';`;
  const codeTwo = `class ChildComponent extends React.Component {
        render() {
            return (
                <Fragment>
                    <h1>Hello Child Component</h1>
                </Fragment>
            )
        }
    }`;
  const codeThree = ` class Columns extends React.Component {
    render() {
      return (
        <>
          <td>Привет</td>
          <td>Мир</td>
        </>
      )
    }
  }`;
  return (
    <div>
      <Title title="Фрагмент" />
      <p>
        С помощью фрагментов можно сгруппировать список дочерних элементов без
        добавления дополнительных узлов в DOM.
      </p>
      <p>
        Используем React.Fragment или выполняем импорт, чтобы использовать
        Fragment:
      </p>
      <CardWithCode codeString={codeOne} />
      <p>Заменяем теги div на Fragment:</p>
      <CardWithCode codeString={codeTwo} />
      <p>Существует сокращенная запись (импортировать не нужно):</p>
      <CardWithCode codeString={codeThree} />
      <p>Недостаток сокращенной записи: нельзя использовать атрибут key.</p>
    </div>
  );
};
