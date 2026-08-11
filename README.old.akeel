# TRL Evidence Planner
trl-evidence-planner

An interactive Technology Readiness Level calculator for product development teams. It helps teams assess TRL 1 to TRL 9 through evidence, testing conditions and maturity gates rather than selecting a level from a definition alone.

Created by **Akeel Munshi |** Global technology and transformation executive.

## What the guide does

The calculator lets a team:

- Select a Technology Readiness Level from 1 to 9.
- Choose its current phase: research, prototyping or commercialisation.
- Review the documentation expected at the selected level.
- Understand the appropriate testing environment.
- Track risk-mitigation milestones.
- Record evidence through a persistent checklist.
- Review common pitfalls that can overstate maturity.
- Generate level-and-phase-specific next steps.
- Copy a project summary or print the complete review.

Checklist progress is stored only in the user's browser. The application has no account, database, analytics service or server-side data store.

## How to use the guide

### 1. Select the current development phase

Choose the phase that best describes the work:

- **Research:** the team is establishing scientific principles, formulating the concept or proving a critical function.
- **Prototyping:** the team is integrating components and increasing the fidelity of the system and test environment.
- **Commercialisation:** the team is preparing for qualification, repeatable delivery, operational ownership and sustained use.

The phase changes the action plan shown in the Project Map.

### 2. Select the current TRL

Use the maturity rail to select TRL 1 through TRL 9. The selected level displays:

- A plain-language maturity statement.
- The decision that matters before proceeding.
- Required documentation.
- Testing-environment expectations.
- Risk-mitigation milestones.
- Common pitfalls.
- Exit evidence for the next maturity decision.

The rail can also be operated with a keyboard. Tab to the selected level, then use the left and right arrow keys. Home selects TRL 1 and End selects TRL 9.

### 3. Test the maturity claim against evidence

Mark a checklist item only when the evidence exists and is available for review. A plan to create a document is not the same as having the evidence.

The completion percentage covers the documentation and milestones for the selected TRL. Checklist progress is saved locally and remains available after the page is refreshed.

### 4. Review the testing environment

Check whether the conditions reflect the maturity claim. As the level increases, the evidence should move from analytical and laboratory conditions towards relevant and operational environments.

The environment should expose the assumptions most likely to fail when the technology enters a larger system.

### 5. Use the Project Map

The Project Map combines the selected TRL and development phase. It provides an ordered route for:

1. Confirming the present maturity claim.
2. Closing the next evidence gap.
3. Testing in the appropriate environment.
4. Reviewing the evidence with the accepting authority.

Use **Copy project summary** to place the current level, phase, evidence gaps and exit criteria on the clipboard. Use **Print review** to create a printable assessment record.

### 6. Confirm the applicable certification standard

This tool supports planning and review. It does not issue formal certification.

NASA provides the common nine-level TRL model used by the calculator. Formal evidence and acceptance requirements vary by organisation, sector, product and approving authority. Confirm those requirements before treating the checklist as a certification record.

## Technology used

The project uses a small Node.js build setup:

- **HTML5:** semantic page structure, controls, headings and accessibility landmarks.
- **CSS3:** responsive layout, TCI™ visual styling, print rules, focus states and reduced-motion support.
- **Vanilla JavaScript:** TRL content, evidence tracking, phase mapping, keyboard behaviour, persistence, summary copying and printing.
- **Node.js and npm:** local development, dependency management and production build commands.
- **Vite:** development server and optimised production build.
- **Web Storage API:** `localStorage` retains the selected level, phase and evidence checks on the current device.
- **Clipboard API:** copies the project summary when browser permissions allow it.
- **GitHub Actions:** publishes the built project to GitHub Pages when that hosting option is used.
- **Vercel configuration:** tells Vercel how to install, build and serve the project.

There is no client framework and no server-side database. Vite compiles the application into static production files in `dist/`. Vercel serves that output through its global delivery network.

## Project structure

```text
trl-calculator/
├── .github/
│   └── workflows/
│       └── pages.yml       # GitHub Pages deployment
├── .gitignore
├── README.md               # Project and user instructions
├── index.html              # Semantic application shell
├── styles.css              # Responsive TCI interface
├── app.js                  # TRL data and application behaviour
├── package.json            # Node.js dependencies and npm commands
└── vercel.json             # Vercel build and output settings
```

## How the code works

### TRL data

`app.js` contains a `levels` array with one object for every TRL. Each object holds:

- Level number and maturity family.
- Title, definition and next decision.
- Testing-environment guidance.
- Documentation checklist.
- Risk-mitigation milestones.
- Common pitfalls.
- Exit evidence.

The `phaseGuidance` object contains the research, prototyping and commercialisation planning logic.

### Application state

The browser stores three local values:

- `trl-current-level`
- `trl-current-phase`
- `trl-evidence-state`

Saved values are validated when the application starts. Invalid or malformed values fall back safely to the default view.

### Rendering

The interface is rendered from the selected level and phase. Changing either selection updates the maturity statement, evidence ledger, testing environment, pitfalls and Project Map without reloading the page.

### Accessibility

The interface includes:

- Semantic headings and landmarks.
- An ARIA radio group for the TRL rail.
- Roving keyboard focus across the nine maturity levels.
- Visible focus indicators.
- Full-row evidence targets suitable for touch use.
- Colour-independent status labels.
- Reduced-motion support.
- Responsive layouts for desktop, tablet and mobile.

## Requirements

- Node.js 20 or later
- npm, which is supplied with Node.js

Check the installed versions:

```bash
node --version
npm --version
```

## Run locally

Open Terminal and move into the project folder:

```bash
cd "/Users/akeelmunshi/Documents/Jobs/newsletter/trl-calculator"
```

Install the project dependency:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will display a local address, normally:

```text
http://localhost:5173/
```

## Create a production build

Run:

```bash
npm run build
```

The production files are written to:

```text
dist/
```

Test that build locally with:

```bash
npm run preview
```

## Deploy to Vercel

### Deploy from GitHub

1. Push this project to a GitHub repository.
2. Sign in at [vercel.com](https://vercel.com/) using GitHub.
3. Select **Add New → Project**.
4. Import the `trl-evidence-planner` repository.
5. Vercel should detect **Vite** as the framework.
6. Confirm these settings:

   ```text
   Install command: npm install
   Build command: npm run build
   Output directory: dist
   ```

7. Select **Deploy**.
8. When the build finishes, Vercel will provide a public address ending in `.vercel.app`.

Every later push to the connected production branch triggers a fresh Vercel deployment.

### Optional deployment with the Vercel CLI

Install the command-line tool:

```bash
npm install --global vercel
```

Sign in and create a preview deployment:

```bash
vercel
```

Publish to production:

```bash
vercel --prod
```

## Deploy with GitHub Pages

The included workflow publishes the repository as a static GitHub Pages site.

1. Create or choose a GitHub repository.
2. Place the contents of this directory at the repository root.
3. Push the files to the `main` branch.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, select **GitHub Actions** as the source.
6. Open the **Actions** tab and confirm that the `Deploy TRL Evidence Planner to GitHub Pages` workflow completes.
7. The public address will normally follow this pattern:

   ```text
   https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/
   ```

Every later push to `main` automatically republishes the site.

## Updating the guide

### Change TRL content

Edit the relevant object in the `levels` array in `app.js`. Keep each claim consistent with the maturity boundary for that level.

### Change phase guidance

Edit `phaseGuidance` in `app.js`. The final Project Map combines this phase material with evidence from the selected TRL.

### Change the design

Edit the custom properties at the top of `styles.css`. The current colours follow the Transformation Confidence Index™ brand:

- Midnight Navy: `#031122`
- Deep Blue: `#071C31`
- Amber Gold: `#E9A01B`
- Warm Ivory: `#F4F1EA`
- Muted Steel: `#C9D1D7`

## Verification before publishing

Recommended checks:

```bash
node --version
node --check app.js
npm install
npm run build
```

The production build should finish without errors and create the `dist/` directory.

Then open the Vite development or preview address and confirm that:

- All nine TRL controls load.
- Phase selection changes the Project Map.
- Evidence selections survive a refresh.
- Copy and print actions work.
- The layout works at desktop and mobile widths.
- The browser console contains no errors.

## Evidence boundary

The guidance is based on the general Technology Readiness Level model and technology-assessment discipline. It is not a substitute for the evidence requirements of a specific regulator, customer, acquisition authority or internal governance body.

## Sources

- [NASA, Technology Readiness Levels](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/)
- [U.S. Government Accountability Office, Technology Readiness Assessment Guide, GAO-20-48G](https://www.gao.gov/products/gao-20-48g)

## Author

**Akeel Munshi**  
Global technology and transformation executive
