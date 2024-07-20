import { setCurrentNote, setCurrentNoteInfo } from "@renderer/store/notesSlice";
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
		const noteInfo = await window.api.getNoteInfo(noteName);
		console.log(noteInfo);
		dispatch(setCurrentNoteInfo(noteInfo));
	};

	return (
		<div
			onClick={() => handleClick(noteName)}
			className="flex items-center justify-between w-full p-4 cursor-pointer group hover:bg-neutral-800"
		>
			<h1 className="text-xl truncate">{formatNoteName(noteName)}</h1>
		</div>
	);
};

export default Note;
