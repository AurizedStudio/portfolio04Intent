$(function(){
    var $btnClick = $(".is-btn-a-click");
    $btnClick.click(function(){
//        e.stopPropagation();
        alert("click(fn)");
        return false; // リンクの遷移+イベント伝播 をキャンセル　e.preventDefault(); でリンクの遷移をキャンセル
    });
});
$(function(){
    var $btn = $(".btn-a");
//    var btnon = $(".is-btn-a-on");
    $btn.on('click', '.is-btn-a-on', function(e){
        e.stopPropagation(); // イベント伝播をキャンセル
        alert('on click selector');
    });
});
