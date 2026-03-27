export function renderButton(args) {
  const type = args.type || "button";
  const disabled = args.disabled ? "disabled" : "";
  const variant = args.variant || "primary";

  return `
    <div class="qa-stack">
      <span class="qa-label">State coverage</span>
      <div class="qa-cluster">
        <button class="qa-button" data-variant="${variant}" type="${type}" ${disabled}>
          ${args.label}
        </button>
      </div>
    </div>
  `;
}

export function renderInput(args) {
  const disabled = args.disabled ? "disabled" : "";
  const invalid = args.invalid ? "true" : "false";
  const hintTone = args.invalid ? "danger" : "neutral";

  return `
    <div class="qa-stack">
      <label class="qa-field">
        <span class="qa-label">${args.label}</span>
        <input
          class="qa-input"
          type="${args.type}"
          placeholder="${args.placeholder}"
          value="${args.value}"
          data-invalid="${invalid}"
          ${disabled}
        />
      </label>
      <p class="qa-hint" data-tone="${hintTone}">${args.hint}</p>
    </div>
  `;
}

export function renderCard(args) {
  return `
    <article class="qa-card qa-surface">
      <div class="qa-card__meta">
        <div class="qa-stack">
          <span class="qa-label">${args.eyebrow}</span>
          <h2 class="qa-heading">${args.title}</h2>
        </div>
        <span class="qa-badge" data-tone="${args.tone}">${args.badge}</span>
      </div>
      <p class="qa-copy">${args.body}</p>
      <div class="qa-cluster">
        <button class="qa-button" type="button">Primary action</button>
        <button class="qa-button" data-variant="secondary" type="button">Secondary</button>
      </div>
    </article>
  `;
}

export function renderBadge(args) {
  return `
    <div class="qa-stack">
      <span class="qa-label">Tone matrix</span>
      <div class="qa-cluster">
        <span class="qa-badge" data-tone="${args.tone}">${args.label}</span>
      </div>
    </div>
  `;
}
