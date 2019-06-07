export const baseURL = 'http://192.168.50.175:8003/';

// Get ApiURL
export function GetApiurl(path: string) {
    return baseURL + path;
}