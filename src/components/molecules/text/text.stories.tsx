import type { Meta, StoryObj } from "@storybook/react";
import Text from "@/components/molecules/text/index";
import { useState } from "react";
import { ChangeEventHandler } from "react";

export default {
	title: "Molecules/Text",
	component: Text,
} satisfies Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
	args: {
		placeholder: "Placeholder",
	},
	render: (args) => {
		const [value, setValue] = useState("");
		const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
			setValue(event.target.value);
		};
		return <Text value={value} onChange={handleChange} {...args} />;
	},
};
