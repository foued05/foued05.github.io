var i = 0;
var j=0;
var tab =['Full-Stack Web Developer', 'Software Engineer Student'];
var txt = tab[0];
var speed = 85;
document.getElementById("point").innerHTML = '';

function typeWriter() {
    if (i < txt.length + 13 || true) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    if(i>txt.length + 13){
        i=0;
        j++;
        if(j==2)
            j=0;
        txt=tab[j];
        document.getElementById("demo").innerHTML = "";
    }
    if(i>txt.length+2 && i<txt.length+14){
        document.getElementById("point").innerHTML = '.';
    }else{
        document.getElementById("point").innerHTML = '';
    }       
}