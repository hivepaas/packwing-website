// Addresses the landing site links to from more than one page.

export const SITE_URL = 'https://packwing.app';
export const GITHUB_URL = 'https://github.com/hivepaas/packwing';
export const HIVEPACK_URL = 'https://github.com/hivepaas/hivepack-rs';
export const HIVEPAAS_URL = 'https://hivepaas.com';
export const SHELLWING_URL = 'https://shellwing.app';
export const TRACEWING_URL = 'https://tracewing.app';
// Whether /pricing is offered: in the navbar, the footer and the sitemap, and to
// search engines. Hidden for now, until the portal sells licenses; the page is
// still built, as the app's Settings › License opens it for Buy and Renew.
export const SHOW_PRICING = false;

// packwing on the Mac App Store, and whether the site offers it: in the macOS
// downloads and the FAQ. Off until Apple has approved the app, as the link
// leads nowhere before.
export const APP_STORE_URL = 'https://apps.apple.com/app/id6834744685';
export const SHOW_APP_STORE = false;

// Where a license is bought, renewed and tried: HivePaaS's portal, with Paddle
// as the merchant of record.
export const PORTAL_PRICING_URL =
  'https://portal.hivepaas.com/pricing/packwing';

// The repository's docs.
export const BUILD_DOC_URL = `${GITHUB_URL}#readme`;
export const POLICIES_DOC_URL = `${GITHUB_URL}/blob/main/docs/policies.md`;
export const UPDATES_DOC_URL = `${GITHUB_URL}/blob/main/docs/updates.md`;
export const LICENSE_URL = `${GITHUB_URL}/blob/main/LICENSE`;
export const CONTRIBUTING_URL = `${GITHUB_URL}/blob/main/CONTRIBUTING.md`;

// Where people write to us: support, and questions about privacy.
export const SUPPORT_EMAIL = 'tiendc.hp@gmail.com';
export const ISSUES_URL = `${GITHUB_URL}/issues`;

// The hive's products, for the navbar's Products menu and the footer: this
// site's own app is left out of them, the rest link to their own sites.
// The icons are their app icons, in public/products/.

export interface Product {
  id: string;
  name: string;
  href: string;
  icon: string;
  tagline: string;
  description: string;
}

// This site's own app, so the menu can leave it out.
export const PRODUCT_ID = 'packwing';

export const PRODUCTS: Product[] = [
  {
    id: 'shellwing',
    name: 'shellwing',
    href: SHELLWING_URL,
    icon: '/products/shellwing.svg',
    tagline: 'SSH client',
    description:
      'Tabs, split panes, SFTP and port forwarding in a GPU-rendered terminal, with an encrypted vault that syncs between your devices.',
  },
  {
    id: 'tracewing',
    name: 'tracewing',
    href: TRACEWING_URL,
    icon: '/products/tracewing.svg',
    tagline: 'HTTP debugging proxy',
    description:
      'See, pause and change every request your mobile apps, desktop apps, servers and AI agents make — what DevTools cannot reach.',
  },
  {
    id: 'packwing',
    name: 'packwing',
    href: SITE_URL,
    icon: '/products/packwing.svg',
    tagline: 'File archiver',
    description:
      'ZIP, 7z, tar.xz and tar.zst made and opened on all of your cores at once. RAR, disc images and age files, opened safely.',
  },
  {
    id: 'hivepaas',
    name: 'HivePaaS',
    href: HIVEPAAS_URL,
    icon: '/products/hivepaas.svg',
    tagline: 'Self-hosted PaaS',
    description:
      'Deploy your apps on your own servers: a lightweight platform on Docker Swarm, open source, with no vendor lock-in.',
  },
];
