let arr = [];
for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * 100));
}
console.log(arr);

let num = parseInt(prompt("Inserisci un numero: "));
let found = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
        found = true;
        break;
    }
}
if (found) {
        let h1 = document.createElement("h1");
    h1.textContent = `Il numero è stato trovato nella posizione ${arr.indexOf(num)}`;
    h1.style.color = "green";
    document.body.appendChild(h1);
}   else {
    let h1 = document.createElement("h1");
    h1.textContent = "Il numero non è stato trovato";
    h1.style.color = "red";
    document.body.appendChild(h1);
}
