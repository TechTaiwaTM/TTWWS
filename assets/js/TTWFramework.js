function TTWFramework(){
    centralize();
    typeWriter();

    window.onresize = upResize;
}

function upResize(){
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

/*var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };*/

// var input = document.getElementById('223');
//
// var observer = new MutationObserver(function(mutations) {
//     mutations.forEach(function(mutation) {
//         console.log("hehe");
//     });
// });
//
// var config = { attributes: true, childList: true, characterData: true };
// observer.observe(input, config);