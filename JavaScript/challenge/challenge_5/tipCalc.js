const calcButton = document.querySelector("#calc");
const tipOutput = document.querySelector(".tip-total");
const billOutput = document.querySelector(".bill-total");
const billInput = document.querySelector("#input-bill");
const tipInput = document.querySelector("#input-tip");

// console.log(calcButton);

calcButton.addEventListener("click", function(){
    // console.log("HI");
    let billtemp = billInput.value;
    billtemp = Number(billtemp);
    console.log("bill: ",billtemp);
    let tiptemp = (tipInput.value)/100;
    tiptemp = Number(tiptemp);
    console.log("tip: ",tiptemp);
    let totaltiptemp = (tiptemp*billtemp).toFixed(2);
    totaltiptemp = Number(totaltiptemp);
    console.log("tippaid ",totaltiptemp);
    let totalbilltemp = (billtemp+totaltiptemp).toFixed(2);
    totalbilltemp = Number(totalbilltemp);
    console.log("billpaid ",totalbilltemp);

    tipOutput.innerHTML = "$"+totaltiptemp;
    billOutput.innerHTML = "$"+totalbilltemp;
})