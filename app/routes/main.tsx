import { Outlet, useLoaderData } from "react-router";

let serverCounter = 0;

export async function loader() {
  console.log("Loader called with counter " + serverCounter);
  return { counter: serverCounter++ };
}

export function shouldRevalidate({ formMethod, defaultShouldRevalidate }) {
  if (!formMethod || formMethod === "GET") {
    return false;
  }

  console.log(
    "shouldRevalidate called and will return ",
    defaultShouldRevalidate
  );
  return defaultShouldRevalidate;
}

export default function Main() {
  const { counter } = useLoaderData();
  return (
    <div>
      <h2>Main Route</h2>
      <p>Counter: {counter}</p>
      <Outlet />
    </div>
  );
}
