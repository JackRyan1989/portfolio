import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom/extend-expect";
import Textblurb from "../components/textblurb.svelte";

test("shows proper heading when rendered", () => {
  const { getByText } = render(Textblurb);

  expect(getByText("Howdy!")).toBeInTheDocument();
});

test("renders the contact component when makeSmall is true", () => {
  const { getByText } = render(Textblurb, {makeSmall: true});

  expect(getByText("Contact Me")).toBeInTheDocument();
});

test("does not render the contact component when makeSmall is false", () => {
  const { queryByText } = render(Textblurb, {makeSmall: false});
  const contact = queryByText("Contact Me");
  expect(contact).toBeNull();
});