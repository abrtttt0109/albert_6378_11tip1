const readline= require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukkan Indeks awal: ", (startIndex) => {
        rl.question ("masukkan indeks akhir: ", (endIndex) => {
            //Konversi nilai indeks ke tipe number 
            startIndex = Number(startIndex);
            endIndex= Number(endIndex);
            //Gunakan method slice untuk mengambil substring dari startindex hingga endindex    
            const slicedSubstring =kalimat.slice(startIndex, endIndex);
            console.log(`Hasil slice dari indeks ${startIndex} hingga ${endIndex}: ${slicedSubstring}
            `);
            rl.close();
        })
    })
})