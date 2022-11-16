import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useForm } from "react-hook-form";

import { Input } from "../components/Inputs/Input/Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "OctoTopsy/Inputs/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (
  args: JSX.IntrinsicAttributes & { label?: string }
) => {
  const { control, watch } = useForm();
  console.log(watch("input"));
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Input
        control={control}
        name={"OctoTopsyInput"}
        className={undefined}
        {...args}
      />
    </div>
  );
};
export const OctoTopsyInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OctoTopsyInput.args = {};
