"use client";

// @ts-ignore
export default function PlainButton({ onClick }) {
	return (
		<button
			className="border border-zinc-300 rounded-md p-2"
			onClick={onClick}
		>
			Button with onClick as in docs
		</button>
	);
}
