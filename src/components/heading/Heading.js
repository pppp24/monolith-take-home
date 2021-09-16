import React from 'react';
import {
  Container,
  HeadingFour,
  HeadingOne,
  HeadingThree,
  HeadingTwo,
} from './HeadingStyles';

export default function Heading({ children, ...restProps }) {
  return <Container>{children}</Container>;
}

Heading.One = ({ children, ...restProps }) => {
  return <HeadingOne {...restProps}>{children}</HeadingOne>;
};
Heading.Two = ({ children, ...restProps }) => {
  return <HeadingTwo {...restProps}>{children}</HeadingTwo>;
};

Heading.Three = ({ children, ...restProps }) => {
  return <HeadingThree {...restProps}>{children}</HeadingThree>;
};

Heading.Four = ({ children, ...restProps }) => {
  return <HeadingFour {...restProps}>{children}</HeadingFour>;
};
