import image from "@assets/Image1.svg";
import { toggleNewNoteModal } from "@renderer/store/modalsSlice";
import { useDispatch } from "react-redux";

const OpenNotes = (): JSX.Element => {
	const dispatch = useDispatch();

	return (
		<section className="flex items-center justify-center w-full min-h-screen">
			<div className="flex flex-col items-center justify-center gap-4 text-center">
				<img
					src={image}
					alt="Open a note or create new one"
					className="size-72 lg:size-96"
				/>
				<h1 className="text-4xl font-medium text-center">
					Got an idea? <br />
					Why not Note it down!
				</h1>
				<p className="text-lg text-neutral-400">Open an existing Note or create new one.</p>
				<button
					onClick={() => dispatch(toggleNewNoteModal())}
					className="text-lg bg-white rounded-none btn text-neutral-900 hover:bg-white no-animation"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={20}
						height={20}
						color={"currentColor"}
						fill={"none"}
					>
						<path
							d="M16 2V4M11 2V4M6 2V4"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M19.5 10C19.5 6.70017 19.5 5.05025 18.4749 4.02513C17.4497 3 15.7998 3 12.5 3H9.5C6.20017 3 4.55025 3 3.52513 4.02513C2.5 5.05025 2.5 6.70017 2.5 10V15C2.5 18.2998 2.5 19.9497 3.52513 20.9749C4.55025 22 6.20017 22 9.5 22H12.5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M17.5 14L17.5 22M21.5 18L13.5 18"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
						<path
							d="M7 15H11M7 10H15"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
					</svg>
					Create new Note
				</button>
			</div>
		</section>
	);
};

export default OpenNotes;
