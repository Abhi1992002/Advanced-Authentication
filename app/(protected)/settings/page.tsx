import React from "react";
import { auth, signOut } from "@/auth";
type SettingPageProps = {};

const SettingPage = async ({}: SettingPageProps) => {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
};

export default SettingPage;
