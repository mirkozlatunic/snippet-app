"use client";

interface ErroPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error }: ErroPageProps) {
  return <div>{error.message}</div>;
}
