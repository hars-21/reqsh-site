<p align="center">
  <a href="https://reqsh.dev">
    <img src="public/logo.png" height="96">
  </a>
</p>

<h1 align="center">reqsh</h1>

<p align="center">
  <strong>The interactive shell for HTTP requests.</strong><br />
  Set a base URL once. Add headers once. Use variables. Save requests. Re-run from history.
</p>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)
[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange.svg)](https://www.rust-lang.org)
[![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Linux%20%7C%20Windows-lightgrey)](#)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![GitHub Stars](https://img.shields.io/github/stars/hars-21/reqsh?style=social)](https://github.com/hars-21/reqsh)

</div>

## What is reqsh?

`reqsh` is a persistent, interactive REPL shell for making HTTP requests directly from your terminal. Instead of constructing verbose `curl` commands over and over, you enter a session where everything is stateful, your base URL, your headers, your variables.

```sh
$ curl -fsSL https://reqsh.dev/install.sh | sh
```

## Quick Start

```sh
# Install
curl -fsSL https://reqsh.dev/install.sh | sh

# Launch
reqsh
```

## Usage

### Set up your environment

```sh
reqsh> base https://api.example.com
reqsh> header Authorization Bearer tok_abc123
```

### Send requests

```sh
reqsh> GET /users
reqsh> POST /users
.....> Content-Type: application/json
.....>
.....> { "name": "Alice" }
.....> ::send
```

### Use variables

```sh
reqsh> set token eyJhbGciOiJIUzI1NiJ9
reqsh> GET /users/{{token}}
reqsh> ::send
```

### Save and replay

```sh
reqsh> save get-users
reqsh> run get-users
```

### History and rerun

```sh
reqsh> history
1: base https://api.example.com
2: header Authorization Bearer tok_abc123
3: GET /users

reqsh> rerun 3
```

## Features

| Feature               | Description                                                 |
| --------------------- | ----------------------------------------------------------- |
| **Persistent REPL**   | Base URLs and headers persist across requests in a session  |
| **Variables**         | Use `{{variable}}` syntax to interpolate values anywhere    |
| **History**           | Every command is recorded; rerun any past request instantly |
| **Save & Run**        | Name requests and replay them with one command              |
| **Case-insensitive**  | `get`, `GET`, `GeT` — all work the same                     |
| **Pretty output**     | JSON responses are auto-formatted and syntax-highlighted    |
| **Built-in timing**   | Every response shows its latency                            |
| **Multi-line bodies** | Build complex request bodies across multiple lines          |
| **Blazing fast**      | Written in Rust; launches in milliseconds                   |

## Commands Reference

| Command                            | Description                       |
| ---------------------------------- | --------------------------------- |
| `base <url>`                       | Set the session base URL          |
| `header <key> <value>`             | Add a persistent header           |
| `set <name> <value>`               | Set a session variable            |
| `GET/POST/PUT/PATCH/DELETE <path>` | Send an HTTP request              |
| `::send`                           | Fire the current request          |
| `save <name>`                      | Save the last request             |
| `run <name>`                       | Replay a saved request            |
| `history`                          | Show session history              |
| `rerun <id>`                       | Re-execute a command from history |
| `help`                             | Show command docs                 |
| `exit`                             | Quit the session                  |

## Installation

### macOS / Linux

```sh
curl -fsSL https://reqsh.dev/install.sh | sh
```

### From source (requires Rust)

```sh
git clone https://github.com/hars-21/reqsh.git
cd reqsh
cargo install --path .
```

### Pre-built binaries

Download the latest release for your platform from [GitHub Releases](https://github.com/hars-21/reqsh/releases).

## Documentation

Full docs at **[reqsh.dev/docs](https://reqsh.dev/docs)**

- [Installation](https://reqsh.dev/docs/install) - Platform-specific install instructions
- [Usage](https://reqsh.dev/docs/usage) - How to use reqsh
- [Commands](https://reqsh.dev/docs/commands) - Full command reference
- [Variables](https://reqsh.dev/docs/variables) - Variable interpolation
- [Changelog](https://reqsh.dev/docs/changelog) - Release history

## Community

- [GitHub Issues](https://github.com/hars-21/reqsh/issues) — Bug reports and feature requests
- [Releases](https://github.com/hars-21/reqsh/releases) — Binary downloads
- [Discussions](https://github.com/hars-21/reqsh/discussions) — Questions and ideas

## License

[MIT](https://github.com/hars-21/reqsh/blob/main/LICENSE)
