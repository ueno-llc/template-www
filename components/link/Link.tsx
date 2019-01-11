import React from 'react';

interface ILinkProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export const Link = ({ children, ...props }: ILinkProps) => {
  const child = React.cloneElement(React.Children.only(children), props);
  let Component;
  let next = false;
  try { Component = require('next/link'); next = true; } catch (e) {} // tslint:disable-line no-empty
  if (!Component) {
    try { Component = require('gatsby').Link; } catch (e) {} // tslint:disable-line no-empty
  }
  if (!Component) {
    try { Component = require('react-router-dom').Link; } catch (e) {} // tslint:disable-line no-empty
  }

  if (next) {
    return <Component>{child}</Component>;
  }

  return (
    <Component {...props}>
      {child.props.children}
    </Component>
  );
};
