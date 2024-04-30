// hooks/usePaddle.tsx
"use client";
import { initializePaddle, InitializePaddleOptions, Paddle } from "@paddle/paddle-js";
import { useEffect, useState } from "react";

export default function usePaddle() {
  const [paddle, setPaddle] = useState<Paddle>();
  useEffect(() => {
    initializePaddle({
      environment:  "sandbox",
    //   token: "test_309cdeaa355093aa16c27268f84",
      seller: 18263,
      eventCallback: (data:any)=> {
        if (data.name == "checkout.completed") {
          console.log(data);
        }
      }
    } as unknown as InitializePaddleOptions).then((paddleInstance: Paddle | undefined) => {
      if (paddleInstance) {
        setPaddle(paddleInstance);
      }
    });
  }, []);

  return paddle;
}