var audio = document.getElementById("a");
document.getElementById("crow").onclick = function() {f1()}  ;


function f1()
{

    audio.play();
    /*
    window.scrollTo({
        top:(window.innerHeight)*1 ,

        behavior: 'smooth'
      });


      setTimeout(function(){
        window.scrollBy(0, 1000);
      }, 30000);
      setTimeout(function(){
        window.scrollBy(0, 1000);
      }, 75000);
      setTimeout(function(){
        window.scrollBy(0, 1000);
      }, 80000);
      setTimeout(function(){
        window.scrollBy(0, 1000);
      }, 55000);
      setTimeout(function(){
        window.scrollBy(0, 1000);
      }, 65000);
      setTimeout(function(){
        window.scrollBy(0, 1000);
      }, 75000);

      */

      audio.ontimeupdate = function() {myFunction()};



}

document.documentElement.onclick = torch;
//var c = audio.currentTime;
//audio.timeupdate = function() {myFunction()};
audio.addEventListener("timeupdate",myFunction);

function torch() {
  var v=document.documentElement;
  document.documentElement.style.background = "radial-gradient(circle 20vmax at var(--cursorX) var(--cursorY),rgba(0,0,0,0) 0%,gba(0,0,0,.5) 80%,rgba(0,0,0,.95) 100%)";
  }

function myFunction() {

      var c = audio.currentTime;


      if(0<=c && c<11)
      {
        var element = document.getElementById("start");
        element.scrollIntoView();
      }

      else if(11<=c && c<=47)
      {
        console.log("second part");

        var element = document.getElementById("n1");
        element.scrollIntoView();

      }

      else if(47<c && c<80)
      {
        console.log("third part");
        var element = document.getElementById("n2");
        element.scrollIntoView();

      }

      else if(80<=c && c<95){
        console.log("4th part");
        var element = document.getElementById("d1");
        element.scrollIntoView();
      }

      else if(95<=c && c<=139)

      {
        console.log("fifth part");
        var element = document.getElementById("basement");
        element.scrollIntoView();

      }

      else if(139<c && c<=175)
      {
        var element = document.getElementById("campus");
        element.scrollIntoView();
      }

      else if(175<c && c<=189)
      {
        var element = document.getElementById("campus2");
        element.scrollIntoView();
      }

      else if(189<=c && c<=audio.endTime)
      {
        var element = document.getElementById("n3");
        element.scrollIntoView();

        if(c==audio.endTime)
        {
          audio.pause();

        }
      }

      else
      {
        var element = document.getElementById("n3");
        element.scrollIntoView();
      }
  }
function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)

/*
setTimeout(function(){
  window.scrollBy(0, 1000);
}, 10000);
setTimeout(function(){
  window.scrollBy(0, 1000);
}, 35000);
setTimeout(function(){
  window.scrollBy(0, 1000);
}, 45000);
setTimeout(function(){
  window.scrollBy(0, 1000);
}, 55000);
setTimeout(function(){
  window.scrollBy(0, 1000);
}, 65000);
setTimeout(function(){
  window.scrollBy(0, 1000);
}, 75000);
*/
