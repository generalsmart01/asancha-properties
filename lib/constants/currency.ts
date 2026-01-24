export const toMinor = (amount: number, currency: string) => {
    // Simple conversion for now, assuming 2 decimal places for all
    return Math.round(amount * 100);
};

export const fromMinor = (amount: number, currency: string) => {
    return amount / 100;
};
