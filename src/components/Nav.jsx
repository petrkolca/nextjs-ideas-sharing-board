import Link from "next/link";

import { Navigation, MainLogo, NavLink } from "../styles/Nav.styled";

const Nav = () => {
  return (
    <Navigation>
      <Link href="/">
        <MainLogo>Post Ideas</MainLogo>
      </Link>
      <ul>
        <NavLink href={"/auth/login"}>Join Now</NavLink>
      </ul>
    </Navigation>
  );
};

export default Nav;
