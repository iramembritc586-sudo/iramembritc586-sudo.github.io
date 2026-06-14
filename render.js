/* 根据 projects.js 渲染项目卡片 */
document.getElementById("year").textContent = new Date().getFullYear();

function esc(s) {
  return String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
}

function actionButtons(p) {
  const btns = [];
  if (p.webUrl) {
    btns.push(`<a class="btn primary" href="${p.webUrl}" target="_blank" rel="noopener">▶ 打开网页版</a>`);
  } else if (!p.noWeb) {
    btns.push(`<span class="btn disabled" title="部署后在 projects.js 填入 webUrl">网页版（待部署）</span>`);
  }
  if (p.download) {
    btns.push(`<a class="btn" href="${p.download}">⬇ 下载程序</a>`);
  } else if (p.downloadPending) {
    btns.push(`<span class="btn disabled" title="构建发布后填入 download">下载（待发布）</span>`);
  }
  if (p.source) {
    btns.push(`<a class="btn" href="${p.source}" target="_blank" rel="noopener">⟀ 源码 GitHub</a>`);
  }
  return `<div class="actions">${btns.join("")}</div>`;
}

function card(p) {
  const badges = p.badges.map((b) => `<span class="badge">${esc(b)}</span>`).join("");
  const feats = p.features.map((f) => `<li>${esc(f)}</li>`).join("");
  const usage = esc(p.usage.join("\n"));
  return `
  <article class="project" id="${p.id}">
    <div class="p-head">
      <div class="p-logo" style="background:${p.color}">${p.logo}</div>
      <div>
        <div class="p-title">${esc(p.name)}</div>
        <div class="p-tag">${esc(p.tag)}</div>
      </div>
      <div class="badges">${badges}</div>
    </div>
    <div class="p-body">
      <div class="p-intro">${esc(p.intro)}</div>
      <div class="p-block">
        <h4>主要能力</h4>
        <ul>${feats}</ul>
      </div>
      <div class="p-block">
        <h4>使用方法</h4>
        <pre>${usage}</pre>
        ${p.usageNote ? `<div class="p-tag" style="margin-top:8px">${esc(p.usageNote)}</div>` : ""}
      </div>
      ${actionButtons(p)}
    </div>
  </article>`;
}

document.getElementById("list").innerHTML = PROJECTS.map(card).join("");
