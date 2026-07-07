import * as functions from "firebase-functions";
import Anthropic from "@anthropic-ai/sdk";

export const callClaude = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError("unauthenticated", "Login required");
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY ?? "" });
  const response = await client.messages.create({
    model: "claude-3-5-sonnet-latest",
    max_tokens: 1024,
    messages: data.messages,
    system: data.system_prompt,
  });

  return { content: response.content[0]?.type === "text" ? response.content[0].text : "" };
});

export const getWeather = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError("unauthenticated", "Login required");
  }

  const { lat, lng } = data;
  const key = process.env.OPENWEATHER_API_KEY ?? "";
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${key}&units=metric&lang=pt_br&cnt=7`;
  const response = await fetch(url);
  return response.json();
});

export const removeBg = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError("unauthenticated", "Login required");
  }

  const response = await fetch("https://api.remove.bg/v1.0/removebg", {
    method: "POST",
    headers: {
      "X-Api-Key": process.env.REMOVEBG_API_KEY ?? "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image_file_b64: data.image_base64, size: "auto" }),
  });

  const buffer = await response.arrayBuffer();
  return { image_base64: Buffer.from(buffer).toString("base64") };
});
