"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";
const CLARITY_ID = "tujdg9u3mf";
export function ClarityInitializer() {
  useEffect(() => {
    try {
      Clarity.init(CLARITY_ID);
      console.log(`Microsoft Clarity initialized with ID: ${CLARITY_ID}`);
    } catch (e) {
      console.error("Failed to initialize Microsoft Clarity:", e);
    }
  }, []);
  return null;
}
