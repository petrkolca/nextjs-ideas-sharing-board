import styled from "styled-components";
import tw, { css } from "twin.macro";

export const MessageCtn = styled.div`
  ${tw`
    bg-white
    p-8
    
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

export const UserProfileImg = styled.div`
  ${tw`
    relative
    m-0
    mr-1
    block
    h-5
    w-5
    cursor-pointer
    overflow-hidden
    rounded-full
    p-0
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
