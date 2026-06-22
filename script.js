const quotes = [
  { text: '타인의 결함이나 잘못에 대해 말하는 것도 그렇다. 내 보기에 결함이나 잘못 같은 것이 저 사람 인생에서는 결함이나 잘못이 아닐 수도 있다.', category: '관계', image: '' },
  { text: '삶이란 내가 무엇이며, 삶이란 무엇이고, 나는 이 길에 무엇을 갖고서 걸어가고 있는지 묻는 과정이다.', category: '철학', image: '' },
  { text: '해버리면 자기 땅이 된다. 지나온 길마다 아무것도 아닌 설명을 느낄 수 있도록.', category: '위로', image: '' },
  { text: '모든 아이디어는 미완성의 상태로 시작한다. 지금 내 눈에는 서툴어 보이는 것도 언젠가 나를 만들 수 있다.', category: '인생', image: '' },
  { text: '인연은 정말 신기한 것. 우연히 같은 시간 같은 공간에 머물렀다는 사실 하나만으로도 사람은 연결된다.', category: '사랑', image: '' },
  { text: '선택의 순간에 늘 완벽한 답은 없다. 가능한 한 진심에 가까운 쪽을 고르는 것뿐이다.', category: '철학', image: '' }
];

const grid = document.getElementById('quoteGrid');
const randomText = document.getElementById('quoteText');
const randomCategory = document.getElementById('quoteCategory');
const filter = document.getElementById('filter');

function renderGrid(category = 'all') {
  const list = category === 'all' ? quotes : quotes.filter(q => q.category === category);
  grid.innerHTML = list.map(q => `
    <article class="quote-item">
      <p>${q.text}</p>
      <small>${q.category}</small>
    </article>
  `).join('');
}

function showRandom() {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  randomText.textContent = q.text;
  randomCategory.textContent = q.category;
}

document.getElementById('randomBtn').addEventListener('click', showRandom);
filter.addEventListener('change', e => renderGrid(e.target.value));

document.getElementById('collectBtn').addEventListener('click', () => {
  const url = document.getElementById('pinUrl').value.trim();
  if (!url) return alert('Pinterest URL을 입력하세요.');
  alert('뼈대 버전입니다. /api/collect 서버 연결 후 실제 수집됩니다.');
});

renderGrid();
