export const capitalizeAll = (text) => (typeof text === 'string' ? text.toUpperCase() : text);

export const isLoading = () => document.readyState === 'loading';

export const onDomContentLoaded = (callback) => {
	if (document.readyState !== 'loading') {
		callback();
		return undefined;
	}

	document.addEventListener('DOMContentLoaded', callback);

	return () => document.removeEventListener('DOMContentLoaded', callback);
};
