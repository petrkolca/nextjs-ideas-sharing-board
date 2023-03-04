import styled from "styled-components";
import tw, { css } from "twin.macro";

export const MessageCtn = styled.div`
  ${tw`
    bg-white
    p-8
    border-b-2
    rounded-lg
  `}

  > div {
    ${tw`
      flex
      items-center
      gap-2
    `}

    & ~ div {
      ${tw`
        py-4
      `}
    }
  }

  h2 {
    ${tw`
      text-sm
      font-normal
    `}
  }

  p {
    ${tw`
      font-normal
    `}
  }
`;

export const UserProfileImg = styled.div`
  ${tw`
    relative
    m-0
    p-0
    block
    h-8
    w-8
    cursor-pointer
    overflow-hidden
    rounded-full
  `}
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
