import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from 'components/Button';

export default {
  title: 'Button',
};

export function text() {
  return (
    <>
      <Button color="primary" onClick={action('clicked')}>Button Primary</Button>
      <Button color="secondary" onClick={action('clicked')}>Button Secondary</Button>
    </>
  );
}

export function block() {
  return (
    <>
      <Button isBlock color="primary" onClick={action('clicked')}>Button Block Primary</Button>
      <Button isBlock color="secondary" onClick={action('clicked')}>Button Block Secondary</Button>
    </>
  );
}

export function sizes() {
  return (
    <>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </>
  );
}
