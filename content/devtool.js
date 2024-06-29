!function() {
  function detectDevTool() {
    const threshold = 160; // Um valor maior que o intervalo normal de tempo de execução de código.
    const checkInterval = 1000; // Intervalo em que verificamos a presença das DevTools.

    let lastCheck = Date.now();

    function check() {
      const currentTime = Date.now();
      if (currentTime - lastCheck > threshold) {
        alert("DevTools detectado!");
      }
      lastCheck = currentTime;
      setTimeout(check, checkInterval);
    }

    check();
  }

  if(window.attachEvent) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        detectDevTool();
      window.attachEvent('onresize', detectDevTool);
      window.attachEvent('onmousemove', detectDevTool);
      window.attachEvent('onfocus', detectDevTool);
      window.attachEvent('onblur', detectDevTool);
    } else {
        setTimeout(arguments.callee, 0);
    }
  } else {
    window.addEventListener('load', detectDevTool);
    window.addEventListener('resize', detectDevTool);
    window.addEventListener('mousemove', detectDevTool);
    window.addEventListener('focus', detectDevTool);
    window.addEventListener('blur', detectDevTool);
  }
}();
