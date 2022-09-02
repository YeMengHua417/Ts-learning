// 定义食物类Food
class Food {
    private element: HTMLElement;
    constructor(){
        this.element = document.getElementById('food')!;
    }

    get X() {
        return this.element.offsetLeft;
    }

    get Y(){
        return this.element.offsetTop;
    }
    change(){
        // Math.random()*29 0-29之间的数字四舍五入取整
        let top = Math.round(Math.random()*29)*10;
        let left = Math.round(Math.random()*29)*10;
        this.element.style.left = left +'px';
        this.element.style.top = top + 'px';

    }
}

export default Food;

