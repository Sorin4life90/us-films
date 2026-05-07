function normalizeBasePath(basePath: string) {
  if (!basePath || basePath === "/") {
    return "/";
  }

  return basePath.endsWith("/") ? basePath : `${basePath}/`;
}

export function withBase(path: string) {
  if (!path) {
    return path;
  }

  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith("data:") || path.startsWith("#")) {
    return path;
  }

  const basePath = normalizeBasePath(import.meta.env.BASE_URL || "/");
  const normalizedPath = path.replace(/^\/+/, "");

  return `${basePath}${normalizedPath}`;
}
