function f() {
    console.log("Hello!");
}

Function.prototype.defer = function (value) {
    setTimeout(this, value);
};

f.defer(1000); // shows "Hello!" after 1 second
