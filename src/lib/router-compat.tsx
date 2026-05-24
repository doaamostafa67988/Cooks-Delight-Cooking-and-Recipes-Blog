// @ts-nocheck
// Compatibility shim so the ported pages keep their react-router-dom-style APIs
// but use @tanstack/react-router under the hood.
import * as React from "react";
import {
  Link as TLink,
  useNavigate as useTNavigate,
  useLocation as useTLocation,
  useParams as useTParams,
} from "@tanstack/react-router";

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  replace?: boolean;
};

export function Link({ to, children, ...rest }: LinkProps) {
  return (
    // @ts-expect-error tanstack Link expects typed routes
    <TLink to={to} {...rest}>
      {children}
    </TLink>
  );
}

export function useNavigate() {
  const nav = useTNavigate();
  return React.useCallback(
    (to: string | number) => {
      if (typeof to === "number") {
        if (typeof window !== "undefined") window.history.go(to);
        return;
      }
      // Split path?query
      const [path, search] = to.split("?");
      const opts: Record<string, unknown> = { to: path };
      if (search) {
        const sp = new URLSearchParams(search);
        const obj: Record<string, string> = {};
        sp.forEach((v, k) => (obj[k] = v));
        opts.search = obj;
      }
      // @ts-expect-error dynamic
      nav(opts);
    },
    [nav]
  );
}

export function useLocation() {
  const loc = useTLocation();
  // Reconstruct search string from search object
  const sp = new URLSearchParams();
  Object.entries(loc.search ?? {}).forEach(([k, v]) => {
    if (v != null) sp.set(k, String(v));
  });
  const searchStr = sp.toString();
  return {
    pathname: loc.pathname,
    search: searchStr ? `?${searchStr}` : "",
    hash: loc.hash ?? "",
    state: loc.state,
  };
}

export function useParams<
  T extends Record<string, string> = Record<string, string>,
>(): T {
  return useTParams({ strict: false }) as T;
}
