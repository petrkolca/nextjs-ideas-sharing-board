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
        text-gray-500
      `}
    }
  }

  h2 {
    ${tw`
      text-sm
      font-medium
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
    items-center
  `}

  ${({ edit = false }) =>
    edit
      ? tw`
        justify-end
        `
      : ``}

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

    &.btn-delete {
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

export const CommentCtn = styled.div`
  ${tw`
    py-3
  `}

  > div:first-of-type {
    ${tw`
      relative
      bg-gray-200
      p-2
      pb-12
      rounded-lg
    `}
  }

  textarea {
    ${tw`
      bg-gray-200
      text-sm
      text-gray-600
      w-full
      p-2
      z-0
      focus:outline-none
    `}
  }

  button {
    ${tw`
      absolute
      bottom-2
      right-2
      z-1
    `}
  }
`;

export const CommentsListing = styled.div`
  ${tw`
    py-3
  `}

  > div {
    ${tw`
      relative
      p-2
      pb-12
      rounded-lg
    `}
  }
`;
