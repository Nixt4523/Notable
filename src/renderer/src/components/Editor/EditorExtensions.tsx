import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";

type returnType = Array<any>;

export const getExtensions = (): returnType => [
	StarterKit.configure({
		heading: {
			levels: [1, 2, 3],
			HTMLAttributes: {
				class: "font-bold text-white prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl",
			},
		},
		bold: { HTMLAttributes: { class: "font-black text-white" } },
		italic: { HTMLAttributes: { class: "italic text-white" } },
		strike: { HTMLAttributes: { class: "line-through" } },
		paragraph: { HTMLAttributes: { class: "font-light text-white" } },
		blockquote: { HTMLAttributes: { class: "border-l-4 border-gray-400 pl-4 italic" } },
		code: {
			HTMLAttributes: { class: "bg-neutral-800 py-2 px-4 rounded-none text-green-300" },
		},
		codeBlock: {
			HTMLAttributes: { class: "bg-neutral-800 py-2 px-4 rounded-none text-green-300" },
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
	Link.configure({
		HTMLAttributes: { class: "underline text-blue-300 cursor-pointer" },
		autolink: true,
		openOnClick: true,
		linkOnPaste: true,
	}),
	Highlight.configure({ HTMLAttributes: { class: "bg-lime-100 text-neutral-900 px-2" } }),
	TaskList,
	TaskItem,
	Color,
	TextStyle,
];
