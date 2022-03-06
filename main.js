// console.log('prova')

// -----------------------------

// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// chiedere 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Successivamente assicuratevi di far comparire gli indirizzi email solamente quando sono stati tutti recuperati dal server.

// -----------------------------
// START

// console.log(axios);

axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
 .then(function (response) {
    // const result = response.data;
    console.log(response);
});