import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("main", "routes/main.tsx", [
    index("routes/main._index.tsx"),
    route("intro", "routes/main.intro.tsx"),
    route("build", "routes/main.build.tsx"),
  ]),
] satisfies RouteConfig;
