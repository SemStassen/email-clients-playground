import { MessageBird } from "./components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-4xl mx-auto p-8">
        <MessageBird />
      </div>
    </main>
  );
}
