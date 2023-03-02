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

export const MainLogo = styled.button`
  ${tw`
    text-xl
    font-medium
    text-gray-900
  `}
`;

export const NavLink = styled(Link)`
  ${tw`
    py-2
    px-4
    text-sm
    bg-emerald-400
    text-white
    rounded-lg
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
