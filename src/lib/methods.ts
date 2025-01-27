export const extractFirstAndLastName = (name: string) => {
    const nameArr = name.split(" ");
    return {
        firstName: nameArr[0],
        lastName: nameArr[1],
    };
}

// Utility function to sleep for a given number of milliseconds
export const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Trims all string values in a given object
export const trimFormData = (data: Record<string, any>): Record<string, any> => {
    return Object.keys(data).reduce((acc, key) => {
        const value = data[key];
        if (typeof value === 'string') {
            acc[key] = value.trim();
        } else if (value && typeof value === 'object' && !Array.isArray(value)) {
            // Recursively trim nested objects
            acc[key] = trimFormData(value);
        } else {
            acc[key] = value;
        }
        return acc;
    }, {} as Record<string, any>);
};

// Utility function to validate phone numbers
export const isValidPhoneNumber = (phoneNumber: string): boolean => {
    const phoneRegex = /^[0-9]{10}$/; // Adjust pattern as needed
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    return phoneRegex.test(formattedPhoneNumber);
};

// Utility function to format phone numbers (remove non-numeric characters)
export const formatPhoneNumber = (phoneNumber: string): string => {
    return phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
};

