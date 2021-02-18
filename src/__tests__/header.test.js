import { render, fireEvent } from "@testing-library/svelte";
import "@testing-library/jest-dom/extend-expect";
import Header from "../components/header.svelte";

test("shows proper heading when rendered", () => {
  const { getByText } = render(Header);

  expect(getByText("Hi.")).toBeInTheDocument();
  expect(getByText("I'm Jack.")).toBeInTheDocument();
});

test("that button shows proper text with the setAbout prop set to true", () => {
  const { getByText, queryByText } = render(Header, {setAbout: true});
  const about = queryByText('About')

  expect(getByText("Projects")).toBeInTheDocument();  
  expect(about).toBeNull();
});

test("that button shows proper text with the setAbout prop set to false", () => {
  const { getByText, queryByText } = render(Header, {setAbout: false});
  const projects = queryByText("Projects");

  expect(getByText("About")).toBeInTheDocument(); 
  expect(projects).toBeNull(); 
});