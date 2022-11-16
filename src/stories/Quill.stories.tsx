import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Quill } from "../components/Quill";
import { useForm } from "react-hook-form";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "OctoTopsy/Quill",
  component: Quill,
} as ComponentMeta<typeof Quill>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Quill> = () => {
  const { control, watch } = useForm();
  console.log("quill", watch("quill"));

  return <Quill control={control} name={"Quill"} value={""} />;
};
export const OctoTopsyQuill = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OctoTopsyQuill.args = {};
