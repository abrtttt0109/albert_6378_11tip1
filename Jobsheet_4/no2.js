// Length
const readline= require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (inputString) =>{
    //Contoh Property Length
        console.log(`Panjang Kalimat: ${inputString.length}`);
        rl.close();
})