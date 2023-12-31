"use client";

import { useEffect } from "react";

export default function Auth({ appID }) {
  useEffect(() => {
    require("@passageidentity/passage-elements/passage-auth");
  }, []);

  return (
    <>
      <passage-auth app-id={process.env.PASSAGE_APP_ID}></passage-auth>
    </>
  );
}
