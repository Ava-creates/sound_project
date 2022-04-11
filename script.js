var audio = document.getElementById("a");
document.getElementById("crow").onclick = function() {f1()}  ;


//start playing audio when user clicks on the crow image
function f1()
{
    audio.play();
    audio.ontimeupdate = function() {myFunction()};
}





audio.addEventListener("timeupdate",myFunction);


//checking the time of the audio and scrolling the page automatically based on time
function myFunction() {

      var c = audio.currentTime;

      if(0<=c && c<11)
      {
        var element = document.getElementById("start"); //specific time sections correspond to a certain panel
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

//flashlight mouse pointer: checks where the cursor is and applies the cursor styling
function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)
