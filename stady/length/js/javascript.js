function Word(str) {
    var str;
    var strArr = str.split(' ');
    console.log(strArr);
    var longestWord = 1;
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i].length > longestWord) {
            longestWord = strArr[i].length;
        }
    }
    alert(longestWord);
         return longestWord;
}
    Word("Все значения в JavaScript, за исключением null и undefined, содержат    набор вспомогательных функций и значений, доступных «через точку». Такие функции называют «методами», а значения – «свойствами». Здесь мы рассмотрим основы использования свойств и методов.");