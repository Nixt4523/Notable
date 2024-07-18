import { RootState } from "@renderer/store";
import { formatNoteName } from "@renderer/utils";
import { useSelector } from "react-redux";

const NoteTitle = (): JSX.Element => {
	const { currentNote } = useSelector((state: RootState) => state.notes);

	return (
		<div className="w-full border-b-2 border-neutral-700 h-[8dvh] flex items-center px-4">
			<h1 className="text-3xl font-bold outline-none lg:text-5xl">
				{formatNoteName(currentNote?.name || "")}
			</h1>
		</div>
	);
};

export default NoteTitle;
