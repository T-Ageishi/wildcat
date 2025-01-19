"use client";

import { ChangeEventHandler, useState } from "react";
import Text from "@/components/atoms/text";

export default function ProjectsSearch({}: ProjectsSearchProps) {
	const [keyword, setKeyword] = useState<string>("");
	const onChangeText: ChangeEventHandler<HTMLInputElement> = (e) => {
		setKeyword(e.target.value);
	};

	return (
		<section>
			<div>
				<Text value={keyword} onChange={onChangeText} prependIcon={"search"} />
			</div>
			<div>タグでの絞り込み</div>
		</section>
	);
}

type ProjectsSearchProps = {};
