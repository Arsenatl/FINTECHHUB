window.addEventListener("load", function (e) {
  // courses tabs ******
  let courseButon = document.querySelectorAll(".courseButon button");
  let tabsContent = document.querySelectorAll(".tabsContainer .tabsContent");
  courseButon.forEach((tabs, index) => {
    tabs.addEventListener("click", function () {
      tabsContent.forEach((content) => {
        content.classList.remove("active");
      });
      courseButon.forEach((tab) => {
        tab.classList.remove("active");
      });
      tabsContent[index].classList.add("active");
      courseButon[index].classList.add("active");
    });
  });

  $(".click").click(function (e) {
    $(this).next().slideToggle();
    $(this).parent().find(".fa-angle-up").toggleClass("activeDropdown");
  });

  // $(".click").click(function () {
  //   $(this).parent().find(' .parent').slideToggle()
  //   // $(this).parent().find('.FAQ .parent').slideToggle()
  //   // this.css({ "rotate": "180deg", "transition": "1s" })
  // });

  // courses tabs ******
  // fintech input search filter
  var fintech = [
    "fhtml",
    "fcss",
    "ffront",
    "fsayt",
    "freact",
    "fjs",
    "ffigma",
    "fbootstrap",
    "fjquery",
    "findex",
    "bpyton",
    "bbackend",
    "bpostgresql",
  ];
  // navbar search filter js 👇
  var inpNav = document.querySelector(".search .middleInp input");
  inpNav.addEventListener("input", function () {
    $("#filter button").remove();
    var filter = this.value.toLocaleLowerCase();
    if (/^ *$/.test(inpNav.value)) {
      $("#filter button").remove();
    } else {
      for (i = 0; i < fintech.length; i++) {
        var front = fintech[i].toLocaleLowerCase();
        if (front.indexOf(filter) != -1 && fintech[i][0] == "f") {
          $("#filter").append(
            `<button>${fintech[i].slice(1, fintech[i].length)}</button>`
          );
        }
      }
    }
  });
  $(".search .searchClick").fadeOut(0);
  $("#filter").fadeOut(1);
  $(".search .middleSearch").click(function () {
    $(".navBlur").css("filter", "blur(17px");
    $(".search .closeClick").fadeOut(1, () => {
      $(".search .searchClick").fadeIn(1000);
    });
    $(".search").css({ position: "fixed" });
    $("#filter").fadeIn(1);
    $("#filter").css("left", "28%");
    inpNav.value = "";
    $("#filter button").remove();
  });
  $(".search .searchInpClose").click(function () {
    $(".navBlur").css("filter", "unset");
    $(".search").css({ position: "unset" });
    $(".search .searchClick").fadeOut(1, () => {
      $(".search .closeClick").fadeIn(1000);
    });
    $("#filter").fadeOut(1);
    inpNav.value = "";
    $("#filter button").remove();
  });
  $(".navBlur").click(function () {
    $(".navBlur").css("filter", "unset");
    $(".search").css({ position: "unset" });
    $(".search .searchClick").fadeOut(1, () => {
      $(".search .closeClick").fadeIn(1000);
    });
    $("#filter").fadeOut(1);
    inpNav.value = "";
    $("#filter button").remove();
  });

  // Media navMenu
  var inpMedia = document.querySelector(".mediaInp input");
  inpMedia.addEventListener("input", function () {
    $("#filter button").remove();
    var filter = this.value.toLocaleLowerCase();
    if (/^ *$/.test(inpMedia.value)) {
      $("#filter button").remove();
    } else {
      for (i = 0; i < fintech.length; i++) {
        var front = fintech[i].toLocaleLowerCase();
        if (front.indexOf(filter) != -1 && fintech[i][0] == "f") {
          $("#filter").append(
            `<button>${fintech[i].slice(1, fintech[i].length)}</button>`
          );
        }
      }
    }
  });
  $(".media .mediaClickClose").fadeOut(0);
  $("#filter").fadeOut(1);
  $(".media .mediaSearch").click(function () {
    $(".navBlur").css("filter", "blur(17px");
    $(".media .mediaClickSearch").fadeOut(1, () => {
      $(".media .mediaClickClose").fadeIn(1000);
    });
    $(".media").css({ position: "fixed" });
    $("#filter").fadeIn(1);
    $("#filter").css("left", "30px");
    $("#filter button").remove();
    inpMedia.value = "";
  });
  $(".media .mediaInpClose").click(function () {
    $(".navBlur").css("filter", "unset");
    $(".media").css({ position: "unset" });
    $(".media .mediaClickClose").fadeOut(1, () => {
      $(".media .mediaClickSearch").fadeIn(1000);
    });
    $("#filter button").remove();
    inpMedia.value = "";
  });
  $(".navBlur").click(function () {
    $(".navBlur").css("filter", "unset");
    $(".media").css({ position: "unset" });
    $(".media .mediaClickClose").fadeOut(1, () => {
      $(".media .mediaClickSearch").fadeIn(1000);
    });
    $("#filter button").remove();
    inpMedia.value = "";
  });
  // Media navMenu
  // navbar search filter js ☝️
  //  button scroll register 👇
  var $registerBtn = $(".registerBtn");
  function scrollInterView(top) {
    var scrollInter = document.querySelector(".contact");
    scrollInter.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }
  $registerBtn.click(function () {
    scrollInterView();
  });
  //  button scroll register ☝️
  // students play pause video button👇
  let videos = this.document.querySelector(".videos");
  let blurVideo = this.document.querySelector(".blurVido");
  let vid1 = document.querySelectorAll(".vid1");
  let blurName = this.document.querySelector(".blur-name");
  let blurCourse = this.document.querySelector(".blur-course");
  vid1.forEach((element, index) => {
    element.addEventListener("click", function (e) {
      blurName.textContent = e.target.dataset.name;
      blurCourse.textContent = e.target.dataset.course;
      videos.style.display = "block";
      blurVideo.src = e.target.getAttribute("src");
      blurVideo.play();
    });
  });
  blurVideo.addEventListener("click", function () {
    videos.style.display = "none";
    blurVideo.pause();
  });
  // students play pause video  button☝️
  // register users 👇
  var my_button = document.getElementById("my_button");
  my_button.addEventListener("click", function () {
    function validateForm() {
      var name = document.forms["myForm"]["name"].value;
      var phone = document.forms["myForm"]["phone"].value;
      var phoneRegex = /^\d{9}$/;
      if (name == "" || phone == "") {
        alert("Ism va telefon raqami to'ldirilishi kerak");
        return false;
      }
      if (!phone.match(phoneRegex)) {
        alert("Telefon raqami 12 ta raqamdan iborat bo'lishi kerak");
        return false;
      }
    }
    validateForm();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    console.log("Name: " + name);
    console.log("Phone: " + phone);
    var data = {
      first_name: name,
      phone_number: "+998" + phone,
    };
    fetch("http://backend.notiqlik-markazi.uz/api/v1/register/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .finally(() => {
        document.getElementById("phone").value = "";
        document.getElementById("name").value = "";
      });
  });
  var phoneInput = document.getElementById("phone");
  phoneInput.addEventListener("input", function (event) {
    var currentValue = event.target.value;
    var formattedValue = currentValue.replace(/\D/g, "");
    event.target.value = formattedValue;
  });
  // register users ☝️
  let input = document.querySelector("#phone");
  // console.log(input);
  let iti = intlTelInput(input);
  intlTelInputGlobals.loadUtils(
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/15.0.1/js/utils.js"
  );

  intlTelInput(input, {
    initialCountry: "uz",
    separateDialCode: true,
    nationalMode: false,
    onlyCountries: ["uz"],
  });
  let countryData = window.intlTelInputGlobals.getCountryData();
  // console.log(countryData);
  $("#phone").focusout(function (e, countryData) {
    let phone_number = $("#phone").val();
    phone_number = iti.getNumber(intlTelInputUtils.numberFormat.E164);
    // console.log(phone_number);
  });
  // register IntTelInput ☝️
  // wthUs *****
  $(".circlePart").click(function () {
    if ($(".textOne").attr("data-id") == "one") {
      $(".textOne")
        .removeAttr("data-id")
        .fadeOut(400, () => {
          $(".textTwo").attr("data-id", "two").fadeIn(400);
          $(".withUs .circlePart .circleTitleOne").removeClass(
            "circleTitleActive"
          );
          $(".withUs .circlePart .circleTitleTwo").addClass(
            "circleTitleActive"
          );
          $(".withUs .circlePart").css({
            borderRightColor: "blue",
            transition: "2s",
          });
        });
    } else if ($(".textTwo").attr("data-id") == "two") {
      $(".textTwo")
        .removeAttr("data-id")
        .fadeOut(400, () => {
          $(".textThree").attr("data-id", "three").fadeIn(400);
          $(".withUs .circlePart .circleTitleTwo").removeClass(
            "circleTitleActive"
          );
          $(".withUs .circlePart .circleTitleThree").addClass(
            "circleTitleActive"
          );
          $(".withUs .circlePart").css({
            borderBottomColor: "blue",
            transition: "2s",
          });
        });
    } else if ($(".textThree").attr("data-id") == "three") {
      $(".textThree")
        .removeAttr("data-id")
        .fadeOut(400, () => {
          $(".textFour").attr("data-id", "four").fadeIn(400);
          $(".withUs .circlePart .circleTitleThree").removeClass(
            "circleTitleActive"
          );
          $(".withUs .circlePart .circleTitleFour").addClass(
            "circleTitleActive"
          );
          $(".withUs .circlePart").css({
            borderLeftColor: "blue",
            transition: "2s",
          });
        });
    } else {
      $(".textFour")
        .removeAttr("data-id")
        .fadeOut(400, () => {
          $(".textOne").attr("data-id", "one").fadeIn(400);
          $(".withUs .circlePart .circleTitleFour").removeClass(
            "circleTitleActive"
          );
          $(".withUs .circlePart .circleTitleOne").addClass(
            "circleTitleActive"
          );
        });
      $(".withUs .circlePart").css({
        border: "1px solid #d6d6d6",
        borderTopColor: " blue",
        transition: "2s",
      });
    }
  });
  // horizantal *************
  var vwWidth = window.innerWidth;
  var controller = new ScrollMagic.Controller();
  //scene 1
  //for parallax scroll
  var parallaxScrolling = new TimelineMax().to(".div1", 1, {
    y: 100,
    ease: Power1.easeOut,
  });

  new ScrollMagic.Scene({
    triggerElement: ".div1",
    duration: "100%",
    offset: 0,
    triggerHook: 0,
  })
    .setTween(parallaxScrolling)
    .addTo(controller);

  //scene 2 with horizontal scroll
  //for horizontal scrolling
  var horizontalSlide = new TimelineMax()
    .to(".div2", 0.2, { x: 0, ease: Power1.easeOut })
    .to(".div2", 1, { x: -vwWidth, ease: Power1.easeOut })
    .to(".div2", 0.2, { x: -vwWidth, ease: Power1.easeOut })
    .to(".div2", 1, { x: -2 * vwWidth, ease: Power1.easeOut })
    .to(".div2", 0.2, { x: -2 * vwWidth, ease: Power1.easeOut });
  new ScrollMagic.Scene({
    triggerElement: ".div2",
    duration: "350%",
    offset: 0,
    triggerHook: -0.02,
  })
    .setPin(".div2")
    .setTween(horizontalSlide)
    .addTo(controller);
});
// rotate img ****
var element = $("#logo");
var offsetTop = element.offset().top;
// console.log(offsetTop);
// $(window).scroll(function () {
//   // var theta = ($(window).scrollTop() / 500) % Math.PI;
//   $("#logo").css({ transform: "rotate(0deg)", transition: "15s" });
// });

var image = document.querySelector("#logos");
var rotateAngle = 12;
window.addEventListener("scroll", function () {
  var rect = image.getBoundingClientRect();
  var topOffset = rect.top;
  var windowHeight = window.innerHeight;
  var scrollPercentage = topOffset / windowHeight;
  var rotation = rotateAngle * scrollPercentage;
  image.style.transform = "rotate(" + rotation + "deg)";
});
var rect = image.getBoundingClientRect();
console.log(window.innerHeight);
if (rect.bottom > 0 && rect.top < window.innerHeight) {
  console.log("rotatte ishlaid");
  image.style.transform = "rotate(0)";
}

// });
// rotate img ****
