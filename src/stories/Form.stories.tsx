// import React from "react";
// import { ComponentStory, ComponentMeta } from "@storybook/react";
// import { Story } from "@storybook/react";

// import Form, { FormProps } from "../components/Form/Form";

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: "OctoTopsy/Form",
//   component: Form,
//   decorators: [(Story: Story) => <Story />],
//   // argTypes: {
//   //   onClick: { actions: "clicked" },
//   //   onSubmit: { actions: "onSubmit" },
//   //   value: { control: "value" },
//   //   step: { control: "step" },
//   //   typing: { control: "typing" },
//   // },
// };

// const defaultProps: FormProps = {
//   onSubmit: () => {},
//   onClick: () => {},
//   value: "",
//   step: 0,
//   typing: false,
// } as unknown as FormProps;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Form> = (args: FormProps) => {
//   const [val, setVal] = React.useState(defaultProps);

//   const handleOnChange = (e: any) => {
//     if (val.value !== "") {
//       setVal({
//         ...val,
//         value: args.value,
//         typing: true,
//       });
//     }
//     return val;
//   };

//   console.log({ ...args });
//   return <Form {...args} onClick={handleOnChange} step={args.step} />;
// };

// export const OctoTopsyFormDefault = Template.bind({});
// OctoTopsyFormDefault.args = {};
// OctoTopsyFormDefault.parameters = {
//   jest: ["Form"],
// };

// // export const OctoTopsyForm = Template.bind({});
// // // More on args: https://storybook.js.org/docs/react/writing-stories/args
// // OctoTopsyForm.args = {
// //   step: 0,
// //   typing: true,
// // };
