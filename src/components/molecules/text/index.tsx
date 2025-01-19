import { ComponentProps, ReactNode } from "react";
import styles from "./index.module.css";
import { clsx } from "clsx";

export default function Text({
	type = "text",
	className,
	...props
}: TextProps): ReactNode {
	return (
		<div>
			<input
				type={type}
				className={clsx([styles["text"], className])}
				{...props}
			/>
		</div>
	);
}

type TextProps = ComponentProps<"input">;
