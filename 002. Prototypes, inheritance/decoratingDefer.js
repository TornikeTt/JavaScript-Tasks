function f(a, b) {
    console.log(a + b);
}

Function.prototype.defer = function (time) {
    return function wrapper(...args) {
        setTimeout(() => {
            f(args[0], args[1]);
        }, time);
    };
};

f.defer(1000)(1, 2); // shows 3 after 1 second
