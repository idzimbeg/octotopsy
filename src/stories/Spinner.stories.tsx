import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Spinner from "../components/Spinner/Spinner";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "OctoTopsy/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Spinner> = (
  args: JSX.IntrinsicAttributes & { className?: string }
) => <Spinner size="md" center={false} className="" {...args} />;

export const OctoTopsySpinner = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OctoTopsySpinner.args = {};
