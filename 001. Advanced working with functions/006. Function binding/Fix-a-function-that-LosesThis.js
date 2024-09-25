function askPassword(ok, fail) {
    let password = console.log("Password?", "");
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: "John",

    loginOk() {
        console.log(`${this.name} logged in`);
    },

    loginFail() {
        console.log(`${this.name} failed to log in`);
    },
};

let loginOk = user.loginOk(user);
let loginFail = user.loginFail(user);

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
