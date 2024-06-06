export const generateUUID = () => {
  const randomHexDigit = () => {
    const randomValue = (Math.random() * 16) | 0;
    return randomValue.toString(16);
  };

  // Generate the UUID as a string in the format xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
  const guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = randomHexDigit();
    // For positions 'y' in the UUID, the values should be limited to 8, 9, a, or b
    const v = c === "x" ? r : ((parseInt(r, 16) & 0x3) | 0x8).toString(16);
    return v;
  });

  return guid;
};
