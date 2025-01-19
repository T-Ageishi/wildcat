import Header from "@/components/organisms/header";
import NewProjectCard from "@/components/molecules/new-project-card";
import Footer from "@/components/molecules/footer";
import styles from "./index.module.css";
import Hero from "@/components/atoms/hero";

export default function ListPage({}: ListPageProps) {
	return (
		<div className={styles["page"]}>
			<Header />
			<main className={styles["main"]}>
				<Hero label={"プロジェクト一覧"} />
				<section className={styles["main__contents"]}>
					<section>
						<div>キーワード検索</div>
						<div>タグでの絞り込み</div>
					</section>
					<section className={styles["page__cards"]}>
						<NewProjectCard />
					</section>
				</section>
			</main>
			<div className={styles["footer"]}>
				<Footer />
			</div>
		</div>
	);
}

type ListPageProps = {};
