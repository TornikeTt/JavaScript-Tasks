function printNumbers(from, to) {
    let timer = setInterval(() => {
        if (from === to + 1) {
            clearInterval(timer);
        } else {
            console.log(from);
        }

        ++from;
    }, 1000);
}

printNumbers(0, 10);
