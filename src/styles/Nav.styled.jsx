import styled from "styled-components";
import tw, { css } from "twin.macro";
import Link from "next/link";

export const Navigation = styled.nav`
  ${tw`
    flex
    justify-between
    items-center
    py-10
  `}

  ul {
    ${tw`
      flex
      items-center
      gap-10
    `}
  }
`;

export const MainLogo = styled(Link)`
  ${tw`
    text-xl
    font-medium
    text-gray-900
    focus:ring-0
    focus:outline-none 
    focus-visible:ring-4 
    focus-visible:ring-4 
  focus-visible:ring-purple-200 
  `}
`;

export const NavLink = styled(Link)`
  &:first-child {
    ${tw`
      py-2
      px-4
      text-sm
      bg-gradient-to-tr 
      from-purple-600 
      to-purple-400 
      hover:bg-gradient-to-br 
      focus:ring-4 
      focus:outline-none 
      focus:ring-purple-200 
      dark:focus:ring-purple-500
      text-white
      rounded-lg
      shadow-lg 
      shadow-purple-500/50 
      dark:shadow-lg 
      dark:shadow-purple-800/80
      focus:shadow-none
      font-medium
    `}

    ~ a {
      ${tw`
        focus:ring-0
        focus:outline-none
        focus-visible:ring-4 
        focus-visible:ring-purple-200 
      `}
    }
  }
`;

export const NavButton = styled(Link)`
  ${tw`
    py-2
    px-4
    text-sm
    bg-gradient-to-tr 
    from-purple-600 
    to-purple-400 
    hover:bg-gradient-to-br 
    focus:ring-4 
    focus:outline-none 
    focus:ring-purple-200 
    dark:focus:ring-purple-500
    text-white
    rounded-lg
    shadow-lg 
    shadow-purple-500/50 
    dark:shadow-lg 
    dark:shadow-purple-800/80
    focus:shadow-none
    font-medium
    ml-8
  `}
  /* button {
    ${tw`
      text-lg
      font-medium
      text-red-500
    `}
  } */
`;
