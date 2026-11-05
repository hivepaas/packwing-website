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
    question: 'How does it update?',
    answer:
      'Once a day it looks for a newer version, in a list it believes only when its signatures verify, and a badge says so. Nothing is downloaded or installed until you ask, and the daily look can be turned off.',
  },
];
