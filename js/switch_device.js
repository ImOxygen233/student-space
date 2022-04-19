var $ = mdui.$;
let d = document;
var template;

document.title = "请稍后...";

fetch("json/template.json")
    .then(e => {
        return e.json();
    })
    .then(e => {
        template = e;
    });

$("body").addClass("mdui-theme-primary-green mdui-theme-accent-red");
let s = d.createElement("script");
s.setAttribute("src", "js/index.js");
// "js/index" + (navigator.vendor == "Apple Computer, Inc." ? "_ios" : "") + (location.host.includes("dev") ? "" : ".min" + ".js")
d.body.appendChild(s);
if (navigator.userAgent.includes("Android")) {
    $(".widgets").removeClass("mdui-hidden");
}
if (location.host.includes("dev")) {
    /*网页调试工具*/
    /*eruda网页调试控制台*/
    var script = document.createElement('script');
    script.src = "dev/vconsole.min.js";
    document.body.appendChild(script);
    script.onload = () => {
        // eruda.init()
        var _onload = window["onload"];
        var $vConsole = new VConsole;
    };
    // let vs = d.createElement("script");
    // vs.setAttribute("src", "dev/vconsole.min.js");
    // d.body.appendChild(vs);
}
s = undefined;
d = undefined;