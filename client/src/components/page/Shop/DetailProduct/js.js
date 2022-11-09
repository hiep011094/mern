


const buttonOpen = document.getElementById('modalOpen');



if (buttonOpen) {

    // nếu nó có buttonOpen thì nó sẽ vô đây không có thì bỏ qua

    

    // ボタンがクリックされた時
    buttonOpen.addEventListener('click', modalOpen);
    function modalOpen() {
        modal.style.display = 'block';
    }
}
