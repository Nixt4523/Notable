import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { BubbleMenu, EditorContent, FloatingMenu, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CustomBubbleMenu from "./CustomBubbleMenu";
import CustomFloatingMenu from "./CustomFloatingMenu";

const Editor = (): JSX.Element => {
	const content = "Hello, World!";

	const extensions = [
		StarterKit.configure({
			heading: {
				levels: [1, 2, 3],
				HTMLAttributes: {
					class: "font-bold text-white prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl",
				},
			},
			bold: { HTMLAttributes: { class: "font-black text-white" } },
			italic: { HTMLAttributes: { class: "italic text-white" } },
			strike: { HTMLAttributes: { class: "line-through" } },
			paragraph: { HTMLAttributes: { class: "font-light text-white" } },
			blockquote: { HTMLAttributes: { class: "border-l-4 border-gray-400 pl-4 italic" } },
			code: {
				HTMLAttributes: { class: "bg-neutral-800 py-2 px-4 rounded-xl text-lime-300" },
			},
			codeBlock: {
				HTMLAttributes: { class: "bg-neutral-800 py-2 px-4 rounded-xl text-lime-300" },
			},
			bulletList: {
				itemTypeName: "listItem",
				keepMarks: true,
				keepAttributes: true,
				HTMLAttributes: { class: "list-disc m-0" },
			},
			orderedList: {
				itemTypeName: "listItem",
				keepMarks: true,
				keepAttributes: true,
				HTMLAttributes: { class: "list-decimal m-0" },
			},
		}),
		Underline.configure({ HTMLAttributes: { class: "underline" } }),
		Highlight.configure({ HTMLAttributes: { class: "bg-lime-100 text-neutral-900 px-2" } }),
		TaskList,
		TaskItem,
		Color,
		TextStyle,
	];

	const editor = useEditor({
		extensions,
		content,
		autofocus: true,
		editorProps: {
			attributes: {
				class: "outline-none prose prose-2xl prose-neutral text-white",
			},
		},
	});

	if (!editor) return <></>;

	return (
		<section className="w-full min-h-screen p-4">
			<EditorContent editor={editor}>
				<FloatingMenu editor={editor}>
					<CustomFloatingMenu editor={editor} />
				</FloatingMenu>
				<BubbleMenu editor={editor}>
					<CustomBubbleMenu editor={editor} />
				</BubbleMenu>
			</EditorContent>
		</section>
	);
};

export default Editor;
