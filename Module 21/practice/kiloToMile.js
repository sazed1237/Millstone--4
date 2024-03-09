function kiloToMiles(mails){
    var kilomiters = mails * 1.60934;
    console.log(kilomiters);

    return kilomiters;
}



const mails = 5;
const kilomiter = kiloToMiles(mails).toFixed(2);

const fixedNumber = parseFloat(kilomiter);
console.log(fixedNumber);