const form = document.getElementById("form");

function encrypt(word, key) {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (typeof key !== "number") throw new Error("provide a number")
    if (key > alphabets.length) throw new Error("Key cannot be greater than 26");
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
    }
    let encryptedWord = "";
    for (let i = 0; i < word.length; i++) {
        const current = word[i]
        const index = initializer.indexOf(current.toUpperCase())
        const found = sub_initializer[index]
        encryptedWord = encryptedWord + found;
    }
    return encryptedWord;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.msg.value.toUpperCase();
    const key = parseInt(form.key.value);
    try {
        const allWords = message.split(" ");
        const response = allWords.map((item) => encrypt(item, key));
        const encrypted = document.getElementById("encrypted");
        encrypted.value = response.join(" ");
    } 
    catch (error) {
        alert(error.message)
    }
});