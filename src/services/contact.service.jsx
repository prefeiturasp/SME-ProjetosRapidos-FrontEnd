import httpClient from "../infrastructure/http/httpClient";

export function fetchNewContactMessage(data) {
    return httpClient.post('/contact_message/', data);
};
