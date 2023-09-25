
# Qwik City App ⚡️

- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik GitHub](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)

---

## Roadmap
1. Integrate with CMS Wordpress
2. Integrate with LDAP (main portal)
3. PWA Support

content:
a. load Artikel Harian Perpus
b. Link Menu to LMS
c. Link Menu to Lib SLiMS
d. load Galeri Kegiatan Harian Perpus
e. Tim Perpus


## Reference
https://www.tailwindawesome.com/resources/bright/demo
https://www.tailwindawesome.com/resources/banter/demo
https://cdn.dribbble.com/users/3005802/screenshots/15141571/dribbble_-_mockup.png
https://www.google.com/search?sca_esv=568251480&sxsrf=AM9HkKlKTtBbN3rtJW_uu3k8elFei7p43A:1695666832160&q=kindergarten+landing+page&tbm=isch&source=lnms&sa=X&ved=2ahUKEwicvsCZs8aBAxXZyDgGHYlzD4QQ0pQJegQIDRAB&biw=824&bih=583&dpr=0.9#imgrc=iivpcZSDV6GheM

## Project Structure

This project is using Qwik with [QwikCity](https://qwik.builder.io/qwikcity/overview/). QwikCity is just an extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory-based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.builder.io/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Add Integrations and deployment

Use the `bun qwik add` command to add additional integrations. Some examples of integrations includes: Cloudflare, Netlify or Express Server, and the [Static Site Generator (SSG)](https://qwik.builder.io/qwikcity/guides/static-site-generation/).

```shell
bun qwik add # or `yarn qwik add`
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
npm start # or `yarn start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
bun preview # or `yarn preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
bun build # or `yarn build`
```
