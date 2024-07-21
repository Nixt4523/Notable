import { Editor } from "@tiptap/react";

const CustomFloatingMenu = (editor: { editor: Editor }): JSX.Element => {
	return (
		<div className="flex border-2 divide-x-2 divide-inherit bg-neutral-900 border-neutral-700">
			<button
				className={`${editor.editor.isActive("heading") ? "font-light" : ""} w-12 h-12 text-xl text-center p-3 flex items-center justify-center`}
				onClick={() => editor.editor.chain().focus().toggleHeading({ level: 1 }).run()}
			>
				H
			</button>
			<button
				className={`${editor.editor.isActive("paragraph") ? "font-light" : ""} w-12 h-12 text-xl text-center p-3 flex items-center justify-center`}
				onClick={() => editor.editor.chain().focus().setParagraph().run()}
			>
				P
			</button>
			<button
				className={`${editor.editor.isActive("bold") ? "font-bold" : "font-light"} w-12 h-12 text-xl text-center p-3 flex items-center justify-center`}
				onClick={() => editor.editor.chain().focus().toggleBold().run()}
			>
				B
			</button>
			<button
				className={`${editor.editor.isActive("italic") ? "italic" : ""} w-12 h-12 text-xl text-center p-3 flex items-center justify-center`}
				onClick={() => editor.editor.chain().focus().toggleItalic().run()}
			>
				I
			</button>
			<button
				className={`${editor.editor.isActive("underline") ? "underline decoration-white" : ""} w-12 h-12 text-xl text-center p-3 flex items-center justify-center`}
				onClick={() => editor.editor.chain().focus().toggleUnderline().run()}
			>
				U
			</button>
			<button
				className={`${editor.editor.isActive("strike") ? "line-through" : ""} w-12 h-12 text-xl text-center p-3 flex items-center justify-center`}
				onClick={() => editor.editor.chain().focus().toggleStrike().run()}
			>
				S
			</button>
		</div>
	);
};

export default CustomFloatingMenu;
