import { CardWithCode, Title } from "components";
import React from "react";

export const Form = () => {
  const codeOne = ` class UserForm extends React.Component {
        constructor(props) {
          super(props);
          this.state = {name: ""};
            this.onChange = this.onChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        onChange(e) {
          var val = e.target.value;
          this.setState({name: val});
        }
      
        handleSubmit(e) {
          e.preventDefault();
          alert("Имя: " + this.state.name);
        }
      
        render() {
          return (
            <form onSubmit={this.handleSubmit}>
              <p>
                <label>Имя:</label><br />
                <input type="text" value={this.state.name} onChange={this.onChange}/>
              </p>
              <input type="submit" value="Отправить" />
            </form>
          );
        }
      }
      
      ReactDOM.render(
        <UserForm />,
        document.getElementById("app")
    )
`;
  const codeTwo = ` this.state = {name: ""};`;
  const codeThree = `<input type="text" value={this.state.name} onChange={this.onChange} />`;
  return (
    <div>
      <Title title="Работа с формами" />
      <p>
        В React мы можем использовать все стандартные элементы форм, которые
        есть в html, однако здесь эти элементы приобретают дополнительные
        возможности. Рассмотрим, как работать с формами в React.
      </p>
      <CardWithCode codeString={codeOne} />
      <p>
        Чтобы контролировать введенные значения, в конструкторе устанавливается
        объект state:
      </p>
      <CardWithCode codeString={codeTwo} />
      <p>
        При определении поля ввода каждое поле связывается с определенным
        значением в state:
      </p>
      <CardWithCode codeString={codeThree} />
      <p>
        С помощью e.target.value получаем введенное значение. После обновления
        новое значение this.state.name отобразится в поле ввода.
      </p>
    </div>
  );
};
