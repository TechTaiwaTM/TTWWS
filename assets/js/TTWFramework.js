function TTWFramework(){
    typeWriter();
    // centralize();
    MutationObserver(
        centralize()
    );
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
    var CLobjh = document.getElementsByClassName('center-h');
    for(i=0; i < CLobjh.length; i++){
        CLobjh[i].style.display = "inline-flex";
        CLobjh[i].style.position = "relative";
        CLobjh[i].style.left = "calc(50% - " + CLobjh[i].clientWidth + "px / 2)";
    }
    var CLobjw = document.getElementsByClassName('center-w');
    for(i=0; i < CLobjw.length; i++){
        CLobjw[i].style.display = "inline-flex";
        CLobjw[i].style.position = "relative";
        CLobjw[i].style.top = "calc(50% - " + CLobjw[i].clientHeight + "px / 2)";
    }
}