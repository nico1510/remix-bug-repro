import { redirect } from "react-router";

export async function loader() {
  console.log("Main index loader - redirecting to /main/build");
  throw redirect("/main/build");
}

export default function MainIndex() {
  return null;
}
