class Jumbotron{
    constructor(container) {
        $(function() {
            container.addClass("tagline");
        });
    }
    start(taglines){
        $(function() {
            $(window).width() < 740 || ($(".tagline").addClass("typing"), setTimeout(function() {
                function i(t, r, u) {
                    r < t.length ? (n.show().html(t.substring(0, r + 1)), setTimeout(function() {
                        i(t, r + 1, u)
                    }, 100)) : typeof u == "function" && setTimeout(u, 2e3)
                }
                function r(t, i) {
                    t > 0 ? (n.html(n.html().substring(0, t - 1)), setTimeout(function() {
                        r(t - 1, i)
                    }, 100)) : typeof i == "function" && setTimeout(i, 100)
                }
                function u(f) {
                    r(n.html().length, function() {
                        i(t[f], 0, function() {
                            u((f + 1) % t.length)
                        })
                    })
                }
                var t = taglines,
                    n = $(".tagline");
                u(0)
            }, 3e3))
        });
    }
}