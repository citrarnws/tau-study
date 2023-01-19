const cookie = {
    nama: "Coco Chips",
    isGlutenFree: false,
    eatCookie: function () {
        console.log("I am eating " + this.nama);
    }
};

cookie.nama = "Coco Chips";
cookie.isGlutenFree = "true";
//console.log(cookie["*Yummy"]);
//console.log(cookie);
cookie.eatCookie();

class Cookie {
    constructor(nama, isGlutenFree) {
        this.nama = nama;
        this.isGlutenFree = isGlutenFree;
    }
}
const myCookie = new Cookie("Iced Chocolate", false);

console.log(myCookie);