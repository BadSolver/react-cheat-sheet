import { CardWithCode } from "components/CardWithCode";
import { Title } from "components/Title";
import React, { useState } from "react";
import "./style.css";

export const State = () => {
  const [state, setState] = useState(0);
  const incrementNumber = () => {
    setState(state + 1);
  };
  const decrementNumber = () => {
    setState(state - 1);
  };

  const codeOne = ` class App extends React.Component {
        constructor(props) {
            super(props)
            this.state = { username: 'johndoe' }
        }
        render() {
            return (
                <div> { this.state.username } </div>
            )
        }
    }`;
  const codeTwo = `this.setState({username:'Mark'});`;
  const codeThree = `  this.setState(() => ({ username: 'Mark' }))`;
  const codeFour = ` import {useState} from 'react';`;
  return (
    <div>
      <Title title="State" />
      <p>
        State (состояние) в React – это объект простого JS, позволяющий
        отслеживать данные компонента. Состояние компонента может меняться.
        Смена состояния компонента зависит от функциональности приложения.
        Изменения могут основываться на ответе от пользователя, новых сообщениях
        с сервера, ответа сети и т.д.
      </p>
      <p>
        Состояние компонента должно быть приватным для компонента и
        контролироваться им. Изменения состояния компонента необходимо делать
        внутри компонента – инициализация и обновление состояния компонента.
      </p>
      <CardWithCode codeString={codeOne} />
      <p>
        Единственный допустимый способ обновления состояния компонента – через
        setState().
      </p>
      <p>Так нельзя менять состояние: this.state.username='Mark'</p>
      <p>1 способ изменить state:</p>
      <CardWithCode codeString={codeTwo} />
      <p>2 способ изменить state:</p>
      <CardWithCode codeString={codeThree} />
      <p>
        В функциональных компонентах state создается с помощью хука useState()
        Чтобы воспользоваться им, необходимо импортировать useState из 'react':
      </p>
      <CardWithCode codeString={codeFour} />
      <div className="state-container">
        <button onClick={incrementNumber} className="state-btn">
          + 1
        </button>
        <p className="state-count">{state}</p>
        <button onClick={decrementNumber} className="state-btn">
          -1
        </button>
      </div>
    </div>
  );
};
