import { Counter } from './Counter.js';
import { ID } from './id.js';
var Status = /** @class */ (function () {
    function Status() {
        this.score = new Counter(ID.SCORE);
        this.speed = new Counter(ID.SPEED);
    }
    return Status;
}());
export { Status };
