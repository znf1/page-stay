var nav_left = document.getElementsByClassName('nav-left')[0];
var nav_list = nav_left.getElementsByTagName('li');
// var nav_a = document.getElementsByClassName('nav-left-fir');
var ti_left = document.getElementsByClassName('ti-left')[0];
var ti_li = ti_left.getElementsByTagName('li');
var gold = ti_left.getElementsByTagName('li');
var sadan = ti_left.getElementsByTagName('li');
// var style = document.getElementsByClassName('style');
// var styletwo = ti_left.getElementsByTagName('sli');
// console.log(ti_li.length);
var index = 0;
var indexx = 0;
// var stylength = styletwo.length;
// console.log(stylength);
var lilength = nav_list.length;
var tilength = ti_li.length;
console.log(tilength);


for (var i =0; i < tilength; i++){
    (function (m) {
        ti_li[m].onclick = function () {
            console.log(tilength);

            indexx = m;
            // styletwo.className = "ti-left-ti";
            ti_left.getElementsByClassName('gold')[0].className = "sadan";
            (ti_li[indexx]).className = 'gold';

        }
    })(i)
}


for(var i = 0; i < lilength; i++){
    (function (j) {
        nav_list[j].onclick = function () {
            index = j;
            // nav_list.className = "";
            // console.log(nav_list.length);
            // console.log("hahha");
            nav_left.getElementsByClassName('nav-left-fir')[0].className = "";
            (nav_list[index]).className = 'nav-left-fir';
        }
    })(i)
}