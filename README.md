# packwing-website

The website of [packwing](https://github.com/hivepaas/packwing), at
[packwing.hivepaas.com](https://packwing.hivepaas.com): a landing page built with
[Astro](https://astro.build), in `landing/`.

```sh
yarn install
yarn dev            # http://localhost:3200
yarn build          # landing/dist
yarn lint
```

- **Screenshots.** The pictures in `landing/public/shots/` are the app's own, dark,
  as packwing draws them with `cargo test -p packwing --features shots shots`
  (`target/shots/*-dark.png`), resized to 1600×1000 and saved as WebP. Only ones
  that show no path of the machine they were made on.
- **Images.** `cd landing && node og/render.mjs` renders `og/og-image.svg`, with the
  hero's screenshot, to `public/og-image.png`, and the logo to the favicons.
- **Downloads.** `landing/src/data/downloads.ts` names the release's files as
  packwing's releases name them (packwing's `docs/updates.md`): a new release changes
  `VERSION`.
- **Release.** A tag `vX.Y.Z` builds the image (nginx serving the static site on 3200) and pushes it to `ghcr.io/hivepaas/packwing-website`.
