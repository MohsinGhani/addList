/**
 * Mobile
 */
document.write('<h1> Mobile Advertise List </h1>');
var Mobile = (function () {
    function Mobile(brand, modle, price) {
        this.brand = brand;
        this.modle = modle;
        this.price = price;
        document.write('<br> Brand: ' + brand + '<br>Modle: ' + modle + '<br>Price: Rs.' + price + '<hr>');
    }
    return Mobile;
}());
var add1 = new Mobile('Nokia', 'N75', 2500);
var add2 = new Mobile('Sumsung', 'Galaxy X', 5000);
var add3 = new Mobile('Sony Ericsson', 'K330', 3500);
var add4 = new Mobile('Motorola', 'Motorola DROID Turbo XT1254', 6750);
var add5 = new Mobile('Huawei', 'P8max', 4500);
