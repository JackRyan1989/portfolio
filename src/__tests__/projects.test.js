import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom/extend-expect";
import Projects from "../components/projects.svelte";
import PROJECTS from "../constants/projects";

const projLength = PROJECTS.length;

test("shows proper heading when rendered", () => {
  const { getByText } = render(Projects);

  expect(getByText("Projects")).toBeInTheDocument();
});

test("has an anchor tag with a link role", () => {
  const { getAllByRole } = render(Projects);
  const link = getAllByRole("link");
  expect(link.length).toBe(projLength);
})

test("contains image alt text", () => {
  const { getAllByAltText } = render(Projects);
  const drexelAlt = getAllByAltText("Drexel University Logo")
  const cfpAlt = getAllByAltText("Code for Philly Logo")
  const gitAlt = getAllByAltText("Github Logo") 
  const upennAlt = getAllByAltText("University of Pennsylvania Logo") 
  expect(drexelAlt.length).toBe(4);
  expect(cfpAlt.length).toBe(1);
  expect(gitAlt.length).toBe(1);
  expect(upennAlt.length).toBe(1);
});