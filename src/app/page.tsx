import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";

async function createExcuse(formData: FormData) {
  "use server";

  const excuse = formData.get("excuse");

  if (typeof excuse !== "string") {
    return;
  }

  const trimmedExcuse = excuse.trim();

  if (!trimmedExcuse) {
    return;
  }

  await prisma.excuse.create({
    data: {
      excuseText: trimmedExcuse,
    },
  });

  revalidatePath("/");
}

async function upvoteExcuse(formData: FormData) {
  "use server";

  const id = formData.get("id");

  if (typeof id !== "string") {
    return;
  }

  await prisma.excuse.update({
    where: { id },
    data: { votes: { increment: 1 } },
  });

  revalidatePath("/");
}

export default async function Home() {
  const excuses = await prisma.excuse.findMany({
    orderBy: [{ votes: "desc" }, { createdAt: "desc" }],
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans text-zinc-900">
      <main className="w-full max-w-2xl rounded-2xl bg-white px-8 py-10 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight">
          Excuse Machine
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Start small with a single text input for your excuse.
        </p>
        <form action={createExcuse} className="mt-6 space-y-3">
          <label htmlFor="excuse" className="text-sm font-medium text-zinc-700">
            Your excuse
          </label>
          <input
            id="excuse"
            name="excuse"
            type="text"
            placeholder="e.g., A rogue gust of wind blew it into a parallel dimension"
            className="mt-2 w-full rounded-lg border border-zinc-200 px-4 py-3 text-base text-zinc-900 outline-none ring-zinc-300 focus:ring-2"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Submit excuse
          </button>
        </form>
        <section className="mt-10">
          <h2 className="text-lg font-semibold">Recent excuses</h2>
          {excuses.length === 0 ? (
            <p className="mt-3 text-sm text-zinc-600">
              No excuses yet. Be the first to add one.
            </p>
          ) : (
            <ul className="mt-4 space-y-3">
              {excuses.map((excuse) => (
                <li
                  key={excuse.id}
                  className="flex flex-col gap-3 rounded-lg border border-zinc-200 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-sm text-zinc-900">{excuse.excuseText}</p>
                    <p className="mt-2 text-xs text-zinc-500">
                      Votes: {excuse.votes}
                    </p>
                  </div>
                  <form action={upvoteExcuse}>
                    <input type="hidden" name="id" value={excuse.id} />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-lg border border-zinc-200 px-3 py-2 text-xs font-medium text-zinc-700 transition hover:bg-zinc-50"
                    >
                      Upvote
                    </button>
                  </form>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
