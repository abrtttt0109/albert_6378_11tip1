const readline= require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kalimat pertama: ", (kalimat1) => {
    rl.question("Masukkan kalimat kedua: ", (kalimat2) =>{
        //Menggabungkan kalimat 1 dan 2 menggunaakan method concat()
        const kalimatGabungan= kalimat1.concat(kalimat2);
        console.log(`Hasil penggabungan kalimat: ${kalimatGabungan}`);
        rl.close();
    })
})