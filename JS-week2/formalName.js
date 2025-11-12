
 let male = 'male';
 let female = 'female';
 
function getFullname(firstName, surname, useFormalName = false, gender){
   
    if(useFormalName && gender == male ){
        return 'Lord' + ' ' + firstName+ ' ' + surname;
    }
    else if(useFormalName && gender == female){
        return 'Lady' + ' ' + firstName+ ' ' + surname;
    }
    else 
        return firstName + ' '+ surname;
    }

 console.log(getFullname('David','Bekham', true, male));

 console.log(getFullname('Babi','Charlton', false , male))

 console.log(getFullname('Natasha','Roman', true, female))

 console.log(getFullname('Emilia','Watson', false ,female))

