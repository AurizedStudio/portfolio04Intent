// ボタンクリック
$(function(){
    var $btnClick = $(".is-btn-a-click");
    $btnClick.click(function(){
//        e.stopPropagation();
        alert("click(fn)");
        return false; // リンクの遷移+イベント伝播 をキャンセル　e.preventDefault(); でリンクの遷移をキャンセル
    });
    var $btn = $(".btn-a");
//    var btnon = $(".is-btn-a-on");
    $btn.on('click', '.is-btn-a-on', function(e){
        e.stopPropagation(); // イベント伝播をキャンセル
        alert('on click selector');
    });
});

// ボタン 変数
$(function(){
    var btnB = $('.btn-b'); // $btnB としなくよい
    btnB.find($('.is-btn-b-default')).on('click',  function(){
            $(this).parent().next().children().toggleClass('is-btn-b-appear');
        });
});

// チェックボックス/サブミットボタン
$(function(){
	var btnSubmit = $('#btn-c-submit');
	var btnCheck = $('#btn-c-check-agree');
	btnSubmit.prop('disabled', true); // 初期submitボタンをoffに
	btnCheck.on('click', function(){ // チェックボックスをクリックする
		if($(this).prop('checked') == false){
			btnSubmit.prop('disabled', true);
		} else {
			btnSubmit.prop('disabled', false);
		}
	});
});
