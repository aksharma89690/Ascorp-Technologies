function showDiv(divToShow) {
    var div1Content = document.getElementById("div1Content");
    var div2Content = document.getElementById("div2Content");
    let element1 = document.getElementById("div1");
    let element2 = document.getElementById("div2");

    if (divToShow === "div1") {
      element2.classList.remove('active');
      element1.classList.add('active');
      div1Content.style.display = "block";
      div2Content.style.display = "none";
    } else if (divToShow === "div2") {
      element1.classList.remove('active');
      element2.classList.add('active');
      div1Content.style.display = "none";
      div2Content.style.display = "block";
    }
  }
  