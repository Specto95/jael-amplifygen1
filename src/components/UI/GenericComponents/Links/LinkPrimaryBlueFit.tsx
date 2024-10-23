import { ILinkProps } from "./interfaces/ILink";
import { Link } from "react-router-dom";

export default function LinkPrimaryBlueFit({ to, text }: ILinkProps) {
  return (
    <Link to={to} className="button__primary-bluefit">
      {text}
    </Link>
  );
}
