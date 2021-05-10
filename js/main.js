// itemボタンリストの動き
$(function () {
    $('.dropdown-child').hover(function () {
        $(this).children("ul").stop().slideToggle();
    });
});


// 関数shoppingListの動き
function shoppingList() {
    $("#list").html("");
    for (let i = 0; i < localStorage.length; i++) {
        $("#list").append("<li class='list-group-item'>" + localStorage.getItem(localStorage.key(i)) + "<button class='btn_delete' onclick='deleteItem(" + localStorage.key(i) + ")'><i class='fas fa-trash-alt fa-lg fa-white'></i></button></li>");
    }

}

// ボタンを押すと保存・削除など
$(function () {
    // リストに追加する
    $("#new").on("click", function () {
        localStorage.setItem(localStorage.length.toString(), $("#memo").val());
        $("#memo").val("");
        shoppingList();
    });

    // 全部削除する
    $("#delete").on("click", function () {
        localStorage.clear();
        shoppingList();
    });

    shoppingList();
});

// ごみ箱ボタン
function deleteItem(i) {
    localStorage.removeItem(i);
    shoppingList();
}




// item定義
const vegetables = ['にんじん', 'たまねぎ', 'じゃがいも', 'なす', 'ほうれん草', 'トマト', 'バナナ']
const seasoning = ['みそ', 'しょうゆ', 'しお', 'さとう', '酒', 'みりん', 'サラダ油']
const grocery = ['牛乳', 'コーヒー', '食パン', '納豆', 'とうふ', 'ラップ', 'ゴミ袋']

// yasaiクリックするとリスト追加
function yasai_0() {
    $('#memo').val(vegetables[0]);
    $('#new').click();
}
function yasai_1() {
    $('#memo').val(vegetables[1]);
    $('#new').click();
}
function yasai_2() {
    $('#memo').val(vegetables[2]);
    $('#new').click();
}
function yasai_3() {
    $('#memo').val(vegetables[3]);
    $('#new').click();
}
function yasai_4() {
    $('#memo').val(vegetables[4]);
    $('#new').click();
}
function yasai_5() {
    $('#memo').val(vegetables[5]);
    $('#new').click();
}
function yasai_6() {
    $('#memo').val(vegetables[6]);
    $('#new').click();
}

// seasoningクリックするとリスト追加
function seasoning_0() {
    $('#memo').val(seasoning[0]);
    $('#new').click();
}
function seasoning_1() {
    $('#memo').val(seasoning[1]);
    $('#new').click();
}
function seasoning_2() {
    $('#memo').val(seasoning[2]);
    $('#new').click();
}
function seasoning_3() {
    $('#memo').val(seasoning[3]);
    $('#new').click();
}
function seasoning_4() {
    $('#memo').val(seasoning[4]);
    $('#new').click();
}
function seasoning_5() {
    $('#memo').val(seasoning[5]);
    $('#new').click();
}
function seasoning_6() {
    $('#memo').val(seasoning[6]);
    $('#new').click();
}


// groceryクリックするとリスト追加
function grocery_0() {
    $('#memo').val(grocery[0]);
    $('#new').click();
}
function grocery_1() {
    $('#memo').val(grocery[1]);
    $('#new').click();
}
function grocery_2() {
    $('#memo').val(grocery[2]);
    $('#new').click();
}
function grocery_3() {
    $('#memo').val(grocery[3]);
    $('#new').click();
}
function grocery_4() {
    $('#memo').val(grocery[4]);
    $('#new').click();
}
function grocery_5() {
    $('#memo').val(grocery[5]);
    $('#new').click();
}
function grocery_6() {
    $('#memo').val(grocery[6]);
    $('#new').click();
}









// //チェックボックスの状態を保存
// $('input[name=checkboxname]').change(function () {
//     $('input[name=checkboxname1]:checked').each(function () {
//         let v = $(this).val();
//         if ($('input[name=checkboxname]').prop("checked")) {
//             $('input[name=checkboxname]').prop("checked", false);
//         } else {
//             $('input[name=checkboxname]').prop("checked", true);
//         }
//     });
//     shoppingList();
// });



// $(function () {
    //1.Save クリックイベント
    // $('#save').on('click', function () {
    //     const title = $('#list_1').val();
    //     const text = $('#list').val();
    //     const obj = {
    //         "title": title,
    //         "title": text
    //     };
    //     const json = JSON.stringify(obj);
    //     localStorage.setItem('memo', json);
    // });



    //     //2.clear クリックイベント
    //     $('#clear').on('click', function () {
    //         localStorage.removeItem('memo');
    //         $('#input').val('');
    //         $('#text_area').val('');
    //     });



    //     //3.ページ読み込み：保存データ取得表示
    //     if (localStorage.getItem('memo')) {
    //         const json_get = localStorage.getItem('memo');
    //         const obj_get = JSON.parse(json_get);
    //         $('#text_area').val('text');


    //         $('#input').val(obj_get.title);
    //         $('#text_area').val(obj_get.text);
    //     }

// });