// Funzione per salvare nel localStorage
function save() {
    let name = document.getElementById('nameInput').value;
    nameInput.value=''
    localStorage.setItem('nome', name);
    showSavedName();
}

// Funzione per rimuovere il nome da localStorage
function deleteName() {
    localStorage.removeItem('nome');
    showSavedName();
}

// Funzione per mostrare il nome precedentemente salvato
function showSavedName() {
    let addedName = localStorage.getItem('nome');
    let savedNameElement = document.getElementById('savedName');
    savedNameElement.innerHTML = addedName;
}

// Funzione per gestire il contatore di tempo
function refreshCounter() {
    let counterElement = document.getElementById('counter');
    let count = sessionStorage.getItem('countSec');
    count++;
    sessionStorage.setItem('countSec', count);
    counterElement.innerHTML = count;
}

// Aggiorna il contatore ogni secondo
setInterval(refreshCounter, 1000);

// Mostra il nome precedentemente salvato all'avvio della pagina
showSavedName();