import { toggleNoteInfoModal } from "@renderer/store/modalsSlice";
import { setCurrentNote } from "@renderer/store/notesSlice";
import { formatNoteName } from "@renderer/utils";
import { useDispatch } from "react-redux";

type PropsType = {
	noteName: string;
};

const Note = ({ noteName }: PropsType): JSX.Element => {
	const dispatch = useDispatch();

	const handleClick = async (noteName: string): Promise<void> => {
		const note = await window.api.readNote(noteName);
		dispatch(setCurrentNote(note));
	};

	return (
		<div
			onClick={() => handleClick(noteName)}
			className="flex items-center justify-between w-full p-4 cursor-pointer group hover:bg-neutral-800"
		>
			<h1 className="text-xl truncate">{formatNoteName(noteName)}</h1>
			<button
				onClick={() => dispatch(toggleNoteInfoModal())}
				className="rounded-none opacity-0 btn btn-sm btn-square btn-ghost hover:bg-neutral-800 no-animation group-hover:opacity-100"
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
						d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
						stroke="currentColor"
						strokeWidth="1.5"
					/>
					<path
						d="M12.2422 17V12C12.2422 11.5286 12.2422 11.2929 12.0957 11.1464C11.9493 11 11.7136 11 11.2422 11"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M11.992 8H12.001"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</div>
	);
};

export default Note;
