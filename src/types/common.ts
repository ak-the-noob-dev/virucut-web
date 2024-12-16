export interface ArrayOfStrings {
  [index: number]: [string];
}

export interface MakeApiCall {
  url: string;
  method: string;
  body?: unknown;
  headers?: {
    [key: string]: string;
  };
}

export interface StrapiImageFormats {
  thumbnail?: StrapiImage;
  small?: StrapiImage;
  medium?: StrapiImage;
  large?: StrapiImage;
}

interface StrapiImage {
  name?: string;
  hash?: string;
  ext?: string;
  mime?: string;
  path?: string | null;
  width?: number;
  height?: number;
  size?: number;
  sizeInBytes?: number;
  url?: string;
}
