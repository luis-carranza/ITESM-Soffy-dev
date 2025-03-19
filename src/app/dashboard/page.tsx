"user client";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {
  const auth = await currentUser();

  if (!auth) {
    redirect("/sign-in");
  }

  return (
    <div>
      <h1>Dashboard Page {auth.fullName}</h1>
    </div>
  );
};

export default Page;
