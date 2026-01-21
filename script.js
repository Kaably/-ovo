// 英雄数据
const heroData = {
  "亚索": {
    hex: "狂风绝息、致命节奏、嗜血猎手",
    equip: "无尽+电刀+饮血剑+水银",
    note: "优先暴击攻速，避免纯肉"
  },
  "奶妈": {
    hex: "生命源泉、奥术彗星、法力流系带",
    equip: "圣杯+香炉+救赎+流水法杖",
    note: "偏辅助续航，少出输出装"
  },
  "盖伦": {
    hex: "坚韧不屈、复苏之风、爆破专家",
    equip: "黑切+日炎+反甲+狂徒",
    note: "主坦抗伤，优先堆血量和护甲"
  }
};

// 搜索英雄
function searchHero() {
  const input = document.getElementById('searchInput').value.trim();
  if (heroData[input]) {
    gotoDetail(input);
  } else {
    alert("暂无该英雄的攻略哦～");
  }
}

// 跳转到详情页
function gotoDetail(heroName) {
  window.location.href = `detail.html?hero=${heroName}`;
}

// 按回车触发搜索
document.getElementById('searchInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    searchHero();
  }
});