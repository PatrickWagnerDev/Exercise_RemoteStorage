function onloadFunc() {
    console.log("Test");
    loadData();
}

const BASE_URL = "https://remotestorage-1c70a-default-rtdb.europe-west1.firebasedatabase.app/";

async function loadData() {
    let response = await fetch(BASE_URL + ".json");
    let responseToJSON = response.json();
    console.log(response);
}