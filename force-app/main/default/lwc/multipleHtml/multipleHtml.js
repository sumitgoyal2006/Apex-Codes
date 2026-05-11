import { LightningElement } from 'lwc';
import multipleHtml from './multipleHtml.html';
import login from './login.html';
import newUserRegister from './newUserRegister.html';

export default class MultipleHtml extends LightningElement {

    displayPage=multipleHtml;
    render()
    {
        return this.displayPage;
    }

    handleClick()
    {
        this.displayPage=login;
    }

    handleNewUserClick()
    {
        this.displayPage=newUserRegister;
    }
    handleBackClick()
    {
        this.displayPage=multipleHtml;
    }
}