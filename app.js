const storage = window.localStorage;

storage.setItem("1", 18);
storage.setItem("2", "Material");
storage.setItem("3", "Black");

document.getElementById("result").innerHTML = "Thème " +
    storage.getItem("3") + ", type " + storage.getItem("2") +
    " et police de caractère " + storage.getItem("1") + " px <br>";

storage.setItem("1", 78);
storage.setItem("2", "Bidule");
storage.setItem("3", "Rouge fushia");

document.getElementById("result").innerHTML += "Thème " +
    storage.getItem("3") + ", type " + storage.getItem("2") +
    " et police de caractère " + storage.getItem("1") + " px <br>";


let tableau = ["truc", "bidule", "chaise", "table"];
let fauxTableau = tableau.join(",");
storage.setItem("tableau", fauxTableau);

let decryptage = storage.getItem("tableau").split(",");
console.log(decryptage);