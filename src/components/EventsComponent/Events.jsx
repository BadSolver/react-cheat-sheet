import { CardWithCode, Title } from "components";
import React from "react";

export const Events = () => {
  const codeTwo = ` function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log('Отправлена форма.');
    }
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Отправить</button>
      </form>
    );
}`;

  return (
    <div>
      <Title title="Обработка событий" />
      <p>
        События в React именуются в стиле camelCase вместо нижнего регистра.
      </p>
      <p>С JSX вы передаёте функцию как обработчик события вместо строки.</p>
      <p>Популярные обработчики событий: onClick, onChange</p>
      <p>Существует множество поддерживаемых событий, вот общий список:</p>
      <ul>
        <li>
          <p>Буфер обмена: onCopy, onCut, onPaste</p>
        </li>
        <li>
          <p>
            Составление/ввод данных: onCompositionEnd, onCompositionStart,
            onCompositionUpdate
          </p>
        </li>
        <li>
          <p>Клавиатура: onKeyDown, onKeyPress, onKeyUp</p>
        </li>
        <li>
          <p>Фокусировка: onFocus, onBlur</p>
        </li>
        <li>
          <p>Форма: onChange, onInput, onSubmit</p>
        </li>
        <li>
          <p>Выделение: onSelect</p>
        </li>
        <li>
          <p>Касание: onTouchCancel, onTouchEnd, onTouchMove, onTouchStart</p>
        </li>
        <li>
          <p>UI: onScroll</p>
        </li>
        <li>
          <p>Колёсико мышки: onWheel</p>
        </li>
        <li>
          <p>Изображение: onLoad, onError</p>
        </li>
        <li>
          <p>
            Анимация: onAnimationStart, onAnimationEnd, onAnimationIteration
          </p>
        </li>
        <li>
          <p>Переход: onTransitionEnd</p>
        </li>
      </ul>
      <p>
        В React нельзя предотвратить обработчик события по умолчанию, вернув
        false. Нужно явно вызвать preventDefault.
      </p>
      <CardWithCode codeString={codeTwo} />
    </div>
  );
};
