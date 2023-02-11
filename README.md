# BBS.io Reader

## Work in Progress

This application will serve as an Email and Message Board reader for use mainly
with BBS services. Currently working on setting up build/release automation.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
  - [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)
  - [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
  - [Rome](https://marketplace.visualstudio.com/items?itemName=rome.rome)

## Why?

Starting this as a project as most qwk and nntp readers generally suck and/or
are antiquated. Thunderbird is all but completely unusable with NNTP +
Synchronet and QWK Readers are also somewhat dated, and I found multimail didn't
work correctly for me out of the box.

I want a GUI based message reader for BBS message boards with a modern UI/UX.
I'm using Rust on the backend to learn the language, and because I think it's a
good choice, generally speaking. I'm using Tauri with a browser based UI because
I'm very comfortable with browser based UI/UX and want to reduce the friction on
the UI from what I will experience in learning the backend.

I will make a best effort to write clear, discoverable code. This project may or
may not follow _best practices_. On the backend, because I'm learning as I go.
On the frontend, because I'm probably going to be taking shortcuts as a faster
path to done.

I do want to get automated builds first, because as a user, I prefer to have
access to regular releases of software. If I handle this first, it will make it
easier for users. I probably won't try to integrate into any release prospects
until after I have an MVP of NNTP and Email (SMTP/POP) at the very least. I will
be testing this against my own BBS, which runs Synchronet. I may also create
extended support for some services specifically with Synchronet (ANSI User Icons
and Polls).

Longer term, after MVP, but before enhanced rendering I will make an effort to
get updating releases into the various stores for OS use... I will likely limit
Linux to Flathub and possibly Snapcraft, but unlikely to do any distro
integration beyond this.

### TODO

High level TODO list. Note: Anything before 1.0 can have breaking changes at any
time regardless of the version.

- [x] Release Tracking (release-please)
- [ ] React + MUI front end
  - BBS Configuration Entry
- [ ] Communication to/from Rust backend
  - Save/Load BBS Configuration Entries
  - Figure out settings/data path(s)
  - SQLite in Rust
- [ ] NNTP Group List
- [ ] NNTP Group Subscribe
- [ ] NNTP Fetch Headers/Bodies
- [ ] Display Message List (flat)
  - Classic 3-pane layout
  - Groups/Forums on left
  - Message List on upper-right
  - Message+Header lower-right
- [ ] Display Message Header
- [ ] Display Message (flat/plain text)
- [ ] Purge Old/Read Support
  - Database vaccuum
- [ ] Github Release Binaries (0.5.x)
  - Windows
    - x86_64 (msi, exe)
    - x86_64 offline (include web component, large) (msi, exe)
  - Mac
    - x86_64 (dmg, .app.tgz)
    - aarch64 (dmg, .app.tgz)
  - Linux
    - x86_64 AppImage
    - x86_64 .deb
    - armv7 AppImage
    - armv7 .deb
    - aarch64 AppImage
    - aarch64 .deb
- [ ] Automated updates (0.6.x)
- [ ] E-Mail (smtp/pop) (0.7.x)
- [ ] Enhanced rendering (ansi/colors, etc) (0.8.x)
- [ ] MVP Release v1.0
  - automated updates
  - Will test in v0.9.x and Push 1.0 when working/tested
- [ ] Store integrations
  - WinGet
  - Windows Store
  - Apple Mac Store
  - Flathub
  - Snapcraft?
- [ ] QWK Support
- [ ] FTP for QWK
- [ ] Message Attachments

## License

MIT License
