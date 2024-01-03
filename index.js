window.onload = function () {
  setTimeout(function () {
    document.getElementById("modalBackground").style.display = "block";
    document.getElementById("myModal").style.display = "block";
  }, 30000);
};

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("modalBackground").style.display = "none";
  document.getElementById("myModal").style.display = "none";
});
