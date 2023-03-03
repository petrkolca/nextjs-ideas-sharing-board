import Image from "next/image";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { Navigation, MainLogo, NavLink, NavButton } from "../styles/Nav.styled";

const Nav = () => {
  const [user, loading] = useAuthState(auth);

  // console.log("user test: ", user);

  return (
    <Navigation>
      <MainLogo href="/">Post Ideas</MainLogo>
      <ul>
        {!user && <NavButton href={"/auth/login"}>Join Now</NavButton>}
        {user && (
          <div className="flex items-center gap-6">
            <NavLink href={"/post"}>Post</NavLink>
            <NavLink href={"/dashboard"}>
              <div className="relative m-0 block h-12 w-12 cursor-pointer overflow-hidden rounded-full p-0">
                <Image
                  src={user.photoURL}
                  alt={user.displayName}
                  layout="fill" // required
                  objectFit="cover" // change to suit your needs
                  className=""
                />
              </div>
            </NavLink>
          </div>
        )}
      </ul>
    </Navigation>
  );
};

export default Nav;
