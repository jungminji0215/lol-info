"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-white">Something went wrong!</h2>
      <p className="text-white">{error.message}</p>
      <button className="text-white	" onClick={() => reset()}>
        다시 시도해주세요.
      </button>
    </div>
  );
}
