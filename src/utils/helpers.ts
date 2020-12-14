import Theme from "@/theme.ts";

export const remove = (list: string, remove: string): string => {
  if (!remove) return list;
  return list
    .split(" ")
    .filter(c => {
      return !remove.includes(c);
    })
    .join(" ");
};

console.log(Theme);
