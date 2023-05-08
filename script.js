// let soru = {
//     soruMetni : "hangisi javascript paket yönetim uygulamasıdır ?",
//     cevapSecenekleri : {
//         a: "Node.js",
//         b: "Typescript",
//         c: "Npm"
//     },
//     dogruCevap: "c",
//     cevabiKontrolEt: function(cevap){
//         return cevap === this.dogruCevap;
//     }
// }

function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

let soru1 = new Soru("hangisi javascript paket yönetim uygulamasıdır ?", {a:"node.js", b:"typescript", c:"npm"}, "c");
let soru2 = new Soru("hangisi .net paket yönetim uygulamasıdır ?", {a:"node.js", b:"nuget", c:"npm"}, "b");

console.log(soru1.soruMetni);
console.log(soru1.cevapSecenekleri);
console.log(soru1.dogruCevap);

console.log(soru2.soruMetni);
console.log(soru2.cevapSecenekleri);
console.log(soru2.dogruCevap);