/**
 * Created by nhatnk on 4/26/17.
 */
const DEFAULT_SPEED = 20;


function Hero(image, top, left, width, height) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;

    this.getHeroElement = function () {
        return '<img width="' + this.width + '"' +
            ' height="' + this.height + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    };

    this.moveRight = function () {
        this.left += 20
    };
    this.moveLeft = function () {
        this.left -= 20
    };
    this.moveUp = function () {
        this.top -= 20
    };
    this.moveDown = function () {
        this.top += 20
    };
}

const HERO_START_VERTICAL = 80;
const HERO_START_HORIZONTAL = 30;
let hero = new Hero('img/nyan-cat.gif', HERO_START_VERTICAL, HERO_START_HORIZONTAL, 272 * 0.8, 168 * 0.8);
let collisionHorizontal = window.innerWidth - hero.width;
let collisionVertical = window.innerHeight - hero.height;

function start() {
    if (hero.left < collisionHorizontal &&
        hero.top <= HERO_START_VERTICAL) {
        hero.moveRight();
    } else if (hero.left > collisionHorizontal &&
        hero.top < collisionVertical) {
        hero.moveDown();
    } else if (hero.left > HERO_START_HORIZONTAL && hero.top > collisionVertical) {
        hero.moveLeft();
    } else {
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 50)
}

function init() {
    document.getElementById('game').innerHTML = hero.getHeroElement();
    console.log(window.innerWidth - hero.width);
}
