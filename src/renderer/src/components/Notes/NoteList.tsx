import Note from "./Note";

const NoteList = (): JSX.Element => {
	const notes = [1, 2, 3, 4];

	return (
		<main className="flex flex-col items-start flex-1 w-full h-full overflow-y-auto">
			{notes.map((note) => (
				<div className="w-full" key={note}>
					<Note note={note.toString()} />
				</div>
			))}
		</main>
	);
};

export default NoteList;
