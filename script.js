// ==========================================
// === 都道府県名産品クイズデータ (47問) ===
// ==========================================
const allQuizData = [
    // 北海道・東北
    { prefecture: "北海道(ほっかいどう)", specialties: ["じゃがいも", "メロン", "カニ"], options: ["北海道(ほっかいどう)", "青森県(あおもりけん)", "岩手県(いわてけん)", "宮城県(みやぎけん)"], answer: "北海道(ほっかいどう)" },
    { prefecture: "青森県(あおもりけん)", specialties: ["りんご", "にんにく", "ねぶた祭"], options: ["青森県(あおもりけん)", "秋田県(あきたけん)", "山形県(やまがたけん)", "福島県(ふくしまけん)"], answer: "青森県(あおもりけん)" },
    { prefecture: "岩手県(いわてけん)", specialties: ["わんこそば", "南部鉄器（なんぶてっき）", "前沢（まえさわ）牛"], options: ["岩手県(いわてけん)", "宮城県(みやぎけん)", "秋田県(あきたけん)", "山形県(やまがたけん)"], answer: "岩手県(いわてけん)" },
    { prefecture: "宮城県(みやぎけん)", specialties: ["牛タン", "笹（ささ）かまぼこ", "ずんだ餅（もち）"], options: ["宮城県(みやぎけん)", "福島県(ふくしまけん)", "山形県(やまがたけん)", "岩手県(いわてけん)"], answer: "宮城県(みやぎけん)" },
    { prefecture: "秋田県(あきたけん)", specialties: ["きりたんぽ", "なまはげ", "稲庭（いなにわ）うどん"], options: ["秋田県(あきたけん)", "青森県(あおもりけん)", "岩手県(いわてけん)", "山形県(やまがたけん)"], answer: "秋田県(あきたけん)" },
    { prefecture: "山形県(やまがたけん)", specialties: ["さくらんぼ", "米沢（よねざわ）牛", "将棋（しょうぎ）の駒（こま）"], options: ["山形県(やまがたけん)", "福島県(ふくしまけん)", "宮城県(みやぎけん)", "秋田県(あきたけん)"], answer: "山形県(やまがたけん)" },
    { prefecture: "福島県(ふくしまけん)", specialties: ["五色沼（ごしきぬま）", "桃", "赤べこ"], options: ["福島県(ふくしまけん)", "茨城県(いばらきけん)", "栃木県(とちぎけん)", "群馬県(ぐんまけん)"], answer: "福島県(ふくしまけん)" },
    // 関東
    { prefecture: "茨城県(いばらきけん)", specialties: ["納豆（なっとう）", "メロン", "干し芋"], options: ["茨城県(いばらきけん)", "千葉県(ちばけん)", "埼玉県(さいたまけん)", "栃木県(とちぎけん)"], answer: "茨城県(いばらきけん)" },
    { prefecture: "栃木県(とちぎけん)", specialties: ["いちご (とちおとめ)", "餃子（ぎょうざ）", "かんぴょう"], options: ["栃木県(とちぎけん)", "群馬県(ぐんまけん)", "埼玉県(さいたまけん)", "茨城県(いばらきけん)"], answer: "栃木県(とちぎけん)" },
    { prefecture: "群馬県(ぐんまけん)", specialties: ["だるま", "下仁田（しもにた）ネギ", "草津温泉"], options: ["群馬県(ぐんまけん)", "埼玉県(さいたまけん)", "長野県(ながのけん)", "新潟県(にいがたけん)"], answer: "群馬県(ぐんまけん)" },
    { prefecture: "埼玉県(さいたまけん)", specialties: ["草加せんべい", "浦和レッズ", "狭山（さやま）茶"], options: ["埼玉県(さいたまけん)", "東京都(とうきょうと)", "千葉県(ちばけん)", "神奈川県(かながわけん)"], answer: "埼玉県(さいたまけん)" },
    { prefecture: "千葉県(ちばけん)", specialties: ["落花生", "梨", "醤油"], options: ["千葉県(ちばけん)", "東京都(とうきょうと)", "神奈川県(かながわけん)", "茨城県(いばらきけん)"], answer: "千葉県(ちばけん)" },
    { prefecture: "東京都(とうきょうと)", specialties: ["もんじゃ焼き", "江戸切子", "雷おこし"], options: ["東京都(とうきょうと)", "神奈川県(かながわけん)", "埼玉県(さいたまけん)", "千葉県(ちばけん)"], answer: "東京都(とうきょうと)" },
    { prefecture: "神奈川県(かながわけん)", specialties: ["しゅうまい (崎陽軒)", "鳩（はと)サブレー", "海軍（かいぐん）カレー"], options: ["神奈川県(かながわけん)", "静岡県(しずおかけん)", "山梨県(やまなしけん)", "東京都(とうきょうと)"], answer: "神奈川県(かながわけん)" },
    // 中部
    { prefecture: "新潟県(にいがたけん)", specialties: ["米 (コシヒカリ)", "日本酒", "へぎそば"], options: ["新潟県(にいがたけん)", "富山県(とやまけん)", "長野県(ながのけん)", "群馬県(ぐんまけん)"], answer: "新潟県(にいがたけん)" },
    { prefecture: "富山県(とやまけん)", specialties: ["ます寿司（すし）", "ホタルイカ", "白えび"], options: ["富山県(とやまけん)", "石川県(いしかわけん)", "岐阜県(ぎふけん)", "新潟県(にいがたけん)"], answer: "富山県(とやまけん)" },
    { prefecture: "石川県(いしかわけん)", specialties: ["金箔（きんぱく）", "加賀（かが）野菜", "九谷焼（くたにやき）"], options: ["石川県(いしかわけん)", "福井県(ふくいけん)", "富山県(とやまけん)", "岐阜県(ぎふけん)"], answer: "石川県(いしかわけん)" },
    { prefecture: "福井県(ふくいけん)", specialties: ["越前（えちぜん）がに", "眼鏡（めがね）フレーム", "ソースカツ丼"], options: ["福井県(ふくいけん)", "京都府(きょうとふ)", "滋賀県(しがけん)", "石川県(いしかわけん)"], answer: "福井県(ふくいけん)" },
    { prefecture: "山梨県(やまなしけん)", specialties: ["ぶどう", "ほうとう", "信玄餅（しんげんもち）"], options: ["山梨県(やまなしけん)", "長野県(ながのけん)", "静岡県(しずおかけん)", "神奈川県(かながわけん)"], answer: "山梨県(やまなしけん)" },
    { prefecture: "長野県(ながのけん)", specialties: ["そば", "りんご", "野沢菜（のざわな）"], options: ["長野県(ながのけん)", "群馬県(ぐんまけん)", "岐阜県(ぎふけん)", "山梨県(やまなしけん)"], answer: "長野県(ながのけん)" },
    { prefecture: "岐阜県(ぎふけん)", specialties: ["飛騨（ひだ）牛", "白川郷 (ごう)", "さるぼぼ"], options: ["岐阜県(ぎふけん)", "愛知県(あいちけん)", "三重県(みえけん)", "富山県(とやまけん)"], answer: "岐阜県(ぎふけん)" },
    { prefecture: "静岡県(しずおかけん)", specialties: ["お茶", "うなぎパイ", "わさび"], options: ["静岡県(しずおかけん)", "愛知県(あいちけん)", "山梨県(やまなしけん)", "神奈川県(かながわけん)"], answer: "静岡県(しずおかけん)" },
    { prefecture: "愛知県(あいちけん)", specialties: ["味噌（みそ）カツ", "手羽先（てばさき）", "ひつまぶし"], options: ["愛知県(あいちけん)", "三重県(みえけん)", "岐阜県(ぎふけん)", "静岡県(しずおかけん)"], answer: "愛知県(あいちけん)" },
    // 近畿
    { prefecture: "三重県(みえけん)", specialties: ["伊勢海老（いせえび）", "赤福餅（あかふくもち）", "松阪牛（まつさかぎゅう）"], options: ["三重県(みえけん)", "和歌山県(わかやまけん)", "奈良県(ならけん)", "愛知県(あいちけん)"], answer: "三重県(みえけん)" },
    { prefecture: "滋賀県(しがけん)", specialties: ["近江牛（おうみぎゅう）", "鮒寿司（ふなずし）", "信楽焼（しがらきやき）"], options: ["滋賀県(しがけん)", "京都府(きょうとふ)", "福井県(ふくいけん)", "三重県(みえけん)"], answer: "滋賀県(しがけん)" },
    { prefecture: "京都府(きょうとふ)", specialties: ["八ツ橋（やつはし）", "抹茶（まっちゃ）", "京野菜（きょうやさい）"], options: ["京都府(きょうとふ)", "大阪府(おおさかふ)", "兵庫県(ひょうごけん)", "滋賀県(しがけん)"], answer: "京都府(きょうとふ)" },
    { prefecture: "大阪府(おおさかふ)", specialties: ["たこ焼き", "お好み焼き", "串カツ"], options: ["大阪府(おおさかふ)", "兵庫県(ひょうごけん)", "京都府(きょうとふ)", "奈良県(ならけん)"], answer: "大阪府(おおさかふ)" },
    { prefecture: "兵庫県(ひょうごけん)", specialties: ["神戸牛（こうべぎゅう）", "明石（あかし）焼き", "丹波黒豆（たんばくろまめ）"], options: ["兵庫県(ひょうごけん)", "岡山県(おかやまけん)", "鳥取県(とっとりけん)", "大阪府(おおさかふ)"], answer: "兵庫県(ひょうごけん)" },
    { prefecture: "奈良県(ならけん)", specialties: ["柿の葉（かきのは）寿司", "奈良漬け", "鹿（しか）"], options: ["奈良県(ならけん)", "和歌山県(わかやまけん)", "三重県(みえけん)", "大阪府(おおさかふ)"], answer: "奈良県(ならけん)" },
    { prefecture: "和歌山県(わかやまけん)", specialties: ["梅（うめ）干し", "みかん", "高野豆腐（こうやどうふ）"], options: ["和歌山県(わかやまけん)", "三重県(みえけん)", "奈良県(ならけん)", "大阪府(おおさかふ)"], answer: "和歌山県(わかやまけん)" },
    // 中国
    { prefecture: "鳥取県(とっとりけん)", specialties: ["梨 (なし)", "らっきょう", "カニ"], options: ["鳥取県(とっとりけん)", "島根県(しまねけん)", "岡山県(おかやまけん)", "兵庫県(ひょうごけん)"], answer: "鳥取県(とっとりけん)" },
    { prefecture: "島根県(しまねけん)", specialties: ["しじみ", "出雲（いずも）そば", "のどぐろ"], options: ["島根県(しまねけん)", "広島県(ひろしまけん)", "山口県(やまぐちけん)", "鳥取県(とっとりけん)"], answer: "島根県(しまねけん)" },
    { prefecture: "岡山県(おかやまけん)", specialties: ["マスカット", "桃（もも）", "きびだんご"], options: ["岡山県(おかやまけん)", "広島県(ひろしまけん)", "鳥取県(とっとりけん)", "兵庫県(ひょうごけん)"], answer: "岡山県(おかやまけん)" },
    { prefecture: "広島県(ひろしまけん)", specialties: ["牡蠣（かき）", "お好み焼き", "もみじ饅頭（まんじゅう）"], options: ["広島県(ひろしまけん)", "山口県(やまぐちけん)", "岡山県(おかやまけん)", "島根県(しまねけん)"], answer: "広島県(ひろしまけん)" },
    { prefecture: "山口県(やまぐちけん)", specialties: ["ふぐ", "夏みかん", "瓦（かわら）そば"], options: ["山口県(やまぐちけん)", "島根県(しまねけん)", "広島県(ひろしまけん)", "福岡県(ふくおかけん)"], answer: "山口県(やまぐちけん)" },
    // 四国
    { prefecture: "徳島県(とくしまけん)", specialties: ["すだち", "阿波（あわ）踊（おど）り", "鳴門金時（なるときんとき）"], options: ["徳島県(とくしまけん)", "香川県(かがわけん)", "愛媛県(えひめけん)", "高知県(こうちけん)"], answer: "徳島県(とくしまけん)" },
    { prefecture: "香川県(かがわけん)", specialties: ["讃岐（さぬき）うどん", "オリーブ", "和三盆（わさんぼん）"], options: ["香川県(かがわけん)", "愛媛県(えひめけん)", "徳島県(とくしまけん)", "高知県(こうちけん)"], answer: "香川県(かがわけん)" },
    { prefecture: "愛媛県(えひめけん)", specialties: ["みかん", "鯛（たい）めし", "今治（いまばり）タオル"], options: ["愛媛県(えひめけん)", "高知県(こうちけん)", "香川県(かがわけん)", "徳島県(とくしまけん)"], answer: "愛媛県(えひめけん)" },
    { prefecture: "高知県(こうちけん)", specialties: ["カツオのたたき", "ゆず", "文旦（ぶんたん）"], options: ["高知県(こうちけん)", "愛媛県(えひめけん)", "徳島県(とくしまけん)", "香川県(かがわけん)"], answer: "高知県(こうちけん)" },
    // 九州・沖縄
    { prefecture: "福岡県(ふくおかけん)", specialties: ["とんこつラーメン", "明太子（めんたいこ）", "あまおう"], options: ["福岡県(ふくおかけん)", "佐賀県(さがけん)", "熊本県(くまもとけん)", "大分県(おおいたけん)"], answer: "福岡県(ふくおかけん)" },
    { prefecture: "佐賀県(さがけん)", specialties: ["有田（ありた）焼", "呼子（よぶこ）のイカ", "佐賀牛（さがぎゅう）"], options: ["佐賀県(さがけん)", "長崎県(ながさきけん)", "福岡県(ふくおかけん)", "熊本県(くまもとけん)"], answer: "佐賀県(さがけん)" },
    { prefecture: "長崎県(ながさきけん)", specialties: ["カステラ", "ちゃんぽん", "皿うどん"], options: ["長崎県(ながさきけん)", "佐賀県(さがけん)", "熊本県(くまもとけん)", "福岡県(ふくおかけん)"], answer: "長崎県(ながさきけん)" },
    { prefecture: "熊本県(くまもとけん)", specialties: ["馬刺（ばさ）し", "辛子蓮根（からしれんこん）", "くまモン"], options: ["熊本県(くまもとけん)", "宮崎県(みやざきけん)", "鹿児島県(かごしまけん)", "福岡県(ふくおかけん)"], answer: "熊本県(くまもとけん)" },
    { prefecture: "大分県(おおいたけん)", specialties: ["温泉 (おんせん)", "とり天", "関（せき）アジ・関（せき）サバ"], options: ["大分県(おおいたけん)", "宮崎県(みやざきけん)", "熊本県(くまもとけん)", "福岡県(ふくおかけん)"], answer: "大分県(おおいたけん)" },
    { prefecture: "宮崎県(みやざきけん)", specialties: ["マンゴー", "地鶏（じどり）", "冷（ひ）や汁（じる）"], options: ["宮崎県(みやざきけん)", "鹿児島県(かごしまけん)", "熊本県(くまもとけん)", "大分県(おおいたけん)"], answer: "宮崎県(みやざきけん)" },
    { prefecture: "鹿児島県(かごしまけん)", specialties: ["黒豚（くろぶた）", "さつまいも", "焼酎（しょうちゅう）"], options: ["鹿児島県(かごしまけん)", "宮崎県(みやざきけん)", "熊本県(くまもとけん)", "沖縄県(おきなわけん)"], answer: "鹿児島県(かごしまけん)" },
    { prefecture: "沖縄県(おきなわけん)", specialties: ["ゴーヤチャンプルー", "ちんすこう", "シーサー"], options: ["沖縄県(おきなわけん)", "鹿児島県(かごしまけん)", "宮崎県(みやざきけん)", "福岡県(ふくおかけん)"], answer: "沖縄県(おきなわけん)" }
];
const QUIZ_LENGTH = 20; // 出題数
let currentQuizData = []; // 今回出題する20問を格納

// DOM要素の取得
const questionArea = document.getElementById('question-area');
const resultArea = document.getElementById('result-area');
const specialtyListElement = document.getElementById('specialty-list'); // 名産品リスト用
const optionsElement = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const feedbackElement = document.getElementById('feedback');
const finalFeedbackElement = document.getElementById('final-feedback');
const restartBtn = document.getElementById('restart-btn');
const progressElement = document.getElementById('progress');

// クイズの状態
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// --- 配列をシャッフルする関数 ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// --- クイズデータを準備する関数 ---
function prepareQuizData() {
    const shuffledAllData = shuffleArray([...allQuizData]); // 元のデータをコピーしてシャッフル
    currentQuizData = shuffledAllData.slice(0, QUIZ_LENGTH); // 先頭から20問を取得
    currentQuestionIndex = 0;
    score = 0;
}


// --- 選択肢の無効化と正解表示 ---
function disableOptionsAndShowAnswer(selectedButton) {
    const currentQuestion = currentQuizData[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer;

    const optionButtons = optionsElement.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => {
        btn.disabled = true;
        // data属性の値（ふりがな付き）で比較
        if (btn.dataset.option === correctAnswer) {
             if (selectedButton === null || !selectedButton.classList.contains('correct')) {
                btn.classList.add('reveal-correct');
            }
        }
    });

    if (currentQuestionIndex < QUIZ_LENGTH - 1) {
        nextBtn.textContent = '次の問題へ';
        nextBtn.style.display = 'inline-block';
    } else {
        nextBtn.textContent = '結果を見る';
        nextBtn.style.display = 'inline-block';
    }
}


// --- 問題をロードする関数 ---
function loadQuestion() {
    selectedAnswer = null;
    feedbackElement.textContent = '';
    feedbackElement.className = '';
    optionsElement.innerHTML = '';
    specialtyListElement.innerHTML = ''; // 名産品リストをクリア
    nextBtn.style.display = 'none';

    if (currentQuestionIndex < QUIZ_LENGTH) {
        const currentQuestion = currentQuizData[currentQuestionIndex];

        // 問題番号表示
        progressElement.textContent = `問題 ${currentQuestionIndex + 1} / ${QUIZ_LENGTH}`;

        // 名産品リスト表示
        currentQuestion.specialties.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item; // 名産品にはふりがな不要
            specialtyListElement.appendChild(li);
        });

        // 選択肢をシャッフルして表示
        const shuffledOptions = shuffleArray([...currentQuestion.options]);
        shuffledOptions.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option; // ボタンのテキスト（ふりがな付き）
            button.classList.add('option-btn');
            button.dataset.option = option; // data属性に選択肢（ふりがな付き）を保持
            button.addEventListener('click', () => handleAnswer(option, button));
            optionsElement.appendChild(button);
        });

    } else {
        showResults();
    }
}

// --- 回答を処理する関数 ---
function handleAnswer(selectedOption, button) {
    if (selectedAnswer !== null) return;

    selectedAnswer = selectedOption; // 選択された選択肢（ふりがな付き）
    const currentQuestion = currentQuizData[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer; // 正解（ふりがな付き）

    // ふりがな付きの文字列で比較
    if (selectedOption === correctAnswer) {
        score++;
        button.classList.add('correct');
        feedbackElement.textContent = "正解！";
        feedbackElement.className = 'correct-feedback';
    } else {
        button.classList.add('incorrect');
        feedbackElement.textContent = `残念！ 正解は「${correctAnswer}」でした。`; // 正解もふりがな付きで表示
        feedbackElement.className = 'incorrect-feedback';
    }

    disableOptionsAndShowAnswer(button);
}


// --- 結果を表示する関数 ---
function showResults() {
    questionArea.style.display = 'none';
    resultArea.style.display = 'block';
    // スコアの表示形式
    scoreElement.innerHTML = `<span style="font-size: 1.5em; font-weight: bold;">${score}</span> / ${QUIZ_LENGTH} 問正解！`;


    let finalFeedbackMsg = "";

    if (score === QUIZ_LENGTH) { // 全問正解の場合
        finalFeedbackMsg = "財宝のヒントは「うばし」だ。<br>言葉を並べ替えて財宝のありかをみつけよ。";
    } else { // 不正解がある場合
        let encouragement = "";
        const percentage = (score / QUIZ_LENGTH) * 100;
        if (percentage >= 80) {
            encouragement = "おしい！あともう少し！";
        } else if (percentage >= 50) {
            encouragement = "よく頑張った！";
        } else {
            encouragement = "まだまだいけるぞ！";
        }
        finalFeedbackMsg = `${encouragement}<br>満点目指して頑張ろう！`;
    }

    finalFeedbackElement.innerHTML = finalFeedbackMsg; // innerHTMLで改行<br>を解釈
}

// --- イベントリスナー ---
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

restartBtn.addEventListener('click', () => {
    resultArea.style.display = 'none';
    questionArea.style.display = 'block';
    prepareQuizData(); // 新しく20問を選び直す
    loadQuestion(); // 最初の問題を表示
});

// --- 初期化実行 ---
prepareQuizData(); // 最初に20問を準備
loadQuestion();    // 最初の問題を表示
