import styled from "styled-components";
import tw, { css } from "twin.macro";

export const PostFormCtn = styled.div`
  ${tw`
  bg-white
    my-8
    p-12
    shadow-md
    rounded-lg
    w-full
    mx-auto
  `}

  h1 {
    ${tw`
      text-2xl
      font-bold
    `}
  }

  h3 {
    ${tw`
      text-lg
      font-normal
    `}
  }

  h3,
  > div {
    ${tw`
      py-2
    `}
  }

  textarea {
    ${tw`
      bg-gray-200
      h-48
      w-full
      text-gray-600
      text-sm
      rounded-lg
      p-2
      focus:outline-none
    `}
  }
`;

export const WordCount = styled.p`
  ${tw`
    text-sm
    font-normal
  `}

  &.hasError {
    ${tw`
      text-red-500 
    `}
  }
`;
