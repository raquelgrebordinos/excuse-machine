This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Product Spec: The Excuse Machine 🐕📚
Overview
The Excuse Machine is a lighthearted web app where anyone can submit creative excuses for
late assignments and vote on their favorites. The best excuses rise to the top. Think of it as
Reddit meets "the dog ate my homework.
"
Core User Stories

1. As a user, I want to submit an excuse so I can share my creative explanation for a late
   assignment.
   ○
   Required fields: Excuse text
   ○
   Excuses are timestamped on submission
   ○
   New excuses start with 0 votes
2. 3. As a user, I want to see all excuses ranked by votes so I can enjoy the most creative
      ones.
      ○
      ○
      Display: Excuse text, vote count
      Sorted by votes (highest first)
      As a user, I want to upvote excuses I like so the best ones rise to the top.
      ○
      One-click upvote
      ○
      No downvotes (keep it positive)
      Data Model (Suggested)
      None
      Excuse
      ├── id (primary key)
      ├── excuse_text (text)
      ├── votes (integer, default 0)
      └── created_at (timestamp)
      Technical Requirements
      ●
      Framework: Next.js
      ●
      ●
      ●
      ●
      Database: PostgreSQL via Neon
      ORM: Prisma
      Deployment: Vercel
      Auth: None required for MVP
      Screens (Minimum Viable)
      Single Page App:
      ●
      ●
      ●
      Submit form at top (excuse text)
      List of all excuses below, sorted by votes
      Upvote button on each excuse
      Out of Scope for MVP
      ●
      ●
      ●
      ●
      ●
      User accounts / authentication
      Editing or deleting excuses
      Downvotes
      Preventing multiple votes from same person
      Rich text formatting
      Stretch Goals (Time Permitting)
3. 2. 3. 4. 5. 6. 7. Clever SSO Integration - Add login, track who submitted/voted
                     Stylings - Use Dewey3 components or add custom stylings to make your app pop
                     AI Excuse Enhancement - Button to "make this excuse more creative" using an LLM
                     Excuse Templates - Pre-filled excuse starters for inspiration
                     Vote limiting - Prevent spam voting (localStorage or IP-based)
                     Clever Data API - Pull actual class/assignment info if connected
                     Experiment with Adversarial AIs - Try having another agent (Claude, Copilot, etc.)
                     review the code
                     Success Criteria
                     App is deployed and accessible via public URL
                     Users can submit excuses
                     Users can upvote excuses
                     Excuses display sorted by vote count
                     Data persists in database
                     Sample Excuses for Seeding
                     ●
                     ●
                     ●
                     "My dog didn't eat my homework, but he did sit on my laptop and accidentally
                     mass-deleted my files while dreaming about squirrels.
                     "
                     "I was abducted by aliens who were very interested in learning about photosynthesis. By
                     the time I explained it, the assignment was due.
                     "
                     "I finished the homework but a rogue gust of wind blew it into a parallel dimension. I'm
                     working with theoretical physicists to retrieve it.
                     "
                     During the Activity: Prompts for Connection
                     While you are building, use these prompts to share your internal logic and foster a culture of
                     vulnerability.
                     ●
                     ●
                     ●
                     ●
                     The "Innovation Spark": What is one piece of boilerplate or logic the AI generated that
                     felt like magic? How does that change your perspective on what we can automate at
                     scale?
                     The "Curiosity Check": Where did the AI get it wrong? Instead of just fixing it yourself,
                     try to prompt the AI through the error. What did you learn about how the model 'thinks'
                     versus how you do?
                     The "Shared Fear": In your pair, discuss: which parts of your current role do you hope
                     this technology helps with first? Which parts are you most protective of?
                     The "Context Learning": We’ve learned that 'Context is King.
                     ' How are you helping the
                     AI understand our specific technical constraints? Share a moment where providing more
                     context completely changed the output.
