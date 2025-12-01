### My First LLM-powered Application with Vercel – Frontend

This is a Vite + React + TailwindCSS frontend that talks to your FastAPI backend running at `http://localhost:8000`. It gives you a modern, glassy control surface where each backend endpoint is represented as a beautiful interactive card.

---

### Tech Stack

- **React + Vite (TypeScript)** for a fast, DX-friendly SPA.
- **TailwindCSS** for utility-first styling and subtle animations.
- **shadcn-style UI components** for buttons and dialogs.

---

### Prerequisites

- Node.js 18+ and npm installed.
- The backend running locally on `http://localhost:8000` (see `api/README.md`).

---

### Environment configuration

Create a `.env` file in the `frontend` directory (or copy from `.env.example` once present) and set the backend base URL:

```bash
VITE_API_BASE_URL=http://localhost:8000
```

If you omit this, the app will automatically default to `http://localhost:8000`.

---

### Install dependencies

From the repository root:

```bash
cd frontend
npm install
```

---

### Run the frontend locally

From the `frontend` directory:

```bash
npm run dev
```

Then open the URL that Vite prints (typically `http://localhost:5173`) in your browser.

Make sure your FastAPI backend is running at the same time:

```bash
uv run uvicorn api.index:app --reload
```

---

### How the UI works

- The list of backend endpoints is defined in `src/config/endpoints.ts`.
- The landing page reads this list and **automatically renders** a responsive grid of cards.
- Clicking a card opens a modal dialog and calls the corresponding FastAPI endpoint, showing:
  - loading state
  - error messages (if any)
  - pretty-printed JSON or text response

You can tweak the endpoint list or styling without touching the main app logic.

---

### Production / Vercel deployment

To generate a production build:

```bash
cd frontend
npm run build
```

The output will be in the `dist` folder, which you can deploy to Vercel. Configure `VITE_API_BASE_URL` as an environment variable in your Vercel project so the frontend knows where to find the backend.
