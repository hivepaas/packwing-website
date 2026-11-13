// The release the download section offers, and its files: named as packwing's
// release names them (docs/updates.md). A new release changes VERSION only.

import { GITHUB_URL } from './site';

export const VERSION = '0.1.0';
export const RELEASE_URL = `${GITHUB_URL}/releases/tag/v${VERSION}`;
export const RELEASES_URL = `${GITHUB_URL}/releases`;

const file = (name: string) =>
  `${GITHUB_URL}/releases/download/v${VERSION}/${name}`;
const v = VERSION;

export type OsId = 'macos' | 'windows' | 'linux' | 'cli' | 'ios' | 'android';

export interface Download {
  label: string;
  /** What it is, beside the label: the file's kind or the machine. */
  note: string;
  href: string;
  /** The one the big button offers for this system. */
  primary?: boolean;
}

export interface Os {
  id: OsId;
  name: string;
  requires: string;
  downloads: Download[];
  /** How to install it, in a few steps. */
  steps: string[];
  /** The first launch: what the system asks. */
  firstRun: string;
  /** Commands to paste, if any. */
  commands?: string;
}

/** A system with an app on the way: a tab that says so, and no files. */
export interface ComingSoon {
  id: OsId;
  name: string;
  text: string;
}

export const systems: Os[] = [
  {
    id: 'macos',
    name: 'macOS',
    requires: 'macOS 13 Ventura or later',
    downloads: [
      {
        label: 'Apple silicon',
        note: 'M1 and later · .dmg',
        href: file(`packwing_${v}_macos_aarch64.dmg`),
        primary: true,
      },
      {
        label: 'Intel',
        note: '.dmg',
        href: file(`packwing_${v}_macos_x86_64.dmg`),
      },
    ],
    steps: [
      'Open the .dmg.',
      'Drag packwing into Applications.',
      'Open it from Applications or Spotlight, or open an archive with it in Finder.',
    ],
    firstRun:
      'Signed and notarized by Apple. macOS asks once whether to open an app downloaded from the internet: choose Open.',
    commands: `# Or with Homebrew
brew install --cask hivepaas/tap/packwing`,
  },
  {
    id: 'windows',
    name: 'Windows',
    requires: 'Windows 10 or 11, x64',
    downloads: [
      {
        label: 'Installer',
        note: 'x64 · .exe, with pkw and the right-click menu',
        href: file(`packwing_${v}_windows_x86_64-setup.exe`),
        primary: true,
      },
      {
        label: 'Portable',
        note: 'x64 · .zip',
        href: file(`packwing_${v}_windows_x86_64.zip`),
      },
    ],
    steps: [
      'Run the installer: for everyone, into Program Files (Windows asks for an administrator), or for you alone.',
      'Start packwing from the Start menu, or right-click a file in Explorer.',
      'pkw, the command line, is in your PATH: open a new terminal to use it.',
      'Updates install themselves when you say so.',
    ],
    firstRun:
      'Not signed yet: SmartScreen may say "Windows protected your PC". Choose More info › Run anyway.',
  },
  {
    id: 'linux',
    name: 'Linux',
    requires:
      'glibc 2.35+ (Ubuntu 22.04, Debian 12, Fedora, openSUSE Leap 15.6 or newer), Wayland or X11',
    downloads: [
      {
        label: 'Debian / Ubuntu',
        note: 'amd64 · .deb',
        href: file(`packwing_${v}_amd64.deb`),
        primary: true,
      },
      {
        label: 'Debian / Ubuntu',
        note: 'arm64 · .deb',
        href: file(`packwing_${v}_arm64.deb`),
      },
      {
        label: 'Fedora / openSUSE',
        note: 'x86_64 · .rpm',
        href: file(`packwing_${v}_x86_64.rpm`),
      },
      {
        label: 'Fedora / openSUSE',
        note: 'aarch64 · .rpm',
        href: file(`packwing_${v}_aarch64.rpm`),
      },
    ],
    steps: [
      'Debian or Ubuntu: install the .deb with apt.',
      'Fedora: install the .rpm with dnf. openSUSE: with zypper.',
      'When a new version is out, the app shows the commands that install it, with its SHA-256.',
      'With the .deb, packwing’s items are in Nautilus’s own right-click menu: run nautilus -q once.',
    ],
    firstRun:
      'The .rpm is not signed: dnf warns and goes on, and zypper needs --no-gpg-checks.',
    commands: `# Debian / Ubuntu
curl -LO ${file(`packwing_${v}_amd64.deb`)}
sudo apt install ./packwing_${v}_amd64.deb

# Fedora
curl -LO ${file(`packwing_${v}_x86_64.rpm`)}
sudo dnf install ./packwing_${v}_x86_64.rpm

# openSUSE
curl -LO ${file(`packwing_${v}_x86_64.rpm`)}
sudo zypper --no-gpg-checks install ./packwing_${v}_x86_64.rpm`,
  },
  {
    id: 'cli',
    name: 'Command line',
    requires:
      'pkw alone, with no app: Linux with glibc 2.34+ (Ubuntu 22.04, Debian 12, RHEL 9 or newer), macOS 13 or later, Windows 10 or 11 x64',
    downloads: [
      {
        label: 'Linux',
        note: 'x86_64 · .tar.gz',
        href: file(`pkw_${v}_linux_x86_64.tar.gz`),
        primary: true,
      },
      {
        label: 'Linux',
        note: 'aarch64 · .tar.gz',
        href: file(`pkw_${v}_linux_aarch64.tar.gz`),
      },
      {
        label: 'macOS',
        note: 'Apple silicon · .tar.gz',
        href: file(`pkw_${v}_macos_aarch64.tar.gz`),
      },
      {
        label: 'macOS',
        note: 'Intel · .tar.gz',
        href: file(`pkw_${v}_macos_x86_64.tar.gz`),
      },
      {
        label: 'Windows',
        note: 'x64 · .zip',
        href: file(`pkw_${v}_windows_x86_64.zip`),
      },
    ],
    steps: [
      'For a server, a terminal over SSH or a script: the same pkw the app’s packages hold, alone.',
      'Unpack it and put pkw (pkw.exe on Windows) in a folder on your PATH.',
      'Its manual pages and its completions for bash, zsh and fish come with it; README.txt says where they go.',
      'With Homebrew, on macOS and Linux, one command installs it with its manual pages and completions, and brew upgrade updates it.',
      'Unpacked by hand, it does not update itself: a newer one is on the releases page.',
    ],
    firstRun:
      'On macOS pkw is signed and notarized, and runs from Terminal with no question. On Linux it needs only the C library. Try pkw --help.',
    commands: `# Homebrew (macOS and Linux)
brew install hivepaas/tap/pkw

# Linux x86_64
curl -LO ${file(`pkw_${v}_linux_x86_64.tar.gz`)}
tar -xzf pkw_${v}_linux_x86_64.tar.gz
mkdir -p ~/.local/bin
install -m 755 pkw_${v}_linux_x86_64/pkw ~/.local/bin/pkw

# macOS (Apple silicon)
curl -LO ${file(`pkw_${v}_macos_aarch64.tar.gz`)}
tar -xzf pkw_${v}_macos_aarch64.tar.gz
mkdir -p ~/.local/bin
install -m 755 pkw_${v}_macos_aarch64/pkw ~/.local/bin/pkw

~/.local/bin/pkw --version`,
  },
];

export const comingSoon: ComingSoon[] = [
  {
    id: 'ios',
    name: 'iOS',
    text: 'packwing for iPhone and iPad is coming soon, to open the archives you are sent.',
  },
  {
    id: 'android',
    name: 'Android',
    text: 'packwing for Android is coming soon, to open the archives you are sent.',
  },
];
