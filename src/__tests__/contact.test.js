import { render } from "@testing-library/svelte";
import '@testing-library/jest-dom/extend-expect'
import Contact from '../components/contact.svelte'

test('shows proper heading when rendered', () => {
    const { getByText } = render(Contact)
  
    expect(getByText('Contact Me')).toBeInTheDocument()
  })