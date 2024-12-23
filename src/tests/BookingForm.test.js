import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("renders booking form and submits valid data", () => {
  render(<BookingForm />);
  
  fireEvent.change(screen.getByLabelText(/name/i), {
    target: { value: "John Doe" },
  });
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: "john@example.com" },
  });
  fireEvent.change(screen.getByLabelText(/booking date/i), {
    target: { value: "2024-12-30" },
  });

  fireEvent.click(screen.getByText(/submit/i));

  expect(screen.queryByText(/booking confirmed/i)).toBeInTheDocument();
});
