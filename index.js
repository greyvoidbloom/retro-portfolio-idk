const about_me_logo = document.getElementsByClassName('about-me-clickable')[0]
const about_me_section = document.getElementById('about-me-screen')
const about_me_closing = document.getElementsByClassName('about-me-close')[0]

const project_folder_logo = document.getElementsByClassName('project-folder-clickable')[0]
const project_section = document.getElementById('project-window')
const project_closing = document.getElementsByClassName('project-close')[0]

const terminal_logo = document.getElementsByClassName('terminal-sim')[0]
const terminal_section = document.getElementById('terminal-window')
const terminal_closer = document.getElementsByClassName('terminal-close')[0]
//element deactivation commands
deactivate(about_me_logo,about_me_section);
deactivate(about_me_closing,about_me_section);

deactivate(project_folder_logo,project_section);
deactivate(project_closing,project_section);

deactivate(terminal_logo,terminal_section);
deactivate(terminal_closer,terminal_section)

// element deactivation
function deactivate(host_element, target_element) {
  host_element.addEventListener('click', () => {
    target_element.classList.toggle('deactive')
  })
}
// Make the DIV element draggable:
dragElement(project_section);
dragElement(about_me_section);
dragElement(terminal_section);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "-header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}