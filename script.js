var adding1 = document.getElementById("add1");
var adding2 = document.getElementById("add2");
var whole1 = document.getElementById("result1");
function add()
{
    var adding1value = Number(adding1.value);
    var adding2value = Number(adding2.value);
    var totaladd = adding1value+adding2value;
    whole1.textContent = totaladd;
}

var subtract1 = document.getElementById("sub1");
var subtract2 = document.getElementById("sub2");
var whole2 = document.getElementById("result2");
function sub()
{
    var subtract1value = Number(subtract1.value);
    var subtract2value = Number(subtract2.value);
    var totalsub = subtract1value-subtract2value;
    whole2.textContent = totalsub;
}

var mutliply1 = document.getElementById("mul1");
var mutliply2 = document.getElementById("mul2");
var whole3 = document.getElementById("result3");
function mul()
{
    var mutliply1value = Number(mutliply1.value);
    var mutliply2value = Number(mutliply2.value);
    var totalmul = mutliply1value*mutliply2value;
    whole3.textContent = totalmul;
}

var divide1 = document.getElementById("div1");
var divide2 = document.getElementById("div2");
var whole4 = document.getElementById("result4");
function div()
{
    var divide1value = Number(divide1.value);
    var divide2value = Number(divide2.value);
    var totaldiv = divide1value/divide2value;
    whole4.textContent = totaldiv;
}