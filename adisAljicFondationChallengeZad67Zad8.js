/*
Pretpostaviti da # predstavlja tipku BACKSPACE koja se pritisne. Napišite funkciju
koja pretvara string koji sadrži # u string bez #.
PRIMJERI:
erase("he##l#hel#llo") ➞ "hello"
erase("major# spar##kss") ➞ "majo spks"
erase("si###t boy") ➞ "t boy"
erase("####") ➞ "" */


const findString = (string) => {
    let word = [];
    for (let i = 0; i < string.length; i++) {
        word.push(string[i])
    }
    while (word.includes("#")) {

        for (let i = 0; i < word.length; i++) {
            if (word[i] == "#") {
                if (i < 1) word.splice(i, 1)
                else {
                    word.splice(i, 1)
                    word.splice(i - 1, 1)
                    break;
                }
            }
            else continue
        }
    }
    return word.join("")
}
console.log(findString("si###t boy"))
