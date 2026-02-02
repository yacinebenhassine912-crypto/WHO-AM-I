let selectedChar = null;

document.querySelectorAll(".char-btn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".char-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedChar = btn.dataset.char;
  };
});

document.getElementById("goBtn").onclick = () => {
  const seed = document.getElementById("seedInput").value || "default";
  if (!selectedChar) return alert("Pick a character!");

  localStorage.setItem("seed", seed);
  localStorage.setItem("playerChar", selectedChar);

  window.location.href = "page2.html";
};
