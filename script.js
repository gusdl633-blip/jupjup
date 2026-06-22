const sampleImages = [
  {
    image_url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=900&auto=format&fit=crop',
    ocr_text: '모든 아이디어는 미완성의 상태로 시작한다. 지금 서툴러 보이는 것도 언젠가 나를 만들 수 있다.',
    category: '인생'
  },
  {
    image_url: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=900&auto=format&fit=crop',
    ocr_text: '인연은 정말 신기한 것. 우연히 같은 시간 같은 공간에 머물렀다는 사실 하나만으로도 사람은 연결된다.',
    category: '관계'
  },
  {
    image_url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=900&auto=format&fit=crop',
    ocr_text: '선택의 순간에 완벽한 답은 없다. 가능한 진심에 가까운 쪽을 고르는 것뿐이다.',
    category: '철학'
  },
  {
    image_url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=900&auto=format&fit=crop',
    ocr_text: '해버리면 자기 땅이 된다. 지나온 길마다 아무것도 아닌 설명을 느낄 수 있도록.',
    category: '위로'
  },
  {
    image_url: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=900&auto=format&fit=crop',
    ocr_text: '삶이란 내가 무엇이며, 무엇을 갖고서 걸어가고 있는지 묻는 과정이다.',
    category: '철학'
  },
  {
    image_url: 'https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?q=80&w=900&auto=format&fit=crop',
    ocr_text: '타인의 결함이나 잘못에 대해 말하는 것도 그렇다. 내 보기에 결함처럼 보여도 그 사람의 인생에서는 답일 수 있다.',
    category: '관계'
  }
];

let items = [...sampleImages];
let currentFilter = 'all';

const randomImage = document.querySelector('#randomImage');
const randomOcr = document.querySelector('#randomOcr');
const grid = document.querySelector('#imageGrid');
const filter = document.querySelector('#categoryFilter');
const dialog = document.querySelector('#imageDialog');
const dialogImage = document.querySelector('#dialogImage');
const dialogText = document.querySelector('#dialogText');

function filteredItems() {
  return currentFilter === 'all' ? items : items.filter(item => item.category === currentFilter);
}

function pickRandom() {
  const list = filteredItems();
  const item = list[Math.floor(Math.random() * list.length)] || items[0];
  randomImage.src = item.image_url;
  randomOcr.textContent = item.ocr_text;
}

function renderGrid() {
  const list = filteredItems();
  grid.innerHTML = list.map((item, index) => `
    <article class="pin-card" data-index="${items.indexOf(item)}">
      <img src="${item.image_url}" alt="${item.category} 글귀 이미지" loading="lazy" />
      <div class="pin-meta">
        <strong>${item.category}</strong>
        <p>${item.ocr_text}</p>
      </div>
    </article>
  `).join('');
}

async function mockCollect() {
  // 실제 연결 시: const res = await fetch('/api/collect?url=' + encodeURIComponent(pinUrl.value));
  // const collected = await res.json(); items = collected.images;
  items = [...sampleImages].sort(() => Math.random() - 0.5);
  renderGrid();
  pickRandom();
}

document.querySelector('#randomBtn').addEventListener('click', pickRandom);
document.querySelector('#mockCollectBtn').addEventListener('click', mockCollect);
filter.addEventListener('change', (e) => {
  currentFilter = e.target.value;
  renderGrid();
  pickRandom();
});

grid.addEventListener('click', (e) => {
  const card = e.target.closest('.pin-card');
  if (!card) return;
  const item = items[Number(card.dataset.index)];
  dialogImage.src = item.image_url;
  dialogText.textContent = item.ocr_text;
  dialog.showModal();
});

document.querySelector('#closeDialog').addEventListener('click', () => dialog.close());

renderGrid();
pickRandom();
