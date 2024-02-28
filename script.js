// カードをシャッフルするコード

//createCardGrid関数を読み込む
document.addEventListener("DOMContentLoaded", function () {createCardGrid();});

//画像を管理する関数
function createCardGrid() {
    // 各カードに対応する画像URLの配列
    const cardImages = [
        "img/card1.jpg",
        "img/card2.jpg",
        "img/card3.jpg",
        "img/card4.jpg",
        "img/card5.jpg",
        "img/card6.jpg",
        "img/card7.jpg",
        "img/card8.jpg",
        "img/card9.jpg"   
    ];

    // cardImagesの配列に入っているカードをシャッフルする
    const shuffledCardImages = shuffle(cardImages);

    // カードコンテナの要素を取得する
    const cardContainer = document.getElementById("cardContainer");

    // 画像を含むカード要素を作成してコンテナに追加する
    shuffledCardImages.forEach((imageUrl) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;

        cardElement.appendChild(imgElement);
        cardElement.onclick = () => selectCard(imageUrl);

        cardContainer.appendChild(cardElement);
    });
}

function selectCard(selectedCard) {
    // 選択されたカードの画像URLを使用して新しいページにリダイレクトする
        const cardNameWithoutExtension = selectedCard.replace(/\.[^/.]+$/, ''); // 拡張子を取り除く正規表現
        const cardNameWithoutCard = cardNameWithoutExtension.substring(4); // "img/" を取り除く
        console.log(cardNameWithoutCard);//取り出された文字を確認
        window.location.href = `${cardNameWithoutCard}.html`;
        
}

function shuffle(array) {
    // Fisher-Yates シャッフルアルゴリズム
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // 0 から i までのランダムなインデックス
        [array[i], array[j]] = [array[j], array[i]]; // 要素の入れ替え
    }
    return array;
}

