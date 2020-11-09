export const getInitials = (name: string): string =>
  name
    ? name
      .toUpperCase()
      .split(/[-\s]/g)
      .map((x) => x.charAt(0))
      .join("")
      .substring(0, 3)
    : "";

export const getColor = (name: string) => {
  const saturation: number = 100;
  const lightness: number = 55;

  const hash: number = name
    .split("")
    .reduce(
      (acc: number, char: string) => char.charCodeAt(0) + ((acc << 5) - acc),
      0
    );

  const hue = Math.abs(hash % 360);

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};