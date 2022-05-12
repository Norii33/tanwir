let stars = document.getElementById('stars');
let moon =  document.getElementById('moon');
let mountains3 =  document.getElementById('mountains3');
let mountains4 =  document.getElementById('mountains4');
let river =  document.getElementById('river');
let baot6 =  document.getElementById('baot');
let tanwir =  document.querySelector('.tanwir');
let main2 = document.querySelector('.main');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    baot6.style.top = value + 'px';
    baot6.style.left = value * 3 + 'px';
    tanwir.style.fontSize = value + 'px';
     if(scrollY >= 63){
        tanwir.style.fontSize = 63 + 'px';
        tanwir.style.position = 'fixed';
        if(scrollY >= 390){
        tanwir.style.display = 'none';
        }else{
        tanwir.style.display = 'block';
        } 
        if(scrollY >= 120){
            main2.style.backgraound = 'linear-gradient(#3080c2,#10001f)'
        }else{
            main2.style.backgraound = 'linear-gradient(#200016,#10001f)'
     }
    }
    
    }
