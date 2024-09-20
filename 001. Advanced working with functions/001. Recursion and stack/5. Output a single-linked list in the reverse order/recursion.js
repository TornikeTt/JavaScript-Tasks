let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};

function reverse(list) {
    if (list === null) {
        return;
    } else {
        reverse(list.next);
        console.log(list.value);
    }
}

reverse(list);
