import { ComponentProps, ReactNode } from "react";
import styles from "./index.module.css";

export default function Chips({
	chipPropsList = [],
}: {
	chipPropsList: ChipProps[];
}): ReactNode {
	return (
		<div className={styles["chips"]}>
			{chipPropsList.map((props) => (
				<Chip key={props.value} {...props} />
			))}
		</div>
	);
}

export function Chip({ label, value, ...props }: ChipProps): ReactNode {
	return (
		<label className={styles["chip"]}>
			<input
				type={"checkbox"}
				value={value}
				className={styles["chip__checkbox"]}
				{...props}
			/>
			<div>{label}</div>
		</label>
	);
}

export type ChipProps = ComponentProps<"input"> & {
	value: string | number;
	label: string;
};
