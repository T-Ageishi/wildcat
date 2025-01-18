import type { Preview } from "@storybook/react";
import "@/app/globals.css";

const preview: Preview = {
	parameters: {
		layout: "centered",
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		nextjs: {
			appDirectory: true,
		},
		options: {
			storySort: {
				order: ["Atoms", "Molecules", "Organisms", "Templates", "Pages"],
			},
		},
	},
};

export default preview;
