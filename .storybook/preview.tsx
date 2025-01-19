import type { Preview } from "@storybook/react";
import "@/app/globals.css";
// @ts-ignore
import styles from "./index.module.css";
// noinspection ES6PreferShortImport
import { notoSansJp } from "../src/styles/font";

const preview: Preview = {
	decorators: [
		(Story) => (
			<div className={`${notoSansJp.className} ${styles["container"]}`}>
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
