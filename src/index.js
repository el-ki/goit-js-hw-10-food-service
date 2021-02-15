import './styles.css';
// Тема
// Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.

// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
// Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.
// Для удобства хранения списка тем используй такое перечисление.

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const inputRef = document.querySelector('#theme-switch-toggle');

const savedDarkTheme = () => {
    if (localStorage.getItem('Theme') === Theme.DARK) {
        inputRef.checked = true;
        bodyRef.classList.add(`${Theme.DARK}`);
    };
};

savedDarkTheme();
    
function themeSet() {
    if (localStorage.getItem('Theme') === Theme.DARK) {
        localStorage.setItem('Theme', Theme.LIGHT);
        bodyRef.classList.remove(`${Theme.DARK}`);
        bodyRef.classList.add(`${Theme.LIGHT}`);
    }
    else {
        localStorage.setItem('Theme', Theme.DARK);
        bodyRef.classList.remove(`${Theme.LIGHT}`);
        bodyRef.classList.add(`${Theme.DARK}`);
        };
};

inputRef.addEventListener('input', () => {
    themeSet();
});







