import image from "@assets/Image2.svg";

const NoNotes = (): JSX.Element => {
	return (
		<section className="flex items-center justify-center w-full">
			<div className="flex flex-col items-center justify-center gap-4 text-center">
				<img src={image} alt="No notes" className="size-48 lg:size-72" />
				<h1 className="text-2xl">{"Create your 1st Note!"}</h1>
				<p className="text-neutral-400">
					{"You haven't created any notes yet. Create one and start writing now."}
				</p>
			</div>
		</section>
	);
};

export default NoNotes;
