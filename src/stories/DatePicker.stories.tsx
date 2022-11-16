import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DatePicker } from "../components/DatePicker/DatePicker";
import { useForm } from "react-hook-form";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "OctoTopsy/DatePicker",
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DatePicker> = (args) => {
  const { control, watch } = useForm();
  console.log(watch("input"));
  return <DatePicker control={control} name={"DatePicker"} />;
};

export const OctoTopsyDatePicker = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OctoTopsyDatePicker.args = {};
