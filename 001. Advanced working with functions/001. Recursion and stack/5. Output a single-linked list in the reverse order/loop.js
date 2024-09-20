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
    let curr = list;
    let arr = [];

    while (curr) {
        arr.push(curr.value);
        curr = curr.next;
    }

    return arr.reverse();
}

reverse(list);
