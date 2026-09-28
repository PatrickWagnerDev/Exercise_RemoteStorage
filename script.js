function onloadFunc() {
    console.log("Test");
    loadData("/Agumon");
    // postData("/name", {"banana": "rama"});
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

// Mit der methode POST können wir auch etwas bei Firebase hochladen
    // async function postData(path="", data={}) {
    //     let response = await fetch(BASE_URL + path + ".json",{
    //         method: "POST",
    //         header: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data)
    //     });
    //     return responseToJSON = await response.json();
    // }

// Mit der Methode Delete können wir Elemente aus Firebase löschen
    async function deleteData(path="", data={}) {
        
    }