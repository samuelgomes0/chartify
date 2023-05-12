export default function generateRandomString() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < 16; i++) {
    randomString += characters[Math.floor(Math.random() * characters.length)];
  }

  return randomString;
}
