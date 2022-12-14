import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components/Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "OctoTopsy/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const OctoTopsyButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OctoTopsyButton.args = {
  children: "Button",
  size: "xl",
  center: false,
  className: "bg-red-500",
};
