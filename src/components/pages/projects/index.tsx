import Header from "@/components/organisms/header";
import styles from "./index.module.css";
import NewProjectCard from "@/components/molecules/new-project-card";

export default function ListPage({}: ListPageProps) {
	return (
		<div className={styles["page"]}>
			<Header />
			<main className={styles["main"]}>
				<section>
					<div>キーワード検索</div>
					<div>タグでの絞り込み</div>
				</section>
				<section className={styles["page__cards"]}>
					<NewProjectCard />
				</section>
			</main>
		</div>
	);
}

type ListPageProps = {};
