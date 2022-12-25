
var div = document.createElement('div');                                                        //linked div id in the html page
div.innerHTML = `<input type ="text" id="txt">
<button type="button" onclick="foo()">SEARCH</button><br><br>
<div id = "activate"></div><br>
<div id="activate1"></div><br>
<div id="activate2"></div>`;
div.style.textAlign = "center";                                                                   //styling div in js page
document.body.append(div);                                                                      //appending div tag on body 

async function foo() {                                                                           //introducing function name
    let cc = document.getElementById("txt").value                                                //will display output in front webpage
    console.log(cc);                                                                           //display output in console page
    let res = await fetch(`https://api.covid19api.com/dayone/country/${cc}`)                  //fetching covid api and using template literal for country name             
    let result = await res.json();                                                             //getting result on json format
    console.log(result);                                                                       //display output in console page

    var index = result.length - 1;                                                               //Needed total active case so we subtracted by 1 with the length of the result
    var result1 = result[index].Active;                                                       //Taking result and var name as result1 & Active indicates the output in console page
    console.log(result1);                                                                     //output of result1 in console page
    document.getElementById("activate").innerText = `Total Active cases:${result1}`;            //output of result1 in front webpage

    var index1 = result.length - 1;                                                             //same steps applied here
    var result2 = result[index1].Deaths;
    console.log(result2);
    document.getElementById('activate1').innerText = `Total Death Cases: ${result2}`;

    var index2 = result.length - 1;
    var result3 = result[index2].Confirmed;
    console.log(result3);
    document.getElementById("activate2").innerHTML = `Total Confirmed Cases: ${result3}`;
}