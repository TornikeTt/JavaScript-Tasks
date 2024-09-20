function sum(x) {
    return function (y) {
        return x + y;
    };
}

sum(1)(2);
sum(5)(-1);
