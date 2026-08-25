# Portfolio — Harvey Vilchez

Interactive 3D personal portfolio. Systems Engineer (UNI), backend developer in
.NET, Laravel and SQL Server, with experience in corporate ERP systems for the
port and financial sectors.

🔗 https://kal-024.github.io

Available in English, Spanish and Japanese.

## Stack

React 18 · Vite · Three.js (`@react-three/fiber` + `drei`) · Tailwind CSS ·
EmailJS · React Router.

## Development

```bash
npm install
npm run dev
```

Create a `.env` file in the root with the EmailJS credentials (the contact form
will not send without them):

```
VITE_APP_EMAILJS_SERVICE_ID=...
VITE_APP_EMAILJS_TEMPLATE_ID=...
VITE_APP_EMAILJS_PUBLIC_KEY=...
```

## Content

All the site copy lives in `src/constants/locales/` — one file per language
(`en.js`, `es.js`, `ja.js`), with the exact same key structure. Everything that
does not depend on language (icons, colors, links, tech stack) lives in
`src/constants/index.js` and is linked to the copy by `id`.

To add a language: create the locale file, register it in
`src/constants/locales/index.js` and add an entry to the `languages` array.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. The EmailJS credentials are injected at build
time from repository secrets.

The build also copies `index.html` to `404.html` so that direct routes work with
`BrowserRouter` on GitHub Pages.

## Credits

Base template: [3D Developer Portfolio](https://github.com/adrianhajdin/project_3D_developer_portfolio)
by Adrian Hajdin (JavaScript Mastery).
