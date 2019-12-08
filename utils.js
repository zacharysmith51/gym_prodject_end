function requiredArg() {
  throw new Error('you are missing a argument that is required');
}
function playAudio(url, autoplay = false, controls = false, loop = false, id, deleteme = true, parent_id) {
  var audio = document.createElement('audio');
  audio.src = url;
  if (controls != true) {
    audio.style.display = "none"; //added to fix ios issue
  }
  audio.autoplay = false; //avoid the user has not interacted with your page issue
  audio.controls = true;
  if (deleteme == true) {
    audio.onended = function () {
      audio.remove(); //remove after playing to clean the Dom
    };
  }
  if (parent_id == undefined) {
    document.body.appendChild(audio);
  } else {
    document.getElementById(parent_id).appendChild(audio);
  }
}
function Hide(id) {
  $("#" + id).hide(1000);
}
function Show(id) {
  $("#" + id).show(1000);
}

