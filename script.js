function onloadFunc() {
    console.log("Test");
    loadData();
}

const BASE_URL = "https://remotestorage-1c70a-default-rtdb.europe-west1.firebasedatabase.app/";

// Wenn wir bei Firebase auf die Daten zugreifen wollen, müssen wir immer ".json" dazu schreiben
    async function loadData() {
        let response = await fetch(BASE_URL + ".json");
        let responseToJSON = await response.json();
        console.log(responseToJSON);
    }