"use client"

import { Button, Code, useColorMode } from "@chakra-ui/react";
import { useExpand, useHapticFeedback, useInitData, useWebApp } from "@vkruglikov/react-telegram-web-app";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const [isExpanded, expand] = useExpand()
  const [impactOccurred, notificationOccurred, selectionChanged] =
    useHapticFeedback();

  return (
    <main className="flex flex-col h-screen items-center p-4 gap-2">
      <span>Telegram + Nextjs</span>
      <div className="flex flex-row gap-2">
        <Button onClick={() => {
          expand()
        }}>Expand</Button>
        <Button onClick={() => {
          impactOccurred("heavy")
        }}>Vibrate</Button>
      </div>
    </main>
  );
}
