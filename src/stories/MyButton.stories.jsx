import React from "react";

import Button from "../components/Button";

export default {
  title: "Mine/Button",
  component: Button,
  argTypes: {
    title: {
      type: {
        name: "string",
        required: true
      }
    },
    type: {
      options: ["primary", "secondary"],
      control: { type: "select" }
    }
  }
}

const Template = ({label = "Test Text", ...args}) => <Button {...args} label={label} />

export const Primary = Template.bind({});
Primary.args = {
  type: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary"
};