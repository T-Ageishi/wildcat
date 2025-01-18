"use client";

import { ComponentProps, ReactNode } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const navSetting = [
	{ label: "ホーム", href: "/" },
	{ label: "プロジェクト一覧", href: "/list" },
];

export default function Navigation({}: NavigationProps): ReactNode {
	const pathname = usePathname();

	return (
		<nav className={styles["navigation"]}>
			{navSetting.map(({ label, href }) => (
				<Link
					key={href}
					href={href}
					className={clsx([
						styles["navigation__item"],
						{ [styles["navigation__item--active"]]: href === pathname },
					])}
				>
					{label}
				</Link>
			))}
		</nav>
	);
}

type NavigationProps = ComponentProps<"nav"> & {};
