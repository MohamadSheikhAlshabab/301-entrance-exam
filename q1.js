var arra=[8,6,20,14,100,200,300,500,5000];

function greaterThan(num1,num2){
    var num1=arra;
    var num2=25;
    var maxNum=[];

   
    for (var i=0 ; i<arra.length;i++){
        if (num2>num1[i]){
           
        }
        else if  (num2<num1[i]) {
           
            maxNum.push(num1[i])
            
          
        }
    }


    console.log(arra,num2); 
    console.log('number of numbers  greater Than 25',maxNum.length);
}
greaterThan();
