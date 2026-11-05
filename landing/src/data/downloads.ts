// The release the download section offers, and its files: named as packwing's
// scripts/package_*.sh name them. A new release changes VERSION only.

import { GITHUB_URL } from './site';

export const VERSION = '0.1.0';
export const RELEASE_URL = `${GITHUB_URL}/releases/tag/v${VERSION}`;
export const RELEASES_URL = `${GITHUB_URL}/releases`;

const file = (name: string) =>
  `${GITHUB_URL}/releases/download/v${VERSION}/${name}`;
const v = VERSION;

export type OsId = 'macos' | 'windows' | 'linux';

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
        note: 'x64 · .zip, to run from a folder',
        href: file(`packwing_${v}_windows_x86_64.zip`),
      },
    ],
    steps: [
      'Run the installer.',
      'Start packwing from the Start menu, or right-click a file in Explorer.',
      'pkw, the command line, is in your PATH: open a new terminal to use it.',
      'packwing tells you when a newer version is out, and installs it when you say so.',
    ],
    firstRun:
      'Not signed yet: SmartScreen may say "Windows protected your PC". Choose More info › Run anyway.',
  },
  {
    id: 'linux',
    name: 'Linux',
    requires: 'Debian, Ubuntu and their derivatives, amd64 or arm64',
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
    ],
    steps: [
      'Install the .deb with apt.',
      'Start packwing from your applications, or right-click a file in Nautilus, Dolphin, Nemo or Thunar.',
      'pkw, the command line, comes with its manual pages and completions for bash, zsh and fish.',
    ],
    firstRun:
      'Nautilus loads its extensions when it starts: run nautilus -q once for packwing’s items in its own menu.',
    commands: `curl -LO ${file(`packwing_${v}_amd64.deb`)}
sudo apt install ./packwing_${v}_amd64.deb
nautilus -q   # Nautilus loads extensions when it starts`,
  },
];

export const comingSoon: ComingSoon[] = [
  {
    id: 'macos',
    name: 'macOS',
    text: 'packwing for macOS is coming soon, with Finder’s right-click menu. For now, it builds from source.',
  },
];
