import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useForm } from "react-hook-form";

import { CurrencyInput } from "../components/Inputs/CurrencyInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "OctoTopsy/Inputs/CurrencyInput",
  component: CurrencyInput,
} as ComponentMeta<typeof CurrencyInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CurrencyInput> = (
  args: JSX.IntrinsicAttributes & { label?: string }
) => {
  const { control, watch } = useForm();
  console.log(watch("input"));
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <CurrencyInput
        control={control}
        name={"OctoTopsyInput"}
        className={undefined}
        {...args}
      />
    </div>
  );
};
export const OctoTopsyCurrencyInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OctoTopsyCurrencyInput.args = {};
