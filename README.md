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

## Environment variables

The contact form will not send without these. Copy `.env.example` to `.env` and
fill in the values from the [EmailJS dashboard](https://dashboard.emailjs.com):

```
VITE_APP_EMAILJS_SERVICE_ID=...
VITE_APP_EMAILJS_TEMPLATE_ID=...
VITE_APP_EMAILJS_PUBLIC_KEY=...
```

`.env` is gitignored. Note that Vite inlines these values into the bundle at
**build time**, so they are public by design — this is how EmailJS works from
the browser. Two consequences worth knowing:

- Restart the dev server after editing `.env`; Vite reads it on startup.
- Restrict the allowed domains in EmailJS (*Account → Security*) so nobody else
  can spend your quota from another site. Add `localhost` for local testing.

### EmailJS template

The template must set **To Email** to the destination address as a literal
value, not as a `{{variable}}`. Anything sent from the browser can be tampered
with in devtools, so a variable recipient would let anyone send mail to
arbitrary addresses through this account. Keep **Reply To** as `{{reply_to}}` so
replies reach whoever filled in the form.

Variables the app sends: `from_name`, `from_email`, `reply_to`, `to_name`,
`to_email`, `message`.

## Content

All the site copy lives in `src/constants/locales/` — one file per language
(`en.js`, `es.js`, `ja.js`), with the exact same key structure. Everything that
does not depend on language (icons, colors, links, tech stack) lives in
`src/constants/index.js` and is linked to the copy by `id`.

To add a language: create the locale file, register it in
`src/constants/locales/index.js` and add an entry to the `languages` array.

## Deployment

The repository is set up for GitHub Pages, and also works on Vercel. Pick one —
running both means two deployments competing for the same commits.

### GitHub Pages

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it. Required setup:

1. *Settings → Pages → Source*: *GitHub Actions*.
2. *Settings → Secrets and variables → Actions*: add the three
   `VITE_APP_EMAILJS_*` values as repository secrets.

The build copies `index.html` to `404.html` so direct routes resolve with
`BrowserRouter`, which GitHub Pages otherwise answers with a 404.

### Vercel

Import the repository from the Vercel dashboard; Vite is detected
automatically. Add the three variables under *Settings → Environment Variables*
and redeploy — Vercel does not rebuild on its own when variables change, and
since Vite inlines them at build time, the old bundle would keep shipping
without them.

Routing is handled by the rewrite rule in `vercel.json`. If you go this way,
delete `.github/workflows/deploy.yml`.

## Credits

Base template: [3D Developer Portfolio](https://github.com/adrianhajdin/project_3D_developer_portfolio)
by Adrian Hajdin (JavaScript Mastery).
