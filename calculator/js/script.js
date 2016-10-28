while (true) {var num1= prompt ("Введите первое число?")
     if(num1 !=='' && !isNaN(num1) && num1 !== null)
         break;}
while (true) {
     var num2 = prompt ("Введите второе число?")
         if(num2 !=='' && !isNaN(num2) && num2 !== null)
             break;
    }
while (true) {
     var z = prompt ('Bведите 1- что бы "+"" ; 2-что бы "-" ; 3- что бы "*" ; 4 - что бы "/"' )
        if (num2 === '0' && z==='4') 
            alert("На ноль делить нельзя");
             break;
        if (z === '1' && z === '2' && z === '3' && z === '4')
             break;
}
var result;
switch(+z) 
{
   case 1 : result = +num1 + +num2;
                break;
   case 2 : result = num1 - num2;
                break;
   case 3 : result = num1 * num2;
                break;
   default : result = num1 / num2;
               break;
}
alert(result);