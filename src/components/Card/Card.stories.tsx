import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "OctoTopsy/Button",
  component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (
  args: JSX.IntrinsicAttributes & { label: string }
) => (
  <Card
    tex={"Hello, my name is OctoTopsy. I am component library."}
    children={undefined}
    {...args}
  />
);

export const OctoTopsyCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OctoTopsyCard.args = {
  children: <div />,
};
