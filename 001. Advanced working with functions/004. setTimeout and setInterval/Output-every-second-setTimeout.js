function printNumbers(from, to) {
    let time = () => {
        console.log(from);

        if (from === to) {
            clearTimeout(timer);
        } else {
            from++;
            timer = setTimeout(time, 1000);
        }
    };

    let timer = setTimeout(time, 1000);
}

printNumbers(0, 10);
