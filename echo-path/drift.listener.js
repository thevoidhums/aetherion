document.addEventListener("mousemove", function (e) {
  const x = e.clientX;
  const y = e.clientY;

  // Only trigger logic when cursor moves to lower-right quadrant
  if (x > window.innerWidth * 0.7 && y > window.innerHeight * 0.7) {
    fetch("../whisper-key.txt")
      .then(res => res.text())
      .then(data => {
        console.log("🝖 Drift Ping Received: " + data);
        document.body.setAttribute("drift-ping", "true");
      });
  }
});
