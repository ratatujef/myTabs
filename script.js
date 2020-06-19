function myTabs(tab, tabWrapper, tabContent) {
  function hideTab(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");// Класс show берется из верстки, отвечает за видимость блока
      tabContent[i].classList.add("hide");// Класс hide берется из верстки, отвечает за скрытие блока
    }
  }
  hideTab(1);
  function showTab(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }
  tabWrapper.addEventListener("click", function (e) {
    let target = e.target;
    if (target && target.classList.contains('info-header-tab')) {//!!!!!!!!!!!передать класс заголовка табов из верстки!!!!!!!!!!!
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTab(0);
          showTab(i);
        }
      }
    }
  });
}
let tabs = document.getElementsByClassName("info-header-tab"),// класс берется из верстки, элементы табов 
  tabswrap = document.querySelector(".info-header"),// класс берется из верстки, обертка табов, для делегирования события
  tabContents = document.querySelectorAll(".info-tabcontent");// класс из верстки, Содержимое табов, контент.
