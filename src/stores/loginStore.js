import {observable, action} from 'mobx';

class LoginStore {

    @observable logined = false;

    @action login() {
        this.logined = true;
    }

    @action logout() {
        this.logined = false;
    }
}

export default new LoginStore();