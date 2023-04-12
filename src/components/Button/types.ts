export const buttonVariants = [
  "primary",
  "secondary",
  "danger",
  "outline",
  "danger-outline",
] as const;
export type ButtonVariants = (typeof buttonVariants)[number];
