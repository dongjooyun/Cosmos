const quotes = [
    {
        quote: "누구도 운명을 바꿀 수 없어. \n운명을 기다리느냐, 운명에 맞서느냐는 택할 수 있지.",
        author: "원령공주"
    },
    {
        quote: "키키, 그렇게 겉모습에 신경쓰지 말거라. \n중요한 건 마음이야.",
        author: "마녀배달부 키키"
    },
    {
        quote: "그래요. 마음이라는 건 무겁거든요.",
        author: "하울의 움직이는 성"
    },
    {
        quote: "살아라. 그대는 아름답다.",
        author: "원령공주"
    },
    {
        quote: "한번 만난 인연은 잊혀지는 것이 아니라 잊고 있을 뿐이야.",
        author: "센과 치히로의 행방불명"
    },
    {
        quote: "이렇게 웃어봐, 그러면 무서운 게 사라진단다.",
        author: "이웃집 토토로"
    },
    {
        quote: "아무리 강한 무기가 있어도, \n수많은 로보트를 조종해도, \n땅을 떠나서는 살 수 없는 거예요!",
        author: "천공의 성 라퓨타"
    },
    {
        quote: "넌 너의 시간을 살아가야 해.",
        author: "고양이의 보은"
    },
    {
        quote: "'싫다'던가, '돌아가고 싶다'던가 \n라고 말하고 싶어질 때도 있겠지만 \n괴로워도 참고 기회를 기다리는 거야.",
        author: "센과 치히로의 행방불명"
    },
    {
        quote: "땅에 뿌리 내려 바람과 함께 살아가자. \n씨앗과 함께 겨울을 넘고 새들과 봄을 노래하자.",
        author: "천공의 성 라퓨타"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

quote.classList.add("saying");
author.classList.add("author");

function changeQuotes() {
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = `"${todaysQuote.quote}"`;
    author.innerText = `『 ${todaysQuote.author} 』`;
}

changeQuotes();
setInterval(changeQuotes, 10000);

