import { CardWithCode, Title } from "components";
import React from "react";

export const Effect = () => {
  const codeOne = ` import {useEffect} from 'react';`;
  const codeTwo = `useEffect ( () => { }, [])`;
  const codeThree = ` useEffect ( () => { }, [name])`;
  const codeFour = `useEffect ( () => { } )`;
  const codeFive = ` useEffect ( () => {
        return () => {};
    })`;
  return (
    <div>
      <Title title="UseEffect" />
      <p>
        Для использования методов жизненного цикла в функциональных компонентах
        предназначек хук useEffect.
      </p>
      <CardWithCode codeString={codeOne} />
      <p>Хук позволяет использовать 3 метода жизненного цикла:</p>
      <ul>
        <li>
          <p>componentDidMount()</p>
        </li>
        <li>
          <p>componentDidUpdate(prevProps, prevState)</p>
        </li>
        <li>
          <p>componentWillUnmount()</p>
        </li>
      </ul>
      <p>
        UseEffect принимает в качестве первого параметра функцию, в качестве
        второго - [ ] (аналог componentDidMount).
      </p>
      <CardWithCode codeString={codeTwo} />
      <p>
        UseEffect принимает в качестве первого параметра функцию, в качестве
        второго - массив с зависимостью (или несколькими) (аналог
        componentDidUpdate).
      </p>
      <CardWithCode codeString={codeThree} />
      <p>
        UseEffect принимает в качестве первого параметра функцию, второго
        параметра - нет (аналог componentDidMount + componentDidUpdate).
      </p>
      <CardWithCode codeString={codeFour} />
      <p>
        UseEffect принимает в качестве первого параметра функцию, которая
        возвращает другую функцию (аналог componentWillUnmount).
      </p>
      <CardWithCode codeString={codeFive} />
    </div>
  );
};
