document.getElementById("crow").onclick = function() {f1()}  ;

function f1()
{
    console.log("sdg");
    window.scrollTo({
        top:(window.innerHeight)*1 ,

        behavior: 'smooth'
      });
}

function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)
