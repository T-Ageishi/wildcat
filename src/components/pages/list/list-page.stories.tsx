import type { Meta, StoryObj } from "@storybook/react";
import ListPage from "@/components/pages/list/index";

export default {
	title: "Pages/ListPage",
	component: ListPage,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof ListPage>;

type Story = StoryObj<typeof ListPage>;
export const Default: Story = {
	parameters: {
		nextjs: {
			navigation: {
				pathname: "/list",
			},
		},
	},
};
