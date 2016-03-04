// JavaScript Document
//公告文字逐渐变色特效
function getStyle( elem, name )
{
if (elem.style[name])
return elem.style[name];
else if (elem.currentStyle)
return elem.currentStyle[name];
else if (document.defaultView && document.defaultView.getComputedStyle) {
name = name.replace(/([A-Z])/g,"-$1");
name = name.toLowerCase();
var s = document.defaultView.getComputedStyle(elem,"");
return s && s.getPropertyValue(name);}
else return null;
}
(function() {
    var lb = document.getElementById("notice_s");
    if (lb) {
        var lt = lb.cloneNode(true);
        var i = 0;
        var sw = parseInt(getStyle(lb, 'width'));
        lt.setAttribute('id', lb.getAttribute('id') + '1');
        lt.className = 'comm gray';
        lb.parentNode.appendChild(lt);
        window.sliderFont = setInterval(function() {
            parseInt(getStyle(lt, 'width')) >= sw ? clearInterval(window.sliderFont) : lt.style['width'] = i++ + 'px';
        }, 10);
    }
})();

