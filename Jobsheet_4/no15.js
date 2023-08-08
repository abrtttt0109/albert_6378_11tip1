const readline= require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukkan kata yang ingin anda cari: ", (kataCari) =>{
        //Gunakan method IndexOf    
        const indeksKata = kalimat.indexOf(kataCari);
        if (indeksKata !== -1) {
            console.log(`Kata '${kataCari}' ditemukan pada indeks ke: ${indeksKata}`);
        } else{
            console.log(`Kata '${kataCari}' tidak ditemukan di dalam kalimat.`)
        }
        rl.close();
    });
});