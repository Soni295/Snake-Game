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
    var _a;
    var head = __assign({}, state.body[0]);
    var cases = (_a = {},
        _a[actionTypes.ARROWUP] = function () { return 1; },
        _a[actionTypes.ARROWDOWN] = function () { return 1; },
        _a[actionTypes.ARROWLEFT] = function () { return 1; },
        _a[actionTypes.ARROWRIGHT] = function () {
            head.x += scale;
            return __assign(__assign({}, state), { body: [head] });
        },
        _a);
    /*
    switch(state.direction){
      case actionTypes.ARROWUP:
        return {...state}
      case actionTypes.ARROWDOWN:
        return {...state}
      case actionTypes.ARROWLEFT:
        return {...state}
      case actionTypes.ARROWRIGHT:
        head.x += scale
        return {...state, body:[head]}
      default:
        return {...state}
    }
    */
    return cases[state.direction]();
};
