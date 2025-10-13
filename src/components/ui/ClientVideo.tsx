"use client";
import React, { useEffect, useState } from "react";

export default function ClientVideo(
  props: React.VideoHTMLAttributes<HTMLVideoElement>
) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null; // prevent SSR mismatch

  return <video {...props} />;
}
