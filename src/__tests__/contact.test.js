import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom/extend-expect";
import Contact from "../components/contact.svelte";

test("shows proper heading when rendered", () => {
  const { getByText } = render(Contact);

  expect(getByText("Contact Me")).toBeInTheDocument();
});

test("that links are present", () => {
  const { getByText } = render(Contact);

  expect(getByText("Email")).toBeInTheDocument();
  expect(getByText("Github")).toBeInTheDocument();
  expect(getByText("LinkedIn")).toBeInTheDocument();
});
