import httpClient from "../infrastructure/http/httpClient";

export function fetchSections() {
  return httpClient.get("/section/");
}
