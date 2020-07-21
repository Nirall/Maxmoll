class Counter {
    constructor(obj, oldPrice, price) {
        this.obj = obj;
        this.quanElem = this.obj.find(".cardProd__counter__quantity");
        this.oldPriceElem = this.obj.parent().find(".cardProd__textBlock__oldPrice");
        this.priceElem = this.obj.parent().find(".cardProd__textBlock__price");
        this.quan = 1;
        this.oldPrice = oldPrice;
        this.price = price;
        this.init = this.init.bind(this);
        this.init();
        this.update();
    }
    update() {
        this.quanElem.html(this.quan + "");
        this.oldPriceElem.html(this.oldPrice*this.quan + " ₽");
        this.priceElem.html(this.price*this.quan + " ₽");
    }
    init() {
        this.obj.find(".cardProd__counter__change_plus").click((e) => {
            this.quan++;
            this.update();
        });
        this.obj.find(".cardProd__counter__change_minus").click((e) => {
            if (this.quan > 1) {
                this.quan--;
            }
            this.update();
        });
    }
}

const counter1 = new Counter($("#counter1"), 15050, 4970);







