import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom/extend-expect";
import Textblurb from "../components/textblurb.svelte";

test("shows proper heading when makeSmall is true", () => {
  const { getByText } = render(Textblurb, {makeSmall: true});

  expect(getByText("Howdy!")).toBeInTheDocument();
});

test("renders the contact component when makeSmall is true", () => {
  const { getByText } = render(Textblurb, {makeSmall: true});

  expect(getByText("Contact Me")).toBeInTheDocument();
});

test("does not render the any component when makeSmall is false", () => {
  const { queryByText } = render(Textblurb, {makeSmall: false});
  const contact = queryByText("Contact Me");
  const howdy = queryByText("Howdy");
  expect(contact).toBeNull();
  expect(howdy).toBeNull();
});