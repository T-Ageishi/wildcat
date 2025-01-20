import type { Meta, StoryObj } from "@storybook/react";
import ProjectCard from ".";

export default {
	title: "Molecules/ProjectCard",
	component: ProjectCard,
} satisfies Meta<typeof ProjectCard>;

type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
	decorators: [
		(Story) => (
			<div style={{ width: "300px", height: "150px" }}>
				<Story />
			</div>
		),
	],
};
