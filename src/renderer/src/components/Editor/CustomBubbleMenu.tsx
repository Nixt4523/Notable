import { Editor } from "@tiptap/react";

const CustomBubbleMenu = ({ editor }: { editor: Editor }): JSX.Element => {
	return (
		<ul className="flex flex-col w-56 overflow-y-scroll border-2 h-80 border-neutral-700 bg-neutral-900">
			<li>
				<h2 className="font-bold uppercase menu-title">Headings</h2>
				<ul className="ml-4 border-l border-neutral-700">
					<li>
						<button
							className="flex justify-start text-white btn btn-ghost no-animation hover:bg-neutral-900"
							onClick={() => editor.chain().focus().setHeading({ level: 1 }).run()}
						>
							H1 Heading
						</button>
					</li>
					<li>
						<button
							className="flex justify-start text-white btn btn-ghost no-animation hover:bg-neutral-900"
							onClick={() => editor.chain().focus().setHeading({ level: 2 }).run()}
						>
							H2 Heading
						</button>
					</li>
					<li>
						<button
							className="flex justify-start text-white btn btn-ghost no-animation hover:bg-neutral-900"
							onClick={() => editor.chain().focus().setHeading({ level: 3 }).run()}
						>
							H3 Heading
						</button>
					</li>
				</ul>
			</li>
			<li>
				<h2 className="font-bold uppercase menu-title">Style & Blocks</h2>
				<ul className="ml-4 border-l border-neutral-700">
					<li>
						<button
							className="flex justify-start font-bold text-white btn btn-ghost no-animation hover:bg-neutral-900"
							onClick={() => editor.chain().focus().toggleBold().run()}
						>
							Bold
						</button>
					</li>
					<li>
						<button
							className="flex justify-start italic text-white btn btn-ghost no-animation hover:bg-neutral-900"
							onClick={() => editor.chain().focus().toggleItalic().run()}
						>
							Italic
						</button>
					</li>
					<li>
						<button
							className="flex justify-start text-white underline btn btn-ghost no-animation hover:bg-neutral-900"
							onClick={() => editor.chain().focus().toggleUnderline().run()}
						>
							Underline
						</button>
					</li>
					<li>
						<button
							className="flex justify-start text-white line-through btn btn-ghost no-animation hover:bg-neutral-900"
							onClick={() => editor.chain().focus().toggleStrike().run()}
						>
							Strike
						</button>
					</li>
					<li>
						<button
							className="flex justify-start italic text-white btn btn-ghost no-animation hover:bg-neutral-900"
							onClick={() => editor.chain().focus().toggleBlockquote().run()}
						>
							{'"Blockquote"'}
						</button>
					</li>
					<li>
						<button
							className="flex justify-start text-lime-300 btn btn-ghost no-animation hover:bg-neutral-900"
							onClick={() => editor.chain().focus().toggleCodeBlock().run()}
						>
							Code
						</button>
					</li>
				</ul>
			</li>
			<li>
				<h2 className="font-bold uppercase menu-title">List</h2>
				<ul className="ml-4 border-l border-neutral-700">
					<li>
						<button
							className="flex justify-start text-white btn btn-ghost no-animation hover:bg-neutral-900"
							onClick={() => editor.chain().focus().toggleOrderedList().run()}
						>
							1. Ordered
						</button>
					</li>
					<li>
						<button
							className="flex justify-start text-white btn btn-ghost no-animation hover:bg-neutral-900"
							onClick={() => editor.chain().focus().toggleBulletList().run()}
						>
							• Bullet
						</button>
					</li>
					<li>
						<button
							className="flex justify-start text-white btn btn-ghost no-animation hover:bg-neutral-900"
							onClick={() => editor.chain().focus().toggleTaskList().run()}
						>
							☑ Todo
						</button>
					</li>
				</ul>
			</li>
			<li>
				<h2 className="font-bold uppercase menu-title">Color & Highlight</h2>
				<ul className="ml-4 border-l border-neutral-700">
					<li>
						<button
							className="flex justify-start btn btn-ghost no-animation hover:bg-neutral-900"
							onClick={() => editor.chain().focus().toggleHighlight().run()}
						>
							<span className="px-2 text-neutral-900 bg-lime-100">Highlight</span>
						</button>
					</li>
					<li>
						<button
							className="flex justify-start text-red-300 btn btn-ghost no-animation hover:bg-neutral-900"
							onClick={() => editor.chain().focus().setColor("#fca5a5").run()}
						>
							Red
						</button>
					</li>
					<li>
						<button
							className="flex justify-start text-orange-300 btn btn-ghost no-animation hover:bg-neutral-900"
							onClick={() => editor.chain().focus().setColor("#fdba74").run()}
						>
							Orange
						</button>
					</li>
					<li>
						<button
							className="flex justify-start text-yellow-300 btn btn-ghost no-animation hover:bg-neutral-900"
							onClick={() => editor.chain().focus().setColor("#fde047").run()}
						>
							Yellow
						</button>
					</li>
					<li>
						<button
							className="flex justify-start text-green-300 btn btn-ghost no-animation hover:bg-neutral-900"
							onClick={() => editor.chain().focus().setColor("#86efac").run()}
						>
							Green
						</button>
					</li>
					<li>
						<button
							className="flex justify-start text-blue-300 btn btn-ghost no-animation hover:bg-neutral-900"
							onClick={() => editor.chain().focus().setColor("#93c5fd").run()}
						>
							Blue
						</button>
					</li>
					<li>
						<button
							className="flex justify-start text-purple-300 btn btn-ghost no-animation hover:bg-neutral-900"
							onClick={() => editor.chain().focus().setColor("#d8b4fe").run()}
						>
							Purple
						</button>
					</li>
					<li>
						<button
							className="flex justify-start text-pink-300 btn btn-ghost no-animation hover:bg-neutral-900"
							onClick={() => editor.chain().focus().setColor("#f9a8d4").run()}
						>
							Pink
						</button>
					</li>
				</ul>
			</li>
		</ul>
	);
};

export default CustomBubbleMenu;
