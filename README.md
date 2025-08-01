# QuoteNoJutsu

**QuoteNoJutsu** is a simple and stylish anime quote generator built with **Next.js 13+ App Router**, **Tailwind CSS**, and a serverless API route. It displays a random anime quote from a curated external API and offers a cute, pastel-themed UI.

---

## Features

- Random anime quote fetched via an API proxy  
- Responsive and elegant UI built with Tailwind CSS  
- Custom font and soft color palette for an anime-inspired aesthetic  
- Button to fetch a new quote without reloading  
- Built with modern web technologies (Next.js, React Hooks, ES Modules)

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/dabby12/QuoteNoJutsu.git
cd QuoteNoJutsu

# Install dependencies
pnpm install

# Run the development server
pnpm run dev
````

Then open `http://localhost:3000` in your browser.

---

## Project Structure

```bash
/app
  ├── api
  │     └── quote
  │         └── route.ts       # Internal API route fetching from external API
  └── page.tsx                 # Main UI component (Client Component)
tailwind.config.js            # Tailwind CSS configuration
package.json                  # Project metadata and scripts
```

---

## Styling and UI

- Theme: Pastel tones, rounded corners, soft shadows
- Typography: Uses `M PLUS Rounded 1c` for a modern, anime-inspired look
- Fully responsive layout
- Designed to feel light, cute, and minimal

---

## API Integration

`/api/quote` proxies a request to:

```bash
https://yurippe.vercel.app/api/quotes?random=1
```

It returns a JSON object like:

```json
{
  "quote": "People’s lives don’t end when they die. It ends when they lose faith.",
  "character": "Itachi Uchiha",
  "show": "Naruto"
}
```

This setup avoids CORS issues and simplifies client-side fetch logic.

---

## Pull Requests

Contributions are welcome! If you'd like to fix a bug, improve styling, or add new features:

1. Fork the repository
2. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```

3. Make your changes and commit:

   ```bash
   git commit -m "Add feature"
   ```

4. Push to your fork:

   ```bash
   git push origin feature-name
   ```

5. Open a pull request to `main` with a clear description.

Please follow the existing code style and keep pull requests focused and concise.

---

## Potential Improvements

| Feature         | Description                                              |
| --------------- | -------------------------------------------------------- |
| Text animation  | Animate quote appearance using Anime.js or Framer Motion |
| Dark mode       | Toggle between light and dark pastel themes              |
| Sakura overlay  | Add visual effects like falling petals                   |
| Shareable image | Export the quote as a downloadable image                 |
| Social sharing  | Twitter/X or Threads integration                         |
| Local history   | View previously fetched quotes                           |

---

## Motivation

This project is ideal for:

- Practicing with the Next.js 13 App Router
- Building a lightweight full-stack app using serverless functions
- Adding a themed project to a portfolio or a submission for events like Hack Club Shells

---

## License

MIT License — feel free to reuse or modify for your own anime-themed tools, utilities, or learning purposes
