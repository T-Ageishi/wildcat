import Header from "@/components/organisms/header";
import styles from "./index.module.css";

export default function ListPage({}: ListPageProps) {
	return (
		<div className={styles["page"]}>
			<Header />
			<main className={styles["page__body"]}>
				<p>プロジェクト一覧のページです。</p>
			</main>
		</div>
	);
}

type ListPageProps = {};
