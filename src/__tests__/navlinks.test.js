import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom/extend-expect";
import Navlinks from "../components/nav-links.svelte";

test("that button shows proper text with the setAbout prop set to true", () => {
  const { getByText, queryByText } = render(Navlinks, { setAbout: true });
  const about = queryByText("About");

  expect(getByText("Projects")).toBeInTheDocument();
  expect(about).toBeNull();
});

test("that button shows proper text with the setAbout prop set to false", () => {
  const { getByText, queryByText } = render(Navlinks, { setAbout: false });
  const projects = queryByText("Projects");

  expect(getByText("About")).toBeInTheDocument();
  expect(projects).toBeNull();
});
