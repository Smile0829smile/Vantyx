//if your in this page
//Please go out!!!
//This is personal space so if you go in without warrent you will be sued!

//hamtlag gishuud
var group_members = [];
//Gishuudiig oruulav
//1
group_members.push("Sara");
//2
group_members.push("Nyxia");
//3
group_members.push("Mina");

//gishuudiin nas
var members_age = [];
//1
members_age.push("16");
//2
members_age.push("16");
//3
members_age.push("16");

//huwiin medeelel heseg
var info = [];
//1
info.push("<input type='button' id='idSaraBtn' value='мэдээлэл' onClick='sara()'>");
//2
info.push("<input type='button' id='idNyxiaBtn' value='мэдээлэл' onClick='nyxia()'>");
//3
info.push("<input type='button' id='idMinaBtn' value='мэдээлэл' onClick='mina()'>");

//main functions
function homePage(){
    var output = "<br>Vantyx хамтлаг нь Asteria entertainment-ийн анхны хамтлаг ба<br>";
    output+= "2026-04-17 ны өдөр нээгдсэн байна";

    output+="<br><br>";
    idDivDisplay.innerHTML = output;
}

//gishuud button
function gishuud(){
    var output = "<br>";
    output += "<table><tr><th>Нэр</th><th>Нас</th><th>Тухай</th></tr>"

    for(i=0; i<=group_members.length-1; i++){
        output+= "<tr><td>"+group_members[i]+"</td><td>"+members_age[i]+"</td><td>"+info[i]+"</td></tr>"
    }

    output += "</table><br>"

    idDivDisplay.innerHTML = output;
}

//gishuud info
//sara
function sara(){
    var output = "";
    output += "<input type='button' value='butsah' onClick='gishuud()'><br><br>"
    output += "<img src='profile_picture.jpg' height='150px'><br><div class='Div3'>";
    output += "нэр: Sara<br>"
    output += "нас: 16<br>"
    output += "хүйс: эмэгтэй<br>"
    output += "something..... <br>"
    output += "uur yu yu oruulah talaar sain bodooroi, ene deer bga zurgiin ornd henii zurg oruulahaa bas yvuulaarai"

    output+="</div>"
    idDivDisplay.innerHTML = output;
}

//nyxia
function nyxia(){
    var output = "";
    output += "<input type='button' value='butsah' onClick='gishuud()'><br><br>"
    output += "<img src='profile_picture.jpg' height='150px'><br><div class='Div3'>";
    output += "нэр: Nyxia<br>"
    output += "нас: 16<br>"
    output += "хүйс: эмэгтэй<br>"
    output += "something..... <br>"
    output += "uur yu yu oruulah talaar sain bodooroi, ene deer bga zurgiin ornd henii zurg oruulahaa bas yvuulaarai"

    output+="</div>"
    idDivDisplay.innerHTML = output;
}

//mina
function mina(){
    var output = "";
    output += "<input type='button' value='butsah' onClick='gishuud()'><br><br>"
    output += "<img src='mina.jpg' height='150px'><br><div class='Div3'>";
    output += "нэр: Mina<br>"
    output += "нас: 16<br>"
    output += "хүйс: эмэгтэй<br>"
    output += "something..... <br>"
    output += "uur yu yu oruulah talaar sain bodooroi"

    output+="</div><br><br>"
    idDivDisplay.innerHTML = output;
}



//other button
function other(){
    idDivDisplay.innerHTML = "End yu bairluulah talaar sain bodj bgd heleerei"
}