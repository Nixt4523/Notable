const WindowActions = (): JSX.Element => {
	return (
		<section className="absolute top-0 right-0 flex items-center border-b-2 border-l-2 divide-x-2 border-neutral-700 divide-neutral-700 bg-neutral-900">
			<button className="flex items-center justify-center w-8 h-8 p-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width={24}
					height={24}
					color={"#ffffff"}
					fill={"none"}
				>
					<path
						d="M20 12L4 12"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
			<button className="flex items-center justify-center w-8 h-8 p-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width={24}
					height={24}
					color={"#ffffff"}
					fill={"none"}
				>
					<path
						d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
						stroke="currentColor"
						strokeWidth="1.5"
					/>
				</svg>
			</button>
			<button className="flex items-center justify-center w-8 h-8 p-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width={24}
					height={24}
					color={"#ffffff"}
					fill={"none"}
				>
					<path
						d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</section>
	);
};

export default WindowActions;
