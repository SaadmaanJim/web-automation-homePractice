export function getEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable "${key}". Check your .env file.`);
  }
  return value;
}