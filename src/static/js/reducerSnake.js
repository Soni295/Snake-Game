var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export var actionTypes = {
    ARROWUP: 'ArrowUP',
    ARROWDOWN: 'ArrowDown',
    ARROWLEFT: 'ArrowLeft',
    ARROWRIGHT: 'ArrowRight'
};
export var reducer = function (state, scale) {
    var head = __assign({}, state.body[0]);
    switch (state.direction) {
        case actionTypes.ARROWUP:
            return __assign({}, state);
        case actionTypes.ARROWDOWN:
            return __assign({}, state);
        case actionTypes.ARROWLEFT:
            return __assign({}, state);
        case actionTypes.ARROWRIGHT:
            head.x += scale;
            return __assign(__assign({}, state), { body: [head] });
        default:
            return __assign({}, state);
    }
};
