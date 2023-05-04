import { CardWithCode, Title } from "components";
import React from "react";

export const RouterComponent = () => {
  const codeOne = ` npm i react-router-dom`;
  const codeTwo = `import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';`;
  const codeThree = ` render(
        <Router>
        <App />
        </Router>,
        document.getElementById("root")
    ); `;
  const codeFour = `import React from "react";
    import { Routes, Route } from "react-router-dom";
    import { Home, About, Events, Products, Contact } from "./pages";
    function App() {
        return (
            <div>
                 <Routes>
                    <Route path="/" element={<Home />} />
                    <Route  path="/about"  element={<About />} />
                    <Route  path="/events"  element={<Events />}  />
                    <Route  path="/products"  element={<Products />}  />
                    <Route  path="/contact"  element={<Contact />}  />
                </Routes>
             </div>
        );
    }`;
  return (
    <div>
      <Title title="Router" />
      <p>
        В React имеется своя система маршрутизации, которая позволяет
        сопоставлять запросы к приложению с определенными компонентами. Ключевым
        звеном в работе маршрутизации является модуль react-router, который
        содержит основной функционал по работе с маршрутизацией. Однако если мы
        собираемся работать в браузере, то нам также надо использовать модуль
        react-router-dom.
      </p>
      <CardWithCode codeString={codeOne} />
      <p>После установки нужно импортировать BrowserRouter, Routes, Route:</p>
      <CardWithCode codeString={codeTwo} />
      <p>
        Вместо рендеринга компонента App мы рендерим компонент Router. Компонент
        Router передает информацию о текущем местоположении всем дочерним
        элементам, вложенным в него. Его следует использовать один раз и
        поместить рядом с корнем дерева компонентов:
      </p>
      <CardWithCode codeString={codeThree} />
      <p>
        Компонент-оболочка для любых маршрутов, которые мы хотим отобразить,
        называется Routes. Внутри Routes мы будем использовать компонент Route
        для каждой страницы, которую хотим отобразить.
      </p>
      <CardWithCode codeString={codeFour} />
      <p>
        Эти маршруты сообщают Router, какой компонент отображать при изменении
        положения окна. Каждый компонент Route имеет свойства path и element.
        Когда расположение браузера совпадает с path, отобразится element. Если
        местоположение равно /, маршрутизатор отобразит компонент Home. Если
        расположение является /products, маршрутизатор отобразит компонент
        Products.
      </p>
    </div>
  );
};
