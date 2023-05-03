window.addEventListener("load", function () {
  let top = document.getElementById("top");
  window.addEventListener("scroll", function () {
    top.style.transform = "rotate(" + window.pageYOffset + "deg)";
  });
  // owl carousel 👇
  $(".owl-carousel").owlCarousel({
    autoplay: false,
    autoplayTimeout: 100000,
    autoplayHoverPause: true,
    items: 3,
    loop: true,
    center: false,
    rewind: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    freeDrag: false,
    margin: 15,
    stagePadding: 0,
    merge: false,
    mergeFit: true,
    autoWidth: false,
    startPosition: 0,
    rtl: false,
    smartSpeed: 250,
    fluidSpeed: false,
    dragEndSpeed: false,
    responsive: {
      0: {
        items: 1.1,
      },
      480: {
        items: 1.3,
        margin: 10,
      },
      768: {
        items: 1.1,
        margin: 0,
      },
      992: {
        items: 1.1,
      },
      1100: {
        items: 2.1,
      },
      1440: {
        items: 2.1,
      },
      1620: {
        items: 2.1,
      },
      1920: {
        items: 2.1,
      },
    },
  });
  // owl carousel ☝️
  //text slick  👇
  var titleMain = $("#slickWrapper");
  if (titleMain.length) {
    titleMain.slick({
      autoplay: false,
      arrows: false,
      dots: false,
      slidesToShow: 3,
      centerPadding: "10px",
      draggable: false,
      infinite: true,
      pauseOnHover: false,
      swipe: false,
      touchMove: false,
      vertical: true,
      speed: 800,
      autoplaySpeed: 400,
      useTransform: true,
      cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
      adaptiveHeight: true,
      arrows: true,
    });
    $(".slick_item").each(function (index, el) {
      $("#animatedHeading").slick(
        "slickAdd",
        "<div>" + el.innerHTML + "</div>"
      );
    });
    titleMain.slick("slickPlay");
  }
  //text slick  ☝️
  // cursor mishka 👇
  var cursor = $(".cursor"),
    follower = $(".cursor-follower");
  var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;
  TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
      posX += (mouseX - posX) / 1;
      posY += (mouseY - posY) / 1;
      TweenMax.set(follower, {
        css: {
          left: posX - 30,
          top: posY - 30,
        },
      });
      TweenMax.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY,
        },
      });
    },
  });
  // document.onwheel = function (event) {
  //   console.log(event );
  // }
  $(document).on("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });
  $(".buttonBg").on("mouseenter", function () {
    cursor.removeClass("cursor");
    follower.addClass("active");
  });
  $(".buttonBg").on("mouseleave", function () {
    cursor.addClass("cursor");
    follower.removeClass("active");
  });
  $(".magnitBtn").on("mouseenter", function () {
    cursor.removeClass("cursor");
    follower.addClass("active");
  });
  $(".magnitBtn").on("mouseleave", function () {
    cursor.addClass("cursor");
    follower.removeClass("active");
  });

  $(".portfolio-item").on("mouseenter", function () {
    cursor.removeClass("cursor");
    cursor.addClass("portfolio-cursor");
    cursor.css("transition-duration", "0.5s");
    setTimeout(() => {
      cursor.css("transition-duration", "0s");
    }, 10);
    follower.addClass("active");
  });

  $(".portfolio-item").on("mouseleave", function () {
    cursor.removeClass("portfolio-cursor");
    cursor.addClass("cursor");
    follower.removeClass("active");
  });

  $(".coursesCursor").on("mouseenter", function () {
    cursor.removeClass("cursor");
    cursor.addClass("coursesCursorAnimate");
    cursor.css("transition-duration", "0.5s");
    setTimeout(() => {
      cursor.css("transition-duration", "0s");
    }, 10);
    follower.addClass("active");
  });
  $(".coursesCursor").on("mouseleave", function () {
    cursor.removeClass("coursesCursorAnimate");
    cursor.addClass("cursor");
    follower.removeClass("active");
  });

  $(".stuWorks").on("mouseenter", function () {
    cursor.removeClass("cursor");
    cursor.addClass("coursesCursorAnimate");
    cursor.css("transition-duration", "0.5s");
    setTimeout(() => {
      cursor.css("transition-duration", "0s");
    }, 10);
    follower.addClass("active");
  });
  $(".stuWorks").on("mouseleave", function () {
    cursor.removeClass("coursesCursorAnimate");
    cursor.addClass("cursor");
    follower.removeClass("active");
  });

  $(".drag_drop").on("mouseenter", function () {
    cursor.removeClass("cursor");
    cursor.addClass("drag_dropAnimate");
    cursor.css("transition-duration", "0.5s");
    setTimeout(() => {
      cursor.css("transition-duration", "0s");
    }, 10);
    follower.addClass("active");
  });
  $(".drag_drop").on("mouseleave", function () {
    cursor.removeClass("drag_dropAnimate");
    cursor.addClass("cursor");
    follower.removeClass("active");
  });
  $(".studentCursor").on("mouseenter", function () {
    cursor.removeClass("cursor");
    cursor.addClass("studentCursor_animatePlay");
    cursor.css("transition-duration", "0.5s");
    setTimeout(() => {
      cursor.css("transition-duration", "0s");
    }, 10);
    follower.addClass("active");
  });
  $(".studentCursor").on("mouseleave", function () {
    cursor.removeClass("studentCursor_animatePlay");
    cursor.addClass("cursor");
    follower.removeClass("active");
  });
  $(".blurVido").on("mouseenter", function () {
    cursor.removeClass("cursor");
    cursor.addClass("studentCursor_animatePause");
    cursor.css("transition-duration", "0.5s");
    setTimeout(() => {
      cursor.css("transition-duration", "0s");
    }, 10);
    follower.addClass("active");
  });
  $(".blurVido").on("mouseleave", function () {
    cursor.removeClass("studentCursor_animatePause");
    cursor.addClass("cursor");
    follower.removeClass("active");
  });
  $(".circlePart").on("mouseenter", function () {
    cursor.removeClass("cursor");
    cursor.addClass("wthUsCursor_animatePause");
    cursor.css("transition-duration", "0.5s");
    setTimeout(() => {
      cursor.css("transition-duration", "0s");
    }, 10);
    follower.addClass("active");
  });
  $(".circlePart").on("mouseleave", function () {
    cursor.removeClass("wthUsCursor_animatePause");
    cursor.addClass("cursor");
    follower.removeClass("active");
  });
  $(".coursesCursor").on("mouseleave", function () {
    cursor.removeClass("active");
    follower.removeClass("active");
  });
  // cursor mishka☝️
});
// magin button register 👇 ************************
var hoverMouse = function ($el) {
  $el.each(function () {
    var $self = $(this);
    var hover = false;
    var offsetHoverMax = $self.attr("offset-hover-max") || 0.7;
    var offsetHoverMin = $self.attr("offset-hover-min") || 0.5;
    var attachEventsListener = function () {
      $(window).on("mousemove", function (e) {
        //
        var hoverArea = hover ? offsetHoverMax : offsetHoverMin;
        // cursor
        var cursor = {
          x: e.clientX,
          y: e.pageY,
        };
        // size
        var width = $self.outerWidth();
        var height = $self.outerHeight();
        // position
        var offset = $self.offset();
        var elPos = {
          x: offset.left + width / 2,
          y: offset.top + height / 2,
        };
        // comparaison
        var x = cursor.x - elPos.x;
        var y = cursor.y - elPos.y;
        // dist
        var dist = Math.sqrt(x * x + y * y);
        // mutex hover
        var mutHover = false;
        // anim
        if (dist < width * hoverArea) {
          mutHover = true;
          if (!hover) {
            hover = true;
          }
          onHover(x, y);
        }
        // reset
        if (!mutHover && hover) {
          onLeave();
          hover = false;
        }
      });
    };
    var onHover = function (x, y) {
      TweenMax.to($self, 0.4, {
        x: x * 0.8,
        y: y * 0.8,
        //scale: .9,
        rotation: x * 0.05,
        ease: Power2.easeOut,
      });
    };
    var onLeave = function () {
      TweenMax.to($self, 0.7, {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        ease: Elastic.easeOut.config(1.2, 0.4),
      });
    };
    attachEventsListener();
  });
};
hoverMouse($(".magnitBtn"));

// magin button register☝️************************

// progress bar video  *-------------------
let videos = this.document.querySelector(".videos");
let blurVideo = this.document.querySelector(".blurVido");
let vid1 = document.querySelectorAll(".vid1");
let blurName = this.document.querySelector(".blur-name");
let blurCourse = this.document.querySelector(".blur-course");
let videoProgress = this.document.querySelector(".videoProgress");
let videoProgress_mobile = this.document.querySelector(".videoProgress_mobile");
vid1.forEach((element, index) => {
  element.addEventListener("click", function (e) {
    blurName.textContent = e.target.dataset.name;
    blurCourse.textContent = e.target.dataset.course;
    videos.style.display = "block";
    blurVideo.src = e.target.getAttribute("src");
    blurVideo.play();
  });
});
videoProgress.addEventListener("click", function () {
  videos.style.display = "none";
  blurVideo.pause();
});
videoProgress_mobile.addEventListener("click", function () {
  videos.style.display = "none";
  blurVideo.pause();
});
let ss = document.getElementById("ss");
let ss_mobile = document.getElementById("ss_mobile");
let myVideo = this.document.getElementById("blursVideo");
function updateClock() {
  let time = myVideo.currentTime;
  let overall = myVideo.duration;
  let o = Math.floor(overall);
  let s = Math.floor(time);
  s = s < 10 ? "0" + s : s;
  ss.setAttribute("stroke-dashoffset", 2042 - (2042 * s) / o);
  ss_mobile.setAttribute("stroke-dashoffset", 942 - (942 * s) / o);
}
myVideo.addEventListener("timeupdate", updateClock);
// progress bar video  *-------------------
