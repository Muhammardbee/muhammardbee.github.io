function encrypt(word, key) {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const initializer = alphabets.split("");
    let sub_initializer = "";
    for (let i = 0; i < initializer.length; i++) {
       let current = i + key;
       let currentAlphabet = initializer[current]
       if (currentAlphabet === undefined) {
        current = current - initializer.length
       }
       currentAlphabet = initializer[current]
       sub_initializer = sub_initializer + currentAlphabet;
    }console.log(sub_initializer)
    let encryptedWord = "";
    for (let i = 0; i < word.length; i++) {
        const current = word[i]
        const index = initializer.indexOf(current.toUpperCase())
        const found = sub_initializer[index]
        encryptedWord = encryptedWord + found;
    }
    return encryptedWord;
}


function main() {
    const result = encrypt("bcd", 1);
    console.log("result:", result)
}

main();