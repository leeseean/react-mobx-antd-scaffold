import {observable, action} from 'mobx'

class CountStore {

    @observable startNum = 10

    @action
    inc() { this.startNum += 1 }

    @action
    dec() { this.startNum -= 1}

    @action
    reset() { this.startNum = 0 }
}

export default  new CountStore();