const elements = {
  wood: {
    label: "목(木)",
    color: "#2f6f55",
    direction: "동쪽",
    stones: ["비취", "그린 아벤추린", "말라카이트"],
    bracelet: "목(木) 기운을 채우는 초록 오행 팔찌",
    image: "assets/bracelet-wood.png",
    place: "강원 인제 방태산 계곡 또는 전남 담양 대나무숲",
    copy: "나무 기운은 시작, 확장, 회복의 흐름입니다. 동쪽 숲길과 맑은 계곡처럼 생기가 살아나는 장소가 잘 맞습니다.",
    rituals: ["아침 산책", "동쪽 창가 정리", "초록색 소품", "물소리 듣기"],
    daily: ["출근 전 10분 스트레칭", "초록 팔찌 왼손 착용", "오늘 시작할 일 1개 적기", "점심 후 나무 많은 길 걷기"]
  },
  fire: {
    label: "화(火)",
    color: "#b6463f",
    direction: "남쪽",
    stones: ["가넷", "카넬리안", "레드 재스퍼"],
    bracelet: "화(火) 기운을 깨우는 붉은 오행 팔찌",
    image: "assets/bracelet-fire.png",
    place: "부산 해운대 달맞이길 또는 경남 남해 금산",
    copy: "불 기운은 열정, 표현, 주목의 흐름입니다. 남쪽의 햇빛, 바다 전망, 탁 트인 능선이 기운을 끌어올립니다.",
    rituals: ["오전 햇빛 받기", "남향 자리 활용", "따뜻한 차", "붉은 포인트"],
    daily: ["오전 햇빛 15분 받기", "붉은 팔찌 오른손 착용", "먼저 연락 1번 하기", "미룬 결정 하나 끝내기"]
  },
  earth: {
    label: "토(土)",
    color: "#b78329",
    direction: "중앙과 남서쪽",
    stones: ["호안석", "시트린", "옐로우 재스퍼"],
    bracelet: "토(土) 기운을 붙잡는 황금빛 오행 팔찌",
    image: "assets/bracelet-earth.png",
    place: "충남 계룡산 갑사길 또는 전북 고창 선운산",
    copy: "흙 기운은 안정, 신뢰, 축적의 흐름입니다. 완만한 산길과 오래된 사찰 주변처럼 중심이 단단한 곳이 좋습니다.",
    rituals: ["집 중앙 비우기", "흙길 걷기", "노란빛 조명", "식사 리듬 고정"],
    daily: ["아침 식사 거르지 않기", "노란 팔찌 왼손 착용", "책상 중앙 비우기", "오늘 돈 쓸 곳 미리 정하기"]
  },
  metal: {
    label: "금(金)",
    color: "#7b8482",
    direction: "서쪽",
    stones: ["백수정", "문스톤", "헤마타이트"],
    bracelet: "금(金) 기운을 정리하는 맑은 오행 팔찌",
    image: "assets/bracelet-metal.png",
    place: "인천 강화도 석모도 또는 충남 태안 해변",
    copy: "금 기운은 정리, 결단, 품격의 흐름입니다. 서쪽 바다와 석양, 바람이 잘 통하는 공간이 생각을 맑게 합니다.",
    rituals: ["책상 정리", "서쪽 산책", "흰색 셔츠", "금속 액세서리"],
    daily: ["하루 첫 5분 책상 정리", "흰 팔찌 오른손 착용", "불필요한 약속 하나 줄이기", "오후에 할 일 3개만 남기기"]
  },
  water: {
    label: "수(水)",
    color: "#286985",
    direction: "북쪽",
    stones: ["라피스라줄리", "아쿠아마린", "흑요석"],
    bracelet: "수(水) 기운을 흐르게 하는 푸른 오행 팔찌",
    image: "assets/bracelet-water.png",
    place: "경기 가평 용추계곡 또는 제주 돈내코 계곡",
    copy: "물 기운은 지혜, 유연함, 깊이의 흐름입니다. 북쪽 물길, 계곡, 차분한 호수 주변이 마음의 속도를 낮춰줍니다.",
    rituals: ["물가 명상", "북쪽 공간 정돈", "짙은 파랑", "수분 루틴"],
    daily: ["기상 후 물 한 컵", "푸른 팔찌 왼손 착용", "답답할 때 3분 호흡", "밤에는 감정 메모 3줄"]
  }
};

const stems = ["wood", "wood", "fire", "fire", "earth", "earth", "metal", "metal", "water", "water"];
const branches = ["water", "earth", "wood", "wood", "earth", "fire", "fire", "earth", "metal", "metal", "earth", "water"];
const seasonBoost = {
  0: "water",
  1: "wood",
  2: "wood",
  3: "earth",
  4: "fire",
  5: "fire",
  6: "earth",
  7: "metal",
  8: "metal",
  9: "earth",
  10: "water",
  11: "water"
};
const hourElement = ["water", "water", "earth", "wood", "wood", "earth", "fire", "fire", "earth", "metal", "metal", "earth"];
const hanjaMap = {
  金: "metal",
  銀: "metal",
  錦: "metal",
  木: "wood",
  林: "wood",
  東: "wood",
  火: "fire",
  炅: "fire",
  炫: "fire",
  土: "earth",
  山: "earth",
  坤: "earth",
  水: "water",
  海: "water",
  河: "water",
  智: "water",
  賢: "metal",
  瑞: "metal",
  旼: "fire"
};
const choseongElement = {
  ㄱ: "wood",
  ㄲ: "wood",
  ㅋ: "wood",
  ㄴ: "fire",
  ㄷ: "fire",
  ㄸ: "fire",
  ㄹ: "fire",
  ㅌ: "fire",
  ㅇ: "earth",
  ㅎ: "earth",
  ㅅ: "metal",
  ㅆ: "metal",
  ㅈ: "metal",
  ㅉ: "metal",
  ㅊ: "metal",
  ㅁ: "water",
  ㅂ: "water",
  ㅃ: "water",
  ㅍ: "water"
};
const vowelElement = {
  ㅏ: "wood",
  ㅐ: "wood",
  ㅑ: "wood",
  ㅒ: "wood",
  ㅗ: "fire",
  ㅛ: "fire",
  ㅓ: "earth",
  ㅔ: "earth",
  ㅕ: "earth",
  ㅖ: "earth",
  ㅡ: "metal",
  ㅢ: "metal",
  ㅣ: "metal",
  ㅜ: "water",
  ㅠ: "water"
};
const choseongList = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
const vowelList = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];

const form = document.querySelector("#saju-form");
const resultSection = document.querySelector("#result-section");
const bars = document.querySelector("#bars");
const birthTimeInput = document.querySelector("#birth-time");
const unknownTimeInput = document.querySelector("#unknown-time");

unknownTimeInput.addEventListener("change", () => {
  birthTimeInput.disabled = unknownTimeInput.checked;
  birthTimeInput.required = !unknownTimeInput.checked;
  if (unknownTimeInput.checked) {
    birthTimeInput.value = "";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const unknownTime = data.get("unknownTime") === "on";
  const birthTime = unknownTime ? "12:00" : data.get("birthTime");
  const birthDate = new Date(`${data.get("birthDate")}T${birthTime}`);
  if (Number.isNaN(birthDate.getTime())) return;

  const name = (data.get("name") || "").trim();
  const hanja = (data.get("customHanja") || "").trim();
  const scores = calculateScores(birthDate, name, hanja, data.get("region"));
  const sorted = Object.entries(scores).sort((a, b) => a[1] - b[1]);
  const weakKey = sorted[0][0];
  const strongKey = sorted[sorted.length - 1][0];
  const weak = elements[weakKey];
  const strong = elements[strongKey];
  const yinYang = calculateYinYang(birthDate, name, hanja);

  renderBars(scores);
  renderLifeCurve(birthDate, weakKey, strongKey);
  document.querySelector("#weak-element").textContent = weak.label;
  document.querySelector("#yin-yang-badge").textContent = yinYang;
  document.querySelector("#result-title").textContent = `${data.get("name")}님의 오행 균형 결과`;
  document.querySelector("#summary-text").textContent =
    `${weak.label} 기운이 상대적으로 약하고 ${strong.label} 기운이 강하게 나타납니다. ` +
    `${unknownTime ? "태어난 시각을 모르는 경우라 정오 기준으로 흐름을 가볍게 보정했습니다. " : ""}` +
    `부족한 기운은 아는 데서 끝내지 말고, 팔찌와 하루 루틴처럼 매일 몸에 닿는 신호로 잡아줄 때 흔들림을 줄이는 데 도움이 됩니다.`;

  document.querySelector("#place-title").textContent = `${weak.direction} 기운을 받는 추천지`;
  document.querySelector("#place-copy").textContent = `${weak.place}. ${weak.copy}`;
  renderTags("#ritual-list", weak.rituals);

  document.querySelector("#bracelet-title").textContent = weak.bracelet;
  const braceletImage = document.querySelector("#bracelet-image");
  braceletImage.src = weak.image;
  braceletImage.alt = `${weak.label} 보완 오행 팔찌 제품 사진`;
  document.querySelector("#bracelet-copy").textContent =
    `${weak.label} 보완에는 ${weak.stones.join(", ")} 계열이 잘 어울립니다. ` +
    `이 팔찌는 단순한 액세서리가 아니라 나쁜 흐름이 들어올 때 한 번 멈추고 정리하게 해주는 개인 액막이 신호입니다. ` +
    `왼손은 기운을 받아들이고 싶을 때, 오른손은 막힌 일을 밀어내고 표현하고 싶을 때 추천합니다.`;
  renderTags("#stone-chips", weak.stones);
  renderTags("#daily-routine", weak.daily);

  const buyButton = document.querySelector("#buy-button");
  buyButton.href = `mailto:hello@example.com?subject=${encodeURIComponent(`${data.get("name")}님 ${weak.label} 팔찌 추천 문의`)}`;

  resultSection.classList.remove("is-hidden");
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

function calculateScores(date, name, hanja, region) {
  const scores = { wood: 2, fire: 2, earth: 2, metal: 2, water: 2 };
  const yearStem = stems[((date.getFullYear() - 4) % 10 + 10) % 10];
  const yearBranch = branches[((date.getFullYear() - 4) % 12 + 12) % 12];
  const monthBoost = seasonBoost[date.getMonth()];
  const hourBoost = hourElement[Math.floor(date.getHours() / 2) % 12];

  [yearStem, yearBranch, monthBoost, hourBoost].forEach((key) => {
    scores[key] += 2;
  });

  [...hanja].forEach((char) => {
    const mapped = hanjaMap[char];
    if (mapped) scores[mapped] += 1;
  });
  getHangulNameElements(name).forEach((key) => {
    scores[key] += hanja ? 0.5 : 1;
  });

  const regionBoost = {
    capital: "metal",
    gangwon: "wood",
    chungcheong: "earth",
    honam: "water",
    yeongnam: "fire",
    jeju: "water"
  };
  scores[regionBoost[region]] += 1;

  return scores;
}

function calculateYinYang(date, name, hanja) {
  const nameSeed = [...`${name}${hanja}`].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const yang = date.getFullYear() + date.getDate() + date.getHours() + name.length;
  const yin = date.getMonth() + 1 + date.getMinutes() + nameSeed;
  if (Math.abs((yang % 9) - (yin % 9)) <= 2) return "음양 균형형";
  return yang % 9 > yin % 9 ? "양기 우세형" : "음기 우세형";
}

function getHangulNameElements(name) {
  const result = [];
  [...name].forEach((char) => {
    const code = char.charCodeAt(0) - 0xac00;
    if (code < 0 || code > 11171) return;
    const initial = Math.floor(code / 588);
    const vowel = Math.floor((code % 588) / 28);
    const initialElement = choseongElement[choseongList[initial]];
    const vowelElementKey = vowelElement[vowelList[vowel]];
    if (initialElement) result.push(initialElement);
    if (vowelElementKey) result.push(vowelElementKey);
  });
  return result;
}

function renderBars(scores) {
  const max = Math.max(...Object.values(scores));
  bars.innerHTML = Object.entries(elements)
    .map(([key, element]) => {
      const value = scores[key];
      const width = Math.max(18, Math.round((value / max) * 100));
      return `
        <div class="bar-row">
          <span>${element.label}</span>
          <span class="bar-track"><span class="bar-fill" style="width:${width}%; background:${element.color}"></span></span>
          <span>${value}</span>
        </div>
      `;
    })
    .join("");
}

function renderLifeCurve(date, weakKey, strongKey) {
  const labels = ["10대", "20대", "30대", "40대", "50대", "60대+"];
  const seed = date.getFullYear() + date.getMonth() * 7 + date.getDate() * 13;
  const weakIndex = Object.keys(elements).indexOf(weakKey) + 1;
  const strongIndex = Object.keys(elements).indexOf(strongKey) + 1;
  const points = labels.map((label, index) => {
    const wave = Math.sin((seed + index * 31) / 17) * 18;
    const cycle = ((seed + weakIndex * 11 + index * strongIndex * 7) % 29) - 14;
    const value = Math.max(22, Math.min(92, Math.round(58 + wave + cycle)));
    return { label, value };
  });
  const low = points.reduce((min, point) => (point.value < min.value ? point : min), points[0]);
  const high = points.reduce((max, point) => (point.value > max.value ? point : max), points[0]);

  document.querySelector("#life-curve").innerHTML = points
    .map((point) => {
      const color = point.value < 42 ? "#b6463f" : point.value > 70 ? "#2f6f55" : "#b78329";
      return `
        <div class="curve-point">
          <div class="curve-bar" style="height:${point.value}%; background:${color}"></div>
          <div class="curve-label">${point.label}</div>
        </div>
      `;
    })
    .join("");
  document.querySelector("#curve-copy").textContent =
    `${low.label} 전후에는 마음이 흔들리거나 선택이 꼬이는 구간이 생기기 쉽고, ${high.label} 전후에는 기운이 다시 살아나는 흐름이 보입니다. ` +
    `부족한 오행 팔찌와 하루 루틴은 큰일을 대신 해결해준다기보다, 안 좋은 흐름이 올 때 몸과 마음을 먼저 정돈하게 하는 액막이 습관으로 쓰면 좋습니다.`;
}

function renderTags(selector, items) {
  document.querySelector(selector).innerHTML = items.map((item) => `<span>${item}</span>`).join("");
}
