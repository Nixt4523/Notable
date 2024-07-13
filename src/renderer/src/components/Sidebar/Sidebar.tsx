import NoteList from "@components/Notes/NoteList";
import Dropdown from "./Dropdown";
import Header from "./Header";

const Sidebar = (): JSX.Element => {
	return (
		<aside className="min-w-[300px] w-1/5 h-full p-4 transition-all duration-300 border-r-2 border-r-neutral-700">
			<section className="flex items-center justify-between mb-4">
				<Header />
				<Dropdown />
			</section>
			<NoteList />
		</aside>
	);
};

export default Sidebar;
