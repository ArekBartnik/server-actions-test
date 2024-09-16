"use client";

// biome-ignore lint/suspicious/noExplicitAny: 🤷🏻‍♂️
export default function PlainButton({ onClick }: { onClick: any }) {
	return (
		<button
			className="border border-zinc-300 rounded-md p-2"
			onClick={onClick}
		>
			Button with onClick as in docs
		</button>
	);
}
