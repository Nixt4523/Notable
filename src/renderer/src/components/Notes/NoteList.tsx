import { RootState } from "@renderer/store";
import { setNotes } from "@renderer/store/notesSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoNotes from "../NoNotes";
import Note from "./Note";

const NoteList = (): JSX.Element => {
	const dispatch = useDispatch();
	const { notes, loading, error } = useSelector((state: RootState) => state.notes);

	useEffect(() => {
		const fetchNotes = async (): Promise<void> => {
			dispatch(setNotes(await window.api.getAllNotes()));
		};
		fetchNotes();
	});

	if (error) {
		return <span>Something went wrong</span>;
	}
	if (loading) {
		return <span className="loading loading-spinner" />;
	}

	if (notes.length === 0) return <NoNotes />;

	return (
		<main className="flex flex-col items-start flex-1 w-full h-full overflow-y-auto">
			{notes.map((note) => (
				<div className="w-full" key={note}>
					<Note noteName={note} />
				</div>
			))}
		</main>
	);
};

export default NoteList;
