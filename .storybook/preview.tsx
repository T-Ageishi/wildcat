import type { Preview } from "@storybook/react";
import "@/app/globals.css";
// noinspection ES6PreferShortImport
import { notoSansJp } from "../src/styles/font";

const preview: Preview = {
	decorators: [
		(Story) => (
			<div className={notoSansJp.className}>
				<Story />
			</div>
		),
	],
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
