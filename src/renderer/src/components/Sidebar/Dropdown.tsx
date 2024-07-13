import { toggleNewNoteModal } from "@store/modalsSlice";
import { useDispatch } from "react-redux";

const Dropdown = (): JSX.Element => {
	const dispatch = useDispatch();

	return (
		<div className="dropdown dropdown-end dropdown-hover">
			<div tabIndex={0} className="rounded-none btn btn-sm btn-square btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width={24}
					height={24}
					color={"#ffffff"}
					fill={"none"}
				>
					<path
						d="M11.992 12H12.001"
						stroke="currentColor"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M11.9842 18H11.9932"
						stroke="currentColor"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M11.9998 6H12.0088"
						stroke="currentColor"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			<ul
				tabIndex={0}
				className="menu dropdown-content gap-2 z-[1] w-52 p-2 border-2 border-neutral-700"
			>
				<li>
					<a
						onClick={() => dispatch(toggleNewNoteModal())}
						className="justify-start text-base font-normal rounded-none btn btn-sm btn-ghost no-animation"
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
								d="M16 2V4M11 2V4M6 2V4"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M19.5 10C19.5 6.70017 19.5 5.05025 18.4749 4.02513C17.4497 3 15.7998 3 12.5 3H9.5C6.20017 3 4.55025 3 3.52513 4.02513C2.5 5.05025 2.5 6.70017 2.5 10V15C2.5 18.2998 2.5 19.9497 3.52513 20.9749C4.55025 22 6.20017 22 9.5 22H12.5"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M17.5 14L17.5 22M21.5 18L13.5 18"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>
							<path
								d="M7 15H11M7 10H15"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>
						</svg>
						New note
					</a>
				</li>
				<li>
					<a className="justify-start text-base font-normal rounded-none btn btn-sm btn-ghost no-animation">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width={20}
							height={20}
							color={"#ffffff"}
							fill={"none"}
						>
							<path
								d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
								stroke="currentColor"
								strokeWidth="1.5"
							/>
							<path
								d="M12.2422 17V12C12.2422 11.5286 12.2422 11.2929 12.0957 11.1464C11.9493 11 11.7136 11 11.2422 11"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M11.992 8H12.001"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						How to use?
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Dropdown;
