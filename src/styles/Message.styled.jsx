import styled from "styled-components";
import tw, { css } from "twin.macro";

export const MessageCtn = styled.div`
  ${tw`
    bg-white
    px-8
    pt-8
    pb-2
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

export const UtilsCtn = styled.div`
  ${tw`
    flex
    gap-5
    justify-end
    items-center
  `}

  button {
    ${tw`
      flex
      gap-2
      items-center
      text-sm
      text-gray-500
      pt-2
    `}

    svg {
      ${tw`
        stroke-gray-500
      `}
    }

    &:first-child {
      ${tw`
        text-red-500
      `}
      svg {
        ${tw`
          stroke-red-500
        `}
      }
    }
  }
`;
