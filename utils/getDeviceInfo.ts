/**
 * Utility to get basic device information for analytics and logout metadata.
 */
export const getDeviceInfo = () => {
    if (typeof window === "undefined") {
        return "Server";
    }

    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;

    return {
        userAgent,
        platform,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        language: window.navigator.language,
    };
};
