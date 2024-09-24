// 'bp' is basic pay   'np' is netpay  'hr' is house rent
let bp = parseFloat(prompt("Enter basic pay:"));

if (bp > 0 && bp < 30000) {
    var hr = bp * (30 / 100);
    var np = bp + hr;
    console.log("The net pay is:", np, "\nHouse rent is:", hr);
} else if (bp >= 30000 && bp <= 50000) {
    hr = bp * (35 / 100);
    np = bp + hr;
    console.log("The net pay is:", np, "\nHouse rent is:", hr);
} else if (bp > 50000) {
    hr = bp * (40 / 100);
    np = bp + hr;
    console.log("The net pay is:", np, "\nHouse rent is:", hr);
} else {
    console.log("Enter valid basic pay again");
}
