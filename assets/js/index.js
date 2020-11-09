let currentPage = 0;
let imgs = [
    "image1.jpg",
    "image2.jpg", 
    "image3.jpg", 
    "image4.jpg", 
    "image5.jpg", 
];

window.onload = function(){
    pageNum.innerHTML = currentPage+1 + "/" + imgs.length; //ロード時、ページ数を表示
};

function movePage(page){
    let pageNum = document.getElementById("pageNum");
    let slideImg = document.getElementById("slideImg");
    if(page === "prev" && currentPage > 0){
        currentPage --; //prevボタンを押してて現在のページが最初以外の時、ページ数を-1
    }else if (page === "next" && currentPage < imgs.length - 1){
        currentPage ++; //nextボタンを押してて現在のページが最後以外の時、ページ数を+1
    }
    pageNum.innerHTML = (currentPage + 1) + "/" + imgs.length; //表示したページ数を更新
    slideImg.setAttribute("src", "assets/img/" + imgs[currentPage]); //src内の画像ファイル名を変える
};
