import NewProjectCard from "@/components/molecules/new-project-card";
import styles from "./index.module.css";
import MainTemplate from "@/components/templates/main";

export default function ListPage({}: ListPageProps) {
	return (
		<MainTemplate heroLabel={"プロジェクト一覧"}>
			<section>
				<div>キーワード検索</div>
				<div>タグでの絞り込み</div>
			</section>
			<section className={styles["page__cards"]}>
				<NewProjectCard />
			</section>
		</MainTemplate>
	);
}

type ListPageProps = {};
