# DevOps Engineer Portfolio Dashboard

A responsive single-page portfolio built with **React + Vite** and designed to be deployed on **AWS Amplify Hosting** from a **GitHub** repository. It is a learning project for the assignment *"Deploy React frontend on AWS Amplify."*

## 1. What the application does

A one-page website with these sections: **Home**, **About** (DevOps, cloud computing, automation), **Skills**, **Projects**, **Contact** and a **Footer**. A responsive navigation bar collapses into a hamburger menu on mobile.

- No backend, database, API keys or environment variables are needed.
- The **contact form is a frontend demonstration only**. It does not send messages anywhere (a static site has no server to receive them).
- All names, emails and links are **placeholders**. Replace them in `src/components/Contact.jsx` and the other component files.
- The page uses in-page anchors (`#about`, `#skills`, ...) instead of a router, so **no Amplify rewrite rule is required**.

## 2. Project folder structure

```
devops-portfolio/
├── index.html              # HTML entry point Vite builds from
├── package.json            # Dependencies and npm scripts
├── package-lock.json       # Created by npm install; commit it
├── vite.config.js          # Vite settings (output folder: dist)
├── amplify.yml             # AWS Amplify build instructions
├── .gitignore              # Files Git must not track
├── README.md
└── src/
    ├── main.jsx            # Starts React and mounts <App />
    ├── App.jsx             # Assembles all sections
    ├── index.css           # All styling (responsive)
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── SectionHeading.jsx
```

## 3. Install Node.js and npm

Check first:

```bash
node -v
npm -v
```

If either command fails:

- **Windows 11:** download the **LTS** installer from https://nodejs.org, run it with default options, then **close and reopen** your terminal.
- **Ubuntu (WSL):**
  ```bash
  sudo apt update
  sudo apt install -y curl
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt install -y nodejs
  ```

npm is installed together with Node.js. Use Node 18 or newer.

## 4. Run locally

```bash
cd devops-portfolio
npm install
npm run dev
```

Open the address shown (usually http://localhost:5173). Press `Ctrl + C` to stop.

## 5. Test the production build locally

```bash
npm run build
npm run preview
```

`npm run build` creates the `dist/` folder, the same one Amplify publishes. `npm run preview` serves it at http://localhost:4173 so you can check what will be deployed.

## 6. Create a GitHub repository and push the code

1. On https://github.com click **New repository**, name it `devops-portfolio`, leave it empty (no README, no .gitignore) and click **Create repository**.
2. In your project folder:

```bash
git init
git add .
git commit -m "Initial commit: DevOps portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/devops-portfolio.git
git push -u origin main
```

Make sure `package-lock.json` is committed (`git status` should not list it as untracked). `node_modules/` and `dist/` are ignored on purpose.

## 7. Deploy with AWS Amplify Hosting

1. Sign in to the **AWS Console** and open **AWS Amplify**.
2. Click **Create new app** (or **Deploy an app**) and choose **GitHub** as the source, then **Next**.
3. Authorize AWS Amplify to access GitHub and pick your account and the `devops-portfolio` repository.
4. Select the branch **`main`**.
5. On the build settings page, Amplify detects a Vite/React app and shows the contents of `amplify.yml`. Confirm the build command is `npm run build` and the output directory is `dist`.
6. Click **Next**, review, then **Save and deploy**.
7. Wait for the pipeline steps **Provision → Build → Deploy → Verify** to turn green.

Menu names can shift slightly as AWS updates the console; the flow stays the same.

## 8. How Amplify uses `amplify.yml`

When a build starts, Amplify looks for `amplify.yml` in the repository root and follows it:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci              # install exact dependency versions from package-lock.json
    build:
      commands:
        - npm run build       # runs "vite build" and creates dist/
  artifacts:
    baseDirectory: dist       # the folder to publish
    files:
      - '**/*'                # everything inside it
  cache:
    paths:
      - node_modules/**/*     # speeds up later builds
```

Amplify then uploads the contents of `dist/` to its hosting service. If `amplify.yml` is missing, Amplify falls back to the build settings you entered in the console.

## 9. Find the deployed URL

Open your app in the Amplify console. The **Overview** page shows the **Domain** link, in the form `https://main.<app-id>.amplifyapp.com`. Click **Visit deployed URL** to open it.

## 10. Automatic deployments

Amplify watches the connected branch. After the first setup:

```bash
git add .
git commit -m "Update portfolio text"
git push
```

Each push to `main` starts a new build and publishes it automatically. Open the app in Amplify to follow the progress and see the history. You can also redeploy an earlier version from that history.

## 11. The deployment workflow

```
Developer writes React code
  → pushes code to GitHub
  → AWS Amplify detects the change
  → Amplify installs dependencies (npm ci)
  → builds the React application (npm run build)
  → publishes the generated files (dist/)
  → application becomes accessible through the Amplify URL
```

**Building on Amplify vs. running in the browser**

- **Build time (on Amplify's servers):** Node.js and npm run. They turn your JSX, imports and CSS into plain, optimized HTML, CSS and JavaScript files in `dist/`. This happens once per push.
- **Run time (in the visitor's browser):** Node.js is not involved. The browser downloads the static files from Amplify and runs the JavaScript itself. Nothing on the hosting side executes your code, which is why no server, database or API is needed.

## 12. Troubleshooting build failures

| Problem | Likely cause and fix |
|---|---|
| `npm ci` fails: "package-lock.json not found" or out of sync | Run `npm install` locally, commit and push `package-lock.json`. |
| `vite: not found` | Dependencies were not installed. Check the `preBuild` step in `amplify.yml`. |
| Build passes locally, fails on Amplify | Node version difference. In Amplify, open **Hosting → Build settings** and set the build image/Node version (use Node 18 or newer). |
| Import error such as "Could not resolve ./components/Navbar.jsx" | File names are case-sensitive on Linux. Match the exact case and the `.jsx` extension. |
| Site loads but is blank | Output folder wrong. It must be `dist`, not `build`. Check the browser console (F12). |
| Old content still shows | Hard refresh with `Ctrl + Shift + R`, and confirm the latest build finished successfully. |
| `git push` rejected | Run `git pull --rebase origin main`, then push again. |

Open the failed build in Amplify and read the **Build** log. The first red error line is usually the real cause.

## Deployment checklist

- [ ] `npm install` and `npm run dev` work locally
- [ ] `npm run build` creates `dist/` without errors
- [ ] `package-lock.json` is committed
- [ ] Code pushed to the `main` branch on GitHub
- [ ] Amplify app created, GitHub authorized, repository and `main` branch selected
- [ ] Build settings show `npm run build` and `dist`
- [ ] Build pipeline finished (Provision, Build, Deploy, Verify)
- [ ] Amplify URL opens and the mobile menu works
- [ ] Test a change: edit text, push, and watch the automatic redeploy
