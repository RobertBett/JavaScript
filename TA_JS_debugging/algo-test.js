var a= [1,2,3,4,5,6]
  function algo(arr){
    console.log(arr.length)
    for(var i= 0; i< arr.length; i++){
        if ([i]==3 || [i]==2){
            console.log("found it")
            continue
        } return i;
    }return -1
  }
  algo(a);