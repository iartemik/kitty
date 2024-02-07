class Cat
{
    constructor (food) {
        this.food = food;
    }

    feed() {
        this.food += 10;
        if (this.food >= 100) {
            this.food = 100;
        }
        document.querySelector('.food').textContent = cat.food;
    }

    checkState() {
        if (cat.food > 70) {
            document.querySelector('.pet_img').src = "./cat_happy1.png"
        } else if (cat.food > 30) {
            document.querySelector('.pet_img').src = "./cat_happy.png"
        } else if (cat.food < 30 && cat.food > 0) {
            document.querySelector('.pet_img').src = "./cat_sad.png"
        } else if (cat.food == 0) {
            document.querySelector('.pet_img').src = "./rip.jpg"
        }
        document.querySelector('.food').textContent = cat.food;
    }
}

const cat = new Cat(100);

let intervalId = setInterval(() => {
    cat.food -= Math.floor(Math.random() * (40-5) - 1);
    if (cat.food <= 0) {
        cat.food = 0;
        setInterval(intervalId);
    }
    cat.checkState()
}, 3000);

let btn = document.querySelector('.feed');
btn.addEventListener('click', () => {
    cat.feed();
});

