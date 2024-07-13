import { toggleNoteInfoModal } from "@store/modalsSlice";
import { useDispatch } from "react-redux";

const NoteInfoModal = (): JSX.Element => {
	const dispatch = useDispatch();

	return (
		<section className="absolute inset-0 flex items-center justify-center ">
			<div className="relative w-3/4 p-8 space-y-4 border-2 2xl:w-1/4 xl:w-1/3 md:w-1/2 sm:w-2/3 h-fit border-neutral-700 bg-neutral-900">
				<div
					onClick={() => dispatch(toggleNoteInfoModal())}
					className="absolute top-0 right-0 z-10 p-2 border-b-2 border-l-2 cursor-pointer border-neutral-700"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={20}
						height={20}
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<h1 className="text-2xl font-bold">Note name</h1>
				<p className="text-base opacity-50">
					Path C:/User/nikhil4523/Documents/Notable/note1.md
				</p>
				<div>
					<p className="text-base opacity-50">Create on June 10, 2022</p>
					<p className="text-base opacity-50">Last edited 10 minutes ago</p>
				</div>
				<div className="flex items-center w-full gap-2 space-x-4">
					<button className="flex-1 text-lg border-2 rounded-none group border-neutral-800 btn btn-ghost no-animation hover:bg-neutral-900 text-neutral-400 hover:border-red-300 hover:text-red-300">
						Delete
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width={20}
							height={20}
							color={"currentColor"}
							fill={"none"}
						>
							<path
								d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>
							<path
								d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>
							<path
								d="M9.5 16.5L9.5 10.5"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>
							<path
								d="M14.5 16.5L14.5 10.5"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};

export default NoteInfoModal;
