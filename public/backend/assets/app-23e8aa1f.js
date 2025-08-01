(function() {
    function l() {
        document.getElementById("loader").classList.add("!hidden")
    }
    window.addEventListener("load", l),
    document.getElementById("year").innerHTML = new Date().getFullYear(),
    Waves.attach(".btn-wave", ["waves-light"]),
    Waves.init();
    var o = document.getElementById("sidebar-scroll");
    new SimpleBar(o,{
        autoHide: !0
    });
    var o = document.getElementById("header-notification-scroll");
    new SimpleBar(o,{
        autoHide: !0
    });
    var m = document.getElementById("header-shortcut-scroll");
    new SimpleBar(m,{
        autoHide: !0
    }),
    document.addEventListener("DOMContentLoaded", function() {
        var e = document.querySelectorAll("[data-trigger]");
        for (let n = 0; n < e.length; ++n) {
            var t = e[n];
            new Choices(t,{
                allowHTML: !0,
                placeholderValue: "This is a placeholder set in the config",
                searchPlaceholderValue: "Search"
            })
        }
    });
    let a = ".box";
    document.querySelectorAll(".box-remove").forEach(e => {
        e.addEventListener("click", function(t) {
            return t.preventDefault(),
            this.closest(a).remove(),
            !1
        })
    }
    ),
    document.querySelectorAll(".box-fullscreen").forEach(e => {
        e.addEventListener("click", function(t) {
            let r = this.closest(a);
            return r.classList.toggle("box-fullscreen"),
            r.classList.remove("box-collapsed"),
            t.preventDefault(),
            !1
        })
    }
    );
    const c = document.querySelector(".scrollToTop")
      , s = document.documentElement;
    window.onscroll = () => {
        s.scrollHeight - s.clientHeight,
        window.scrollY > 100 ? c.style.display = "flex" : c.style.display = "none"
    }
    ,
    c.onclick = () => {
        window.scrollTo(0, 0)
    }
    ,
    document.querySelectorAll(".header-remove-btn").forEach( (e, t) => {
        e.addEventListener("click", n => {
            n.preventDefault(),
            n.stopPropagation(),
            e.parentNode.remove(),
            document.getElementById("allCartsContainer") && (document.getElementById("cart-data").innerText = `${document.getElementById("allCartsContainer").children.length} Items`,
            document.getElementById("cart-data2").innerText = `${document.getElementById("allCartsContainer").children.length}`),
            document.getElementById("allNotifyContainer") && (document.getElementById("notify-data").innerText = `${document.getElementById("allNotifyContainer").children.length}`),
            document.getElementById("allCartsContainer") && document.getElementById("allCartsContainer").children.length == 0 && (document.getElementById("allCartsContainer").parentNode.innerHTML = `
                        <div class="p-6 pb-8 text-center">
                          <div>
                            <i class="ri ri-shopping-cart-2-line leading-none text-4xl avatar avatar-lg bg-primary/20 text-primary rounded-full p-3 align-middle flex justify-center mx-auto"></i>
                            <div class="mt-5">
                              <p class="text-base font-semibold text-gray-800 dark:text-white mb-1">
                                No Items In Cart
                              </p>
                              <p class="text-xs text-gray-500 dark:text-white/70">
                              When you have Items added here , they will appear here.
                              </p>
                              <a href="javascript:void(0);" class="m-0 ti-btn ti-btn-primary py-1 mt-5"><i class="ti ti-arrow-right text-base leading-none"></i>Continue Shopping</a>
                            </div>
                          </div>
                        </div>`),
            document.getElementById("allNotifyContainer") && document.getElementById("allNotifyContainer").children.length == 0 && (document.getElementById("allNotifyContainer").parentNode.innerHTML = `
          <div class="p-6 pb-8 text-center">
          <div>
            <i class="ri ri-notification-off-line leading-none text-4xl avatar avatar-lg bg-secondary/20 text-secondary rounded-full p-3 align-middle flex justify-center mx-auto"></i>
            <div class="mt-5">
              <p class="text-base font-semibold text-gray-800 dark:text-white mb-1">
                No Notifications Found
              </p>
              <p class="text-xs text-gray-500 dark:text-white/70">
              When you have notifications added here , they will appear here.
              </p>
            </div>
          </div>
        </div>`)
        }
        )
    }
    ),
    document.querySelectorAll(".dropdown-item-close").forEach(e => {
        e.addEventListener("click", t => {
            if (t.preventDefault(),
            t.stopPropagation(),
            e.parentNode.parentNode.parentNode.parentNode.parentNode.remove(),
            document.getElementById("cart-data").innerText = `${document.querySelectorAll(".dropdown-item-close").length} Items`,
            document.getElementById("cart-icon-badge").innerText = `${document.querySelectorAll(".dropdown-item-close").length}`,
            console.log(document.getElementById("header-cart-items-scroll").children.length),
            document.querySelectorAll(".dropdown-item-close").length == 0) {
                let n = document.querySelector(".empty-header-item")
                  , r = document.querySelector(".empty-item");
                n.classList.add("hidden"),
                r.classList.remove("hidden")
            }
        }
        )
    }
    ),
    document.querySelectorAll(".dropdown-item-close1").forEach(e => {
        e.addEventListener("click", t => {
            if (t.preventDefault(),
            t.stopPropagation(),
            e.parentNode.parentNode.parentNode.parentNode.remove(),
            document.getElementById("notifiation-data").innerText = `${document.querySelectorAll(".dropdown-item-close1").length} Unread`,
            document.getElementById("notification-icon-badge").innerText = `${document.querySelectorAll(".dropdown-item-close1").length}`,
            document.querySelectorAll(".dropdown-item-close1").length == 0) {
                let n = document.querySelector(".empty-header-item1")
                  , r = document.querySelector(".empty-item1");
                n.classList.add("hidden"),
                r.classList.remove("hidden")
            }
        }
        )
    }
    )
}
)();
var d = document.documentElement;
window.openFullscreen = function() {
    !document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ? u() : h()
}
;
function u() {
    d.requestFullscreen ? d.requestFullscreen() : d.webkitRequestFullscreen ? d.webkitRequestFullscreen() : d.msRequestFullscreen && d.msRequestFullscreen()
}
function h() {
    document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
}
document.addEventListener("fullscreenchange", y);
function y() {
    let l = document.querySelector(".full-screen-open")
      , o = document.querySelector(".full-screen-close");
    document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? (o.classList.add("block"),
    o.classList.remove("hidden"),
    l.classList.add("hidden")) : (o.classList.remove("block"),
    l.classList.remove("hidden"),
    o.classList.add("hidden"),
    l.classList.add("block"))
}
var i = 1;
setInterval( () => {
    document.querySelectorAll(".count-up").forEach(l => {
        l.getAttribute("data-count") >= i && (i = i + 1,
        l.innerText = i)
    }
    )
}
, 10);
