export const toTitleCase = (str: string): string => {
  return str.replace(/(?:^|\s)\S/g, (match) => {
    return match.toUpperCase();
  });
};
