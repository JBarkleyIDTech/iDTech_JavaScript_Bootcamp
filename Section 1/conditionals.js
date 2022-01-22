/*
This is a multiline comment
== equal to
=== equal value and type
!= not equal
!== not equal value or type
> greater than
< less thasn
>= greater than or equal to
<= less than or equal to
&& AND (9 > 3) && (7 < 8)
|| OR (9 > 3) || (9 < 8)
! NOT !(1 > 3)
*/
//This is a single line comment
let age = 12;
if(age >= 5 && age < 12){
    console.log("You must be in elementary school!");
}
else if(age >= 12 && age < 15){
    console.log("You must be in middle school!");
}
else if(age >= 15 && age < 19){
    console.log("You must be in high school!");
}
else{
    console.log("You are either too old or too young to be in school");
}