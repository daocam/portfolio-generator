import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex h-scren items-center justify-center">
      <SignIn />
    </main>
  );
}
