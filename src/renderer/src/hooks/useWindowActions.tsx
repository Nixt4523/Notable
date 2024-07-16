type WindowActionsReturnType = {
	minimizeWindow: () => void;
	resizeWindow: () => void;
	closeWindow: () => void;
};

const useWindowActions = (): WindowActionsReturnType => {
	const minimizeWindow = (): void => {
		window.api.minimizeWindow();
	};
	const resizeWindow = (): void => {
		window.api.resizeWindow();
	};
	const closeWindow = (): void => {
		window.api.closeWindow();
	};

	return {
		minimizeWindow,
		resizeWindow,
		closeWindow,
	};
};

export default useWindowActions;
