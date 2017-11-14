function TTWFramework(){
    typeWriter();
    centralize();
}

function typeWriter(){
    var TWDB = [];
    var TWobj = document.getElementsByClassName('typeWriter');
    function TWwrite(obj, id){
        if(TWDB[id][0] <= TWDB[id][1].length){
            obj.innerHTML += TWDB[id][1].charAt(TWDB[id][0]);
            TWDB[id][0]++;
            setTimeout(function(){TWwrite(obj,id)},  TWDB[id][2]);
        }
    }
    for(i=0; i < TWobj.length; i++){
        TWDB.push([0, TWobj[i].textContent, 25]);
        console.log(TWDB);
        TWobj[i].innerHTML = "";
        function TWsetTimeoutB(a, b){
            setTimeout(function(){TWwrite(a,b)}, 0);
        }
        TWsetTimeoutB(TWobj[i], i);
        if(TWobj[i].attributes.typeWriterDelay){
            TWDB[i][2] = TWobj[i].attributes.typeWriterDelay.value;
        }
    }
}

function centralize(){
    var CLobj = document.getElementsByClassName('centralize');
    for(i=0; i < CLobj.length; i++){
        CLobj[i].style.display = "inline-flex";
        CLobj[i].style.position = "relative";
        CLobj[i].style.left = "calc(50% - " + CLobj[i].clientWidth + "px / 2)";
    }
}