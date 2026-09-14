export const API_URL: string =
  process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://delhi-casting-agency-anand.onrender.com"
    : "http://localhost:5000");
