import './styles/index.css';
import scroll from './modules/scroll';
import TypeWriter from './modules/typeWriter';
import { toggleTheme, addThemeClass } from './modules/toggleTheme';
import displayList from './modules/displayList';

const btnHamburger = document.querySelector('.fa-bars');
const btnTheme = document.querySelector('.fa-moon');

btnHamburger.addEventListener('click', displayList);
btnTheme.addEventListener('click', toggleTheme);
document.addEventListener('scroll', scroll.scrollUp);

const getBodyClass = localStorage.getItem('class-body-theme');
const getBtnClass = localStorage.getItem('class-btn-theme');

addThemeClass(getBodyClass, getBtnClass);


// init typeWriter
window.onload = function(){
    // TypeWriter fore roles.
    const txtElement = document.querySelector(".role");
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement,words,wait);
}