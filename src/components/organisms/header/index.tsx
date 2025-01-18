import { ComponentProps, ReactNode } from "react";
import Navigation from "@/components/molecules/navigation";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header({}: HeaderProps): ReactNode {
	return (
		<header className={styles["header"]}>
			<div className={styles["header__contents"]}>
				<Link href={"/"}>
					<Image
						className={styles.logo}
						src="/next.svg"
						alt="Next.js logo"
						width={96}
						height={24}
						priority
					/>
				</Link>
				<Navigation />
			</div>
		</header>
	);
}

type HeaderProps = ComponentProps<"header"> & {};
