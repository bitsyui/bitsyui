const a={icon:"mirror",title:"Theme",items:[{value:"light",title:"Light"},{value:"dark",title:"Dark"}],dynamicTitle:!0},i={globalTypes:{theme:{name:"Theme",description:"Theme used for QA state coverage",toolbar:a}},initialGlobals:{theme:"light"},parameters:{controls:{expanded:!0,sort:"requiredFirst"},options:{storySort:{order:["QA",["Components"]]}}},decorators:[(o,s)=>{const e=s.globals.theme??"light";document.documentElement.dataset.bitsyTheme=e,document.documentElement.style.colorScheme=e;const t=o(),r=typeof t=="string"?t:t.outerHTML;return`
        <div class="sb-shell" data-theme="${e}">
          <header class="sb-header">
            <div>
              <p class="sb-kicker">Bitsy UI QA</p>
              <h1 class="sb-title">${s.title.split("/").slice(-1)[0]}</h1>
            </div>
            <p class="sb-caption">Storybook is for isolated states and regression checks, not the primary docs surface.</p>
          </header>
          <div class="sb-canvas">
            ${r}
          </div>
        </div>
      `}]};export{i as default};
