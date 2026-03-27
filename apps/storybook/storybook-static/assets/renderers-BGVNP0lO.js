function s(a){const t=a.type||"button",n=a.disabled?"disabled":"";return`
    <div class="qa-stack">
      <span class="qa-label">State coverage</span>
      <div class="qa-cluster">
        <button class="qa-button" data-variant="${a.variant||"primary"}" type="${t}" ${n}>
          ${a.label}
        </button>
      </div>
    </div>
  `}function l(a){const t=a.disabled?"disabled":"",n=a.invalid?"true":"false",e=a.invalid?"danger":"neutral";return`
    <div class="qa-stack">
      <label class="qa-field">
        <span class="qa-label">${a.label}</span>
        <input
          class="qa-input"
          type="${a.type}"
          placeholder="${a.placeholder}"
          value="${a.value}"
          data-invalid="${n}"
          ${t}
        />
      </label>
      <p class="qa-hint" data-tone="${e}">${a.hint}</p>
    </div>
  `}function d(a){return`
    <article class="qa-card qa-surface">
      <div class="qa-card__meta">
        <div class="qa-stack">
          <span class="qa-label">${a.eyebrow}</span>
          <h2 class="qa-heading">${a.title}</h2>
        </div>
        <span class="qa-badge" data-tone="${a.tone}">${a.badge}</span>
      </div>
      <p class="qa-copy">${a.body}</p>
      <div class="qa-cluster">
        <button class="qa-button" type="button">Primary action</button>
        <button class="qa-button" data-variant="secondary" type="button">Secondary</button>
      </div>
    </article>
  `}function c(a){return`
    <div class="qa-stack">
      <span class="qa-label">Tone matrix</span>
      <div class="qa-cluster">
        <span class="qa-badge" data-tone="${a.tone}">${a.label}</span>
      </div>
    </div>
  `}export{s as a,d as b,l as c,c as r};
