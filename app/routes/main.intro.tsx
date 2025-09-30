import { redirect, useFetcher } from "react-router";

export async function action() {
  console.log("Intro action called");
  throw redirect("/main");
}

export default function Intro() {
  const fetcher = useFetcher();

  return (
    <div>
      <h3>Intro Route</h3>
      <button onClick={() => fetcher.submit({}, { method: "POST" })} type="button">
        Submit POST
      </button>
      <p>Fetcher state: {fetcher.state}</p>
    </div>
  );
}
