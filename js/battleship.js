var location1=5;
var location2=6;
var location3=7;    // расположение корабля
var guess;          // номер текущей попытки
var hits=0;         // колличество попаданий
var guesses=0;      // колличество попыток
var isSunk=false;   //  потоплен ли корабль

alert("Lets Play?");
while (isSunk==false) {
    guess=prompt("Готовься! Целься! ПЛИИИИ! (Введите позицию для стрельбы от 0 до 9):");
    if(guess<0||guess>9){
        alert("Будь точнее!");
    } else{
         guesses=guesses+1;   // проверка на точность выстрела

         if(guess==location1|| guess==location2|| guess==location3){
            alert("Попал, чертяга");
            hits=hits+1;      //проверка на попадание
            if (hits == 3) {
                 isSunk = true;
                 alert("Поздравляю Вы потопили  корабль противнка !!!!!");
             }
         }else {
            alert("Не попал.....Ы");
         }   
    }
}
var stats=" Вы потопили мой корабль с "+guesses+ "попыток, хотя мог бы и с 3 попыток. точность:" +(3/guesses);
alert(stats);
