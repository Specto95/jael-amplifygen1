import { HeadingProps } from "../interfaces/Heading";

export function MainHeading({
  title,
  customStyle = "heading__main",
}: HeadingProps) {
  return <h1 className={customStyle}>{title}</h1>;
}
