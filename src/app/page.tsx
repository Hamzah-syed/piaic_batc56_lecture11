import Posts from "@/components/posts";
import Users from "@/components/users";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<h2>loading....</h2>}>
        <Posts />
      </Suspense>

      <Users />
    </div>
  );
}
