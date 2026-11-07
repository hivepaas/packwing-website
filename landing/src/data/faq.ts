// The home page's questions: shown by FAQ.astro, and given to search engines
// as a FAQPage (index.astro). Plain text, as JSON-LD needs.

export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: 'Is packwing free?',
    answer:
      'packwing is free software under the GPL-3.0: the source is on GitHub, and you can build it, change it and share it.',
  },
  {
    question: 'Does packwing use all of my cores?',
    answer:
      "Yes. ZIP, 7z, .tar.gz, .tar.xz, .tar.zst and .tar.bz2 are compressed on every core at once. What is written in pieces (by packwing, xz -T, pzstd, pbzip2 or 7-Zip) is read on every core, as is any bzip2 file and a macOS package; ZIP and RAR archives' files and 7z's solid blocks are extracted several at once, and a tar archive's files are written while it is read. A .tar.zst of 256 MiB or more is made in frames that every core opens at once. The archive is the same, byte for byte, however many cores made it. The threads take no more than 70% of the memory free, and leave at least 2 GB of it to everything else, and Settings › General, or pkw --threads N, sets how many.",
  },
  {
    question: 'What does "opens archives safely" mean?',
    answer:
      'Nothing is written outside the folder you extract to, or through a link in the archive. An archive bomb stops at a size limit. A file that is already there is never written over unless you say so. A file opened from an archive opens as a copy in a temporary folder, after asking, and a program always asks first. On Windows and macOS, what came from the Internet keeps its mark when extracted, so the system still warns before running it.',
  },
  {
    question: 'Which formats does it open and write?',
    answer:
      'It opens ZIP (split archives too), RAR 1.4 to 7 (volumes too), 7z, tar, cpio, ISO 9660 and UDF disc images, RPM packages and macOS packages, inside gzip, zstd, xz, bzip2 and other layers, and .age files. It writes ZIP, 7z, .tar.gz, .tar.xz, .tar.zst and .age, with AES-256 on ZIP and 7z, and parts as 7-Zip cuts them.',
  },
  {
    question: 'Can I make backups with it?',
    answer:
      "Yes. When you ask, a tar archive keeps each file's owner and group and its extended attributes (Linux's ACLs among them), and holds a file with several names once. Extracting gives them back when Settings › Extracting, or pkw extract --same-owner --xattrs, says so; only an administrator gives files to other users. An archive to share leaves them out, so it does not name its users. pkw create --mtime, or SOURCE_DATE_EPOCH, gives the same files the same archive.",
  },
  {
    question: 'Can I use it without the window?',
    answer:
      'Yes. pkw is packwing for the terminal, a server over SSH or a script: it lists, extracts, tests, makes, changes and converts archives, signs and verifies files, makes and checks checksums, and copies to and from your storages, with JSON output and exit codes that say what went wrong.',
  },
  {
    question: 'Where are my passwords kept?',
    answer:
      'An archive’s password is kept in memory while you use it, and forgotten ten minutes after its last use; it is never written down. The secrets of your storages (S3, WebDAV, SFTP) are kept in the system’s keychain.',
  },
  {
    question: 'Can my organization set it up?',
    answer:
      'Yes. Group Policy on Windows, a configuration profile on macOS, or a file in /etc on Linux can keep the Internet mark, require encryption, and set which kinds of passwords are allowed and how long they have to be. The settings they fix show as locked.',
  },
  {
    question: 'How do I install it, and how does it update?',
    answer:
      'Download it for your system above: a .dmg for macOS, an installer for Windows, an AppImage, a .deb or an .rpm for Linux. Once a day packwing looks for a newer version, in a list it believes only when its signatures verify, and a badge says so; nothing is downloaded or installed until you ask. The .dmg app, the Windows installer and the AppImage update themselves when you say so; for a .deb or an .rpm, the app shows the commands. The Windows installer is not signed yet, so SmartScreen asks you to allow it the first time.',
  },
  {
    question: 'Is there a mobile app?',
    answer:
      'Coming soon, for iOS and Android, to open the archives you are sent.',
  },
];
