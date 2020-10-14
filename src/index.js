import {NavComponent} from "./nav";
import './style.css';

const component = () => {
    const element = document.createElement('div');
    element.appendChild(NavComponent());
    element.className = 'container';
    return element;
}

document.body.appendChild(component());