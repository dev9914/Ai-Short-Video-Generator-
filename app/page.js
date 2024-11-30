import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Hi , it's Dev</h1>
      <div>
      <Button >Click me</Button>
      <UserButton />
      </div>

    </div>
  );
}
