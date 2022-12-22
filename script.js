window.addEventListener("DOMContentLoaded", () => {
  function hideDisplay() {
    const selectordisplay = document.querySelectorAll(".set-none");

    selectordisplay.forEach((selectordisplay) => {
      // if (selectordisplay.classList.contains("-set-none")) {
      selectordisplay.classList.remove("--visible");
      selectordisplay.classList.add("--none");
      // }
    });
  }

  function unHideDisplayMobile() {
    const selectordisplay2 = document.querySelectorAll(".set-visible");

    selectordisplay2.forEach((selectordisplay2) => {
      selectordisplay2.classList.remove("--none");
      selectordisplay2.classList.add("--visible");
    });
  }

  ////////////////////////////////////////////////////////////////

  function unHideDisplay() {
    const selectordisplay3 = document.querySelectorAll(".set-none");

    selectordisplay3.forEach((selectordisplay3) => {
      // if (selectordisplay.classList.contains("-set-none")) {
      selectordisplay3.classList.remove("--none");
      selectordisplay3.classList.add("--visible");
      // }
    });
  }

  function hideDisplayMobile() {
    const selectordisplay4 = document.querySelectorAll(".set-visible");

    selectordisplay4.forEach((selectordisplay4) => {
      selectordisplay4.classList.remove("--visible");
      selectordisplay4.classList.add("--none");
    });
  }

  function buildLayout() {
    const tamanhoDaTela = window.innerWidth;

    if (tamanhoDaTela < 801) {
      hideDisplay();
      unHideDisplayMobile();
    } else {
      unHideDisplay();
      hideDisplayMobile();
    }
  }

  window.addEventListener("resize", buildLayout);

  buildLayout();

  ////////////////////////////////////////////////////////////////

  const trigger = document.getElementById("trigger");
  trigger.addEventListener("click", handleSidebar);

  const trigger2 = document.getElementById("trigger2");
  trigger2.addEventListener("click", handleSidebar);

  const sidebar = document.querySelector(".sidebar");

  function adad() {
    const trigger1 = document.querySelector(".trigger");
    const closeTrigger = trigger1.classList.contains("trigger-open");

    if (closeTrigger) {
      trigger1.classList.remove("trigger-open");
      trigger1.classList.add("trigger-none");
    } else {
      trigger1.classList.add("trigger-open");
      trigger1.classList.remove("trigger-none");
    }
  }

  function adad2() {
    const trigger2 = document.querySelector(".trigger2");
    const closeTrigger = trigger2.classList.contains("trigger-none");

    if (closeTrigger) {
      trigger2.classList.add("trigger-open");
      trigger2.classList.remove("trigger-none");
    } else {
      trigger2.classList.remove("trigger-open");
      trigger2.classList.add("trigger-none");
    }
  }

  function close() {
    sidebar.classList.remove("nav-open");
    adad();
    adad2();
  }

  function open() {
    sidebar.classList.add("nav-open");

    adad();
    adad2();
  }

  function handleSidebar() {
    console.log("abc");
    const sidebarIsClose = sidebar.classList.contains("nav-open");

    if (sidebarIsClose) {
      close();
    } else {
      open();
    }
  }
});
