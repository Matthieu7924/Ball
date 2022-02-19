'use strict'



document.addEventListener('DOMContentLoaded', function () {

    let ball = document.getElementById("ball");
    let left = 0;
    let top = 0;
    let dir = 'toright'
    let dir2 = 'totop'
    let ballwidth = 40;
    let st


    // let newpos = function () {

    //     if (dir === 'toright'){
    //         left = left + 8;
    //     }
    //     else {
    //         left = left - 8;
    //     }

    //     if (left + ballwidth >= window.innerWidth ) {
    //         dir ='toleft';}

    //     else if(left<0){
    //         dir ='toright';}

    //     ball.style.transform = `translateX(${left}px)`
    //     requestAnimationFrame(newpos);

    // }

    // let newpos2 = function () {

    //     if (dir2 === 'totop') {
    //        top = top + 8;}

    //     else {
    //         top = top - 8}

    //     if (top + ballwidth >= window.innerHeight) {
    //         dir2 ='tobottom'}

    //     else if(top<0){
    //         dir2 ='totop'}

    //     ball.style.transform = `translateY(${top}px)`
    //     requestAnimationFrame(newpos2);
    //     }



    let newpos3 = function () {

        if (dir === 'toright') {
            left = left + 8;
        }
        else {
            left = left - 8;
        }

        if (dir2 === 'totop') {
            top = top + 8;
        }
        else {
            top = top - 8
        }

        if (left + ballwidth >= window.innerWidth) {
            dir = 'toleft';
        }
        else if (left < 0) {
            dir = 'toright';
        }

        if (top + ballwidth >= window.innerHeight) {
            dir2 = 'tobottom'
        }
        else if (top < 0) {
            dir2 = 'totop'
        }


        ball.style.transform = `translate(${left}px, ${top}px)`
        st = requestAnimationFrame(newpos3);
    }

    // requestAnimationFrame(newpos);
    // requestAnimationFrame(newpos2);
    requestAnimationFrame(newpos3)

    let pause = false


    function toggle() {
        if (pause === true) {
            newpos3();
            pause = false;
        }
        else {
            window.cancelAnimationFrame(st);
            pause = true
        }
    }
    document.addEventListener('click', toggle)
    // document.addEventListener('click',toggle false)

})




