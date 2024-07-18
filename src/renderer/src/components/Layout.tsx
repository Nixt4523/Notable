import Editor from "@components/Editor/Editor";
import NoteTitle from "@components/Editor/NoteTitle";
import Sidebar from "@components/Sidebar/Sidebar";
import WindowActions from "@components/WindowActions";
import { RootState } from "@renderer/store";
import { useSelector } from "react-redux";
import NewNoteModal from "./NewNoteModal";
import NoteInfoModal from "./NoteInfoModal";

const Layout = (): JSX.Element => {
	const { newNoteModalOpen, noteInfoModalOpen } = useSelector((state: RootState) => state.modals);

	return (
		<section className="flex items-start overflow-hidden w-dvw h-dvh">
			<WindowActions />
			{newNoteModalOpen && <NewNoteModal />}
			{noteInfoModalOpen && <NoteInfoModal />}
			<Sidebar />
			<main className="flex flex-col items-start flex-1 w-full h-auto">
				<NoteTitle />
				<Editor />
			</main>
		</section>
	);
};

export default Layout;
