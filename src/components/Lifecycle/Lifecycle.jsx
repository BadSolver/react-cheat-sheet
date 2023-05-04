import { CardWithCode, Title } from "components";
import React from "react";

export const Lifecycle = () => {
  const codeOne = `constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
}`;
  const codeTwo = `  render () {
  return (
      <div>
          'Hello'
      </div>
  )
}`;
  const codeThree = `   componentDidUpdate(prevProps, prevState) {
  if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
  }
}

`;
  const codeFour = `  componentWillUnmount() {
  alert("The component named Header is about to be unmounted.");
}`;
  return (
    <div>
      <Title title="Методы жизненного цикла" />
      <p>Основные методы жизненного цикла:</p>
      <p>1. constructor ()</p>
      <CardWithCode codeString={codeOne} />
      <p>2. render ()</p>
      <p>Рендеринг компонента. Отдает JSX.</p>
      <CardWithCode codeString={codeTwo} />
      <p>3. componentDidMount()</p>
      <p>4. componentDidUpdate(prevProps, prevState)</p>
      <CardWithCode codeString={codeThree} />
      <p>5. componentWillUnmount()</p>
      <CardWithCode codeString={codeFour} />
      <p>
        Для использования методов жизненного цикла в функциональных компонентах
        предназначек хук useEffect.
      </p>
    </div>
  );
};
