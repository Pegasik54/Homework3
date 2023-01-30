// Задание 1

let i = 0;
while (i < 2) {
    console.log(`Привет`);
    i++;
}

// Задание 2

let q =1;
while (q <= 5) {
    console.log(q);
    q++;
}


// Задание 3


let y =7;
while (y >= 7 && y <=22) {
    console.log(y);
    y++;
}


// Задание 4

let obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}
for (let nameWorker in obj) {
    console.log(`${nameWorker} - зарплата ${obj[nameWorker]} долларов.`);
}


// Задание 5

let n =1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(`Получилось число ${n}`);
console.log(`Количество интеграций ${num}`);

// Задание 6

let firstFriday = 6;
for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}