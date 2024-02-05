import Header from "@/components/Header";
import { FormWrapper } from "@/components/FormWrapper";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="max-w-[580px] mx-auto w-full h-full flex flex-1 items-center justify-center">
        <FormWrapper />
      </div>     
    </main>
  );
}
