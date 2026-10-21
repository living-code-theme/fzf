// This port owns its application mappings. Inputs come only from the pinned local palette.


const fzf = {
files: (f) => {
    const opts = [
      `fg:${f.r("fgAlt")}`, `bg:${f.r("bg")}`, `hl:${f.r("accent")}`,
      `fg+:${f.r("fg")}`, `bg+:${f.c("surface0")}`, `hl+:${f.c("mint")}`,
      `info:${f.r("fgSubtle")}`, `prompt:${f.r("accent")}`, `pointer:${f.r("accent")}`,
      `marker:${f.c("amber")}`, `spinner:${f.r("accent")}`, `header:${f.c("steel")}`,
      `border:${f.r("border")}`, `label:${f.r("fgMuted")}`, `query:${f.r("fg")}`,
      `gutter:${f.r("bg")}`, `selected-bg:${f.r("selection")}`, `separator:${f.r("border")}`,
      `scrollbar:${f.c("surface2")}`,
    ].join(",");
    return [
      { path: `${f.slug}.sh`, content: `export FZF_DEFAULT_OPTS="$FZF_DEFAULT_OPTS --color=${opts}"\n` },
      { path: `${f.slug}.fish`, content: `set -gx FZF_DEFAULT_OPTS "$FZF_DEFAULT_OPTS --color=${opts}"\n` },
    ];
  }
};

export function generate(flavors) {
  return [...flavors.flatMap(f => fzf.files(f)), ...(fzf.all?.(flavors) ?? [])].filter(f => !["LICENSE", "README.md", "package.json", "extension.toml"].includes(f.path.split("/").at(-1)));
}
