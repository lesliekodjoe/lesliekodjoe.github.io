import { useLocation} from "react-router-dom";
import { usePageTransitions } from "../utils/animationPage";

import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const TransitionLink = ({ href, children, onClick, className }: Props) => {
  const location = useLocation();
  const {animatePageOut} = usePageTransitions()

  const handleClick = () => {
    if (location.pathname != href) {
      animatePageOut(href);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default TransitionLink;
