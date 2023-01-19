const cookie = {
    nama: "Coco Chips",
    isGlutenFree: false,
    "*Yummy": true
};

cookie.nama = "Coco Chips";
cookie.isGlutenFree = "true";
console.log(cookie["*Yummy"]);
console.log(cookie);