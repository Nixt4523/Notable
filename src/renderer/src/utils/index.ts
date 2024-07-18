export const formatNoteName = (name: string): string => {
	const lastDotIndex = name.lastIndexOf(".");

	if (lastDotIndex === -1) return name;
	return name.substring(0, lastDotIndex);
};
