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
						className={styles["logo"]}
						src="/logo.svg"
						alt="Next.js logo"
						width={32}
						height={32}
						priority
					/>
				</Link>
				<Navigation />
			</div>
		</header>
	);
}

type HeaderProps = ComponentProps<"header"> & {};
