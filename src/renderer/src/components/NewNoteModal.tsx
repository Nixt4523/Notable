import { toggleNewNoteModal } from "@store/modalsSlice";
import { validateNoteName } from "@utils/index";
import { useState } from "react";
import { useDispatch } from "react-redux";

const NewNoteModal = (): JSX.Element => {
	const [noteName, setNoteName] = useState("");
	const [noteNameError, setNoteNameError] = useState(false);
	const dispatch = useDispatch();

	const handleClick = async (): Promise<void> => {
		if (!validateNoteName(noteName)) {
			setNoteNameError(true);
			return;
		}

		await window.api.writeNote(`${noteName}.md`, "Hello, World!");
		dispatch(toggleNewNoteModal());
		setNoteNameError(false);
		setNoteName("");
	};

	return (
		<section className="absolute inset-0 z-50 flex items-center justify-center">
			<div className="relative w-3/4 p-8 space-y-4 border-2 2xl:w-1/4 xl:w-1/3 md:w-1/2 sm:w-2/3 h-fit border-neutral-700 bg-neutral-900">
				<div
					onClick={() => dispatch(toggleNewNoteModal())}
					className="absolute top-0 right-0 z-10 p-2 border-b-2 border-l-2 cursor-pointer border-neutral-700"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={20}
						height={20}
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<h1 className="text-2xl font-bold">Create new Note.</h1>
				<p className="text-base opacity-50 text-pretty">
					All your Notes will be saved at C:/User/nikhil4523/Documents/Notable
				</p>
				<input
					onChange={(e) => setNoteName(e.target.value)}
					type="text"
					placeholder="Note name"
					className="w-full text-xl rounded-none input input-bordered input-ghost bg-neutral-900"
				/>
				<span className="text-sm text-neutral-700">
					{
						"(Note name can only contain letters, hyphens and underscores, and must be at least 3 characters long)"
					}
				</span>
				{noteNameError && <p className="text-red-300">Invalid Note name</p>}
				<div className="flex items-center w-full gap-2 space-x-4">
					<button
						onClick={() => handleClick()}
						className="flex-1 text-lg text-white border-2 rounded-none border-neutral-800 bg-neutral-900 btn btn-ghost no-animation hover:bg-green-300 hover:text-neutral-900"
					>
						Create
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width={24}
							height={24}
							color={"currentColor"}
							fill={"none"}
						>
							<path
								d="M16 2V4M11 2V4M6 2V4"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M19.5 10C19.5 6.70017 19.5 5.05025 18.4749 4.02513C17.4497 3 15.7998 3 12.5 3H9.5C6.20017 3 4.55025 3 3.52513 4.02513C2.5 5.05025 2.5 6.70017 2.5 10V15C2.5 18.2998 2.5 19.9497 3.52513 20.9749C4.55025 22 6.20017 22 9.5 22H12.5"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M17.5 14L17.5 22M21.5 18L13.5 18"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
							/>
							<path
								d="M7 15H11M7 10H15"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};

export default NewNoteModal;
