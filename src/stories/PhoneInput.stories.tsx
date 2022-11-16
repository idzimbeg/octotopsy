import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useForm } from "react-hook-form";

import { PhoneInput } from "../components/Inputs/PhoneInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "OctoTopsy/Inputs/PhoneInput",
  component: PhoneInput,
} as ComponentMeta<typeof PhoneInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PhoneInput> = (
  args: JSX.IntrinsicAttributes & { label?: string }
) => {
  const { control, watch } = useForm();
  console.log(watch("input"));
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <PhoneInput
        control={control}
        name={"OctoTopsyInput"}
        className={undefined}
        {...args}
      />
    </div>
  );
};
export const OctoTopsyPhoneInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OctoTopsyPhoneInput.args = {};
