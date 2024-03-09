
// for(i = 0; i < 10; i++){
//     console.log(i); 
//     if(i == 4){
//         break;
//     }
// }



var items = ['bottle', 'mouse', 'sunglass', 'pen', ' notebook'];

for(i = 0; i < items.length; i++){
    var item = items[i];
    
    if(item == "pen"){
        break;
    }
    console.log(item);
}