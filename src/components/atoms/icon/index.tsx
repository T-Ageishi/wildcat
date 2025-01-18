import { clsx } from "clsx";
import styles from "./index.module.css";

export default function Icon({ name, size = "md" }: IconProps) {
	return (
		<span
			className={clsx([
				"material-symbols-outlined",
				{
					[styles["icon--md"]]: size === "md",
					[styles["icon--lg"]]: size === "lg",
				},
			])}
		>
			{name}
		</span>
	);
}

type IconProps = {
	name: string;
	size?: "md" | "lg";
};
