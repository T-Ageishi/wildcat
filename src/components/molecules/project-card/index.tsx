import { ReactNode } from "react";
import styles from "./index.module.css";
import Card from "@/components/atoms/card";

export default function ProjectCard(): ReactNode {
	return (
		<Card className={styles["card"]}>
			<h3 className={styles["card__title"]}>
				<span className={styles["card__title-inner"]}>
					プロジェクトのタイトル
				</span>
			</h3>
			<p className={styles["card__duration"]}>
				<span>2024/01/01 ~ 2024/12/31</span>
			</p>
		</Card>
	);
}
