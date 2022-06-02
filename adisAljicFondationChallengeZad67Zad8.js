/*
Pretpostaviti da # predstavlja tipku BACKSPACE koja se pritisne. Napišite funkciju
koja pretvara string koji sadrži # u string bez #.
PRIMJERI:
erase("he##l#hel#llo") ➞ "hello"
erase("major# spar##ks") ➞ "majo spks"
erase("si###t boy") ➞ "t boy"
erase("####") ➞ "" */
///---

const findString = (string) => {
let word = [];
    for (let i = 0; i < string.length; i++) {
        word.push(string[i])   
    }
    for (let i = 0; i < word.length; i++) {
        
        if (word[i] == ("#")) 
        // if (word.includes("#")) 
        {
            let A = word.splice(word.indexOf("#")-1,1,"")
            let b = word.splice(word.indexOf("#"),1,"")
            
        }
    }
    return word
}
console.log(findString("he##l#hel#llo"))
