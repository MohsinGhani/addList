/**
 * Mobile
 */
document.write('<h1> Mobile Advertise List </h1>');
class Mobile {
    brand:string;
    modle:string;
    price:number;
    constructor(brand:string, modle:string, price:number) {
        this.brand = brand;
        this.modle = modle;
        this.price = price;
document.write('<br> Brand: ' + brand + '<br>Modle: ' + modle + '<br>Price: Rs.' + price + '<hr>');
    }
}
let add1 = new Mobile('Nokia','N75',2500);
let add2 = new Mobile('Sumsung','Galaxy X',5000);
let add3 = new Mobile('Sony Ericsson','K330',3500);
let add4 = new Mobile('Motorola','Motorola DROID Turbo XT1254',6750);
let add5 = new Mobile('Huawei','P8max',4500);