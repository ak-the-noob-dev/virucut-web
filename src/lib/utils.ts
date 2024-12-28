import { MakeApiCall } from "@/types/common";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Makes an API call to the specified URL with the given method, headers, and
 * body. The body is only sent if the method is not GET.
 *
 * @throws {Error} If the response status is not 200-299
 * @returns The JSON response
 */
export async function makeApiCall(params: MakeApiCall) {
  const { method, body, ...rest } = params;

  const response = await fetch(params.url, {
    method,
    body:
      method === "GET" ? undefined : body ? JSON.stringify(body) : undefined,
    ...rest,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export function getImageUrl(image: string): string {
  if (!image || image === "")
    return `${process.env.BASE_URL}/api/static/images/placeholder.svg`;
  return `${process.env.API_URL}${image}`;
}
