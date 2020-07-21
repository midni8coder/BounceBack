const refresher = document.getElementById('refresher-live-stories');
refresher.addEventListener('ionRefresh', () => {
  setTimeout(() => {
    alert("refresher-live-stories");
    refresher.complete();
  }, 2000);
});

const refresher1 = document.getElementById('refresher-my-stories');
refresher1.addEventListener('ionRefresh', () => {
  setTimeout(() => {
    alert("refresher-my-stories");
    refresher1.complete();
  }, 2000);
});

const refresher2 = document.getElementById('refresher-account');
refresher2.addEventListener('ionRefresh', () => {
  setTimeout(() => {
    alert("refresher-account");
    refresher2.complete();
  }, 2000);
});
const refresher3 = document.getElementById('refresher-messagebox');
refresher3.addEventListener('ionRefresh', () => {
  setTimeout(() => {
    alert("refresher-messagebox");
    refresher3.complete();
  }, 2000);
});

function likePost(control) {
  var colorValue = control.getAttribute("color") == "danger" ? "" : "danger";
  control.setAttribute("color", colorValue);
  var count = parseInt(control.childNodes[3].innerText);
  var count = colorValue === "danger" ? count + 1 : count - 1;
  control.childNodes[3].innerText = count;
}
function savePost(control) {
  var colorValue = control.getAttribute("color") == "primary" ? "" : "primary";
  control.setAttribute("color", colorValue);
  control.childNodes[3].innerText = control.childNodes[3].innerText === "Save" ? "Saved" : "Save";
}
function followPost(control) {
  var controlText = $(control).text() === "Follow" ? "Following" : "Follow";
  $(control).text(controlText);
}