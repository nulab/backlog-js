export function encodePathSegment(value: string | number): string {
  const segment = String(value);
  // WHATWG URL parsing removes dot segments even when the dots are percent-encoded.
  if (segment === "." || segment === "..") {
    throw new TypeError("Invalid API path segment: dot segments are not allowed.");
  }
  return encodeURIComponent(segment);
}

/** Shared-file paths intentionally contain multiple folder segments. */
export function encodeFilePath(path: string): string {
  return path.split("/").map(encodePathSegment).join("/");
}
