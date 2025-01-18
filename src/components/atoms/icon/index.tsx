export default function Icon({ name }: IconProps) {
	return <span className={"material-symbols-outlined"}>{name}</span>;
}

type IconProps = {
	name: string;
};
