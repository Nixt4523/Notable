export type Note = {
	name: string;
	content: string;
};

export type NoteInfo = {
	name: string;
	path: string;
	createdAt: Date;
	lastEdited: Date;
};
