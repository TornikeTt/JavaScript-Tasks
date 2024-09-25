function askPassword(ok, fail) {
    let password = "rockstar";
    if (password == "rockstar") {
        ok();
    } else {
        fail();
    }
}

let user = {
    name: "John",

    login(result) {
        console.log(this.name + (result ? " logged in" : " failed to log in"));
    },
};

let ok = user.login.bind(user, true);
let fail = user.login.bind(user, false);

askPassword(ok, fail);
