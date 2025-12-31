# CareerGraph - Agentic AI Career Assistant

A LinkedIn-inspired professional network UI built for the "Agentic AI" hackathon track.

## Features
- **Feed**: Daily rotation of mock posts with randomized seed.
- **Agentic Assistant**: AI-powered career planning dashboard.
- **Jobs**: Job board with filters and detailed view.
- **Network**: Connection management and recommendations.
- **Profile**: Full profile view with tabs.
- **Messaging**: Functional chat UI.
- **Analytics**: Career stats dashboard.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: lucide-react
- **Animation**: Framer Motion
- **Mock Data**: Custom deterministic generator

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure
- `app/`: Next.js App Router pages
- `components/`: Reusable UI components
  - `layout/`: AppShell, Sidebar, TopBar
  - `feed/`: Post architecture
  - `home/`: Right panel logic
  - `jobs/`, `ui/`: specific feature components
- `lib/`: Mock data generators and utilities
