export const formatNoteName = (name: string): string => {
	const lastDotIndex = name.lastIndexOf(".");

	if (lastDotIndex === -1) return name;
	return name.substring(0, lastDotIndex);
};

export const validateNoteName = (name: string): boolean => {
	if (name.trim().length === 0) return false;
	const validNameRegex = /^[a-zA-Z0-9-_]{3,}$/;
	return validNameRegex.test(name);
};
