import httpClient from "../infrastructure/http/httpClient";

export function fetchNewProjectRequest(data) {
    return httpClient.post('/project_request/', data);
};
