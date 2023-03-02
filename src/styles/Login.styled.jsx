import styled from "styled-components";
import tw, { css } from "twin.macro";

export const LoginCtn = styled.div`
  ${tw`
    shadow-xl
    mt-32
    p-10
    text-gray-700
    rounded-lg
  `}

  h2 {
    ${tw`
      text-2xl
      font-medium
    `}
  }

  h3,
  > div {
    ${tw`
      py-4
    `}
  }
`;

export const LoginButton = styled.button`
  ${tw`
    text-white
    bg-gray-700
    w-full
    font-medium
    rounded-lg
    flex
    align-middle
    p-4
    gap-2
  `}

  svg {
    ${tw`
      text-2xl
    `}
  }
`;
