import {makeAutoObservable} from "mobx";

class Counter {
    count = 0;
    timer = 60;
    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        this.count = this.count + 1
        console.log('plus: ', this.count);
    }

    decrement() {
        this.count = this.count - 1
        console.log('minus: ', this.count);
    }

    get myTotal() {
        return 'Count + timer = ' + this.timer + this.count
    }
}

export default new Counter();