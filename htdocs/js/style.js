$(function(){

btnClick();
bntVari();
chkSub();
inpSub();

// ボタンクリック
function btnClick() {
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
};

// ボタン 変数
function bntVari(){
    var btnB = $('.btn-b'); // $btnB としなくてよい
    btnB.find($('.is-btn-b-default')).on('click',  function(){
        $(this).parent().next().children().toggleClass('is-btn-b-appear');
    });
};

// チェックボックス/サブミットボタン
function chkSub(){
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
};

// インプット/サブミットボタン
function inpSub(){
	var btnMail = $('#is-btn-d-mail');
	var btnSubmit = $('#is-btn-d-submit');
	if(btnMail.val().length == 0){ // inputに何も入力がなければSUBMITは押せない
		btnSubmit.prop('disabled', true);
	}
	btnMail.on('keydown keyup keypress change', function(){
		if($(this).val().length > 0){
			btnSubmit.prop('disabled', false);
		} else {
			btnSubmit.prop('disabled', true);
		}
	});
};

});
