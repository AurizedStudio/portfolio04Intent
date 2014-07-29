$(function(){
    var $btnClick = $(".is-btn-a-click");
    $btnClick.click(function(){
//        e.stopPropagation();
        alert("click(fn)");
        return false;
    });
});
$(function(){
    var $btn = $(".btn-a");
//    var btnon = $(".is-btn-a-on");
    $btn.on('click', '.is-btn-a-on', function(e){
        e.stopPropagation();
        alert('on click selector');
    });
});
