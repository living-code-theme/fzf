<!-- living-code-readme:1 -->
# 🔎 Living Code for fzf

**Calm slate. Living color.** Living Code for fzf. Repository-owned theme files, installation instructions and four color flavors.

[Installation](#installation) · [Flavors](#flavors) · [Configuration](#configuration) · [All ports](https://github.com/living-code-theme)

## Previews

<table data-lc-flavors>
<tr>
<td width="50%" valign="top">
<strong>Night</strong><br><sub>Dark · full palette</sub><br><br>
<a href="images/night.png"><img src="images/night.png" alt="fzf running Living Code Night" width="640"></a>
</td>
<td width="50%" valign="top">
<strong>Frost</strong><br><sub>Dark · softer chroma</sub><br><br>
<a href="images/frost.png"><img src="images/frost.png" alt="fzf running Living Code Frost" width="640"></a>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<strong>Paper</strong><br><sub>Light · near-white slate</sub><br><br>
<a href="images/paper.png"><img src="images/paper.png" alt="fzf running Living Code Paper" width="640"></a>
</td>
<td width="50%" valign="top">
<strong>Signal</strong><br><sub>Dark · teal accent</sub><br><br>
<a href="images/signal.png"><img src="images/signal.png" alt="fzf running Living Code Signal" width="640"></a>
</td>
</tr>
</table>

Select any preview to view the image at full size.

## Installation

```sh
flavor=night
curl -fsSL --create-dirs -o "${XDG_CONFIG_HOME:-$HOME/.config}/fzf/living-code-$flavor.sh" "https://raw.githubusercontent.com/living-code-theme/fzf/main/living-code-$flavor.sh"
```

Then source it from `~/.bashrc` or `~/.zshrc`:

```sh
. "${XDG_CONFIG_HOME:-$HOME/.config}/fzf/living-code-night.sh"
```

For fish, download `living-code-$flavor.fish` from the same folder of the repository instead and `source` it from `config.fish`. Source it after any line that sets `FZF_DEFAULT_OPTS`.

## Flavors

Expand a flavor for its full-size preview and activation instructions.

<details data-lc-flavor="night">
<summary><strong>Night</strong> · Dark · full palette</summary>

<p><a href="images/night.png"><img src="images/night.png" alt="fzf running Living Code Night" width="1280"></a></p>

Download `living-code-night.sh` using the installation command with `flavor=night`, then source it after your other fzf options:

```sh
. "${XDG_CONFIG_HOME:-$HOME/.config}/fzf/living-code-night.sh"
```

For fish use the matching `.fish` file instead.

</details>

<details data-lc-flavor="frost">
<summary><strong>Frost</strong> · Dark · softer chroma</summary>

<p><a href="images/frost.png"><img src="images/frost.png" alt="fzf running Living Code Frost" width="1280"></a></p>

Download `living-code-frost.sh` using the installation command with `flavor=frost`, then source it after your other fzf options:

```sh
. "${XDG_CONFIG_HOME:-$HOME/.config}/fzf/living-code-frost.sh"
```

For fish use the matching `.fish` file instead.

</details>

<details data-lc-flavor="paper">
<summary><strong>Paper</strong> · Light · near-white slate</summary>

<p><a href="images/paper.png"><img src="images/paper.png" alt="fzf running Living Code Paper" width="1280"></a></p>

Download `living-code-paper.sh` using the installation command with `flavor=paper`, then source it after your other fzf options:

```sh
. "${XDG_CONFIG_HOME:-$HOME/.config}/fzf/living-code-paper.sh"
```

For fish use the matching `.fish` file instead.

</details>

<details data-lc-flavor="signal">
<summary><strong>Signal</strong> · Dark · teal accent</summary>

<p><a href="images/signal.png"><img src="images/signal.png" alt="fzf running Living Code Signal" width="1280"></a></p>

Download `living-code-signal.sh` using the installation command with `flavor=signal`, then source it after your other fzf options:

```sh
. "${XDG_CONFIG_HOME:-$HOME/.config}/fzf/living-code-signal.sh"
```

For fish use the matching `.fish` file instead.

</details>

## Configuration

See [fzf's documentation](https://github.com/junegunn/fzf) for application settings and reload behavior. The activation instructions above identify each supported flavor; keep your other application configuration.

## Compatibility

This port supplies theme files for fzf, not the application itself. Install the application separately and follow the installation instructions for its supported configuration format.

## Contributing

Found a problem? [Open an issue](https://github.com/living-code-theme/fzf/issues/new/choose) with the app version, the flavor and a screenshot. Want Living Code somewhere else? [Request a port](https://github.com/living-code-theme/core/issues/new?template=port-request.yml).

Pull requests are welcome. Keep this README, `port.json` and `images/` in sync, and use real screenshots of the app, never mockups.

🦎 **One chameleon, many habitats.** Part of [Living Code](https://github.com/living-code-theme).

## License

[MIT](LICENSE) © Elliot Luque
