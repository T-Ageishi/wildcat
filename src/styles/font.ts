import { Noto_Sans_JP } from "next/font/google";

export const notoSansJp = Noto_Sans_JP({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	fallback: ["sans-serif"],
});
