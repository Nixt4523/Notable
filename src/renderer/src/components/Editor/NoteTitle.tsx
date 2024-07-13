const NoteTitle = (): JSX.Element => {
	return (
		<div className="w-full p-4 border-b-2 border-neutral-700">
			<h1 contentEditable className="text-5xl font-bold outline-none">
				Note title
			</h1>
		</div>
	);
};

export default NoteTitle;
