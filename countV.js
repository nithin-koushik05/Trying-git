const countV = (str) => {
    let count = 0;
    for (const val of str) {
        if (val === "a" || val === "e" || val === "i" || val === "o" || val === "u") {
            count++;
        }
    }
    return count;


};
