// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
Template.args = {};

export const Primary = Template.bind({});
Primary.args = {
  theme: "lightBlue",
  size: "50",
  children: "Button Text",
  rounded: true,
  outline: true,
  disabled: true,
  loading: true,
};
