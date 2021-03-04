import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom/extend-expect";
import Header from "../components/header.svelte";

test("shows proper heading when rendered", () => {
  const { getByText } = render(Header);

  expect(getByText("Hi.")).toBeInTheDocument();
  expect(getByText("I'm Jack.")).toBeInTheDocument();
});