function onloadFunc() {
    console.log("Test");
    loadData("/Agumon");
}

const BASE_URL = "https://remotestorage-1c70a-default-rtdb.europe-west1.firebasedatabase.app/";

// Wenn wir bei Firebase auf die Daten zugreifen wollen, müssen wir immer ".json" dazu schreiben
// Bei einem Objekt, kann man noch einen Pfad dazugeben um weiter rein zu kommen ("path")
// hier steht (path=""), dass wenn kein Parameter übergeben ist, automatisch leer weitergegeben wird
    async function loadData(path="") {
        let response = await fetch(BASE_URL + path + ".json");
        let responseToJSON = await response.json();
        console.log(responseToJSON);
    }