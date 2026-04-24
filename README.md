# Demo Native Federation

Small demo workspace showing a shell app that hosts two micro frontends:

- `shell`: Angular host application on port `4200`
- `mfe1`: Angular remote on port `4201`
- `mfe2`: React remote exposed as a custom element on port `4202`

## Stack

- Angular shell and Angular remote using native federation
- React remote built with Vite
- Bootstrap-based styling in the React app, with matching custom polish across all apps

## Run Locally

Install dependencies in each app:

```bash
cd shell && npm install
cd ../mfe1 && npm install
cd ../mfe2 && npm install
```

Start each app in a separate terminal:

```bash
cd shell && npm start
cd mfe1 && npm start
cd mfe2 && npm run serve
```

For local React development:

```bash
cd mfe2 && npm run dev
```

## Build

```bash
cd shell && npm run build
cd ../mfe1 && npm run build
cd ../mfe2 && npm run build
```

## Notes

- The shell dynamically loads remote configuration and renders both Angular and React experiences.
- The React remote includes lightweight in-app view switching to make demos feel closer to a real product flow.
- Root `.gitignore` excludes generated output, dependencies, and most editor-specific files.
