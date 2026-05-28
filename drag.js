dragElement(document.getElementById("inventory"));
dragElement(document.getElementById("map"));

function dragElement(elmnt) {
     elmnt.style.position = "fixed";
     elmnt.style.cursor = "grab"
     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
     elmnt.onmousedown = dragMouseDown;
     window.addEventListener("resize", (e) => {
          moveResize(e)
     })

     function dragMouseDown(e) {
          e.preventDefault();
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          document.onmousemove = elementDrag;
     }

     function elementDrag(e) {
          e.preventDefault();
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          let rect = elmnt.getBoundingClientRect()
          if (window.innerWidth >= rect.right - pos1 && elmnt.offsetLeft - pos1 >= 0 && window.innerHeight >= rect.bottom - pos2 && elmnt.offsetTop - pos2 >= 0) {
               elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
               elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
               elmnt.style.cursor = "grabbing"
          }
     }

     function moveResize(e) {
          let rect = elmnt.getBoundingClientRect()
          if (rect.right >= window.innerWidth || rect.bottom >= window.innerHeight) {
               elmnt.style.top = window.innerHeight - (rect.top - rect.bottom) + "px"
               elmnt.style.left = window.innerWidth - (rect.left - rect.right) + "px"
          }//FIXME
     }

     function closeDragElement() {
          document.onmouseup = null;
          document.onmousemove = null;
          elmnt.style.cursor = "grab"
     }
}