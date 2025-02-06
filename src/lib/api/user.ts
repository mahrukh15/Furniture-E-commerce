import { BASE_URL } from "./baseUrl";

export async function getUser() {
    const accessToken = localStorage.getItem('accessToken');
    
    // If no access token is found, throw an error
    if (!accessToken) {
        throw new Error('No access token found');
    }

    try {
        // Making the API call to fetch user data
        const response = await fetch(`${BASE_URL}/api/v1/getUser`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });

        // If the response is not okay, throw an error
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }

        // Parse the response data and return the user object
        const data = await response.json();
        return data.user;

    } catch (error) {
        // Log the error to the console for debugging purposes
        console.error("Error fetching user data:", error);
        
        // Throw a new error with a general message
        throw new Error('Failed to fetch user data');
    }
}
