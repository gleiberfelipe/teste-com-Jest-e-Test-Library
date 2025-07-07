import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

const sum = (x: number, y: number) => {
  return x + y;
};

describe("App Component", () => {
  it("should sum correctly", () => {
    expect(sum(4, 4)).toBeGreaterThan(7);
  });

  it("should render App with hello message", () => {
    render(<App />);
    screen.getByText("Hello world!");
    expect(screen.getByText("Hello world!")).toBeInTheDocument();
  });

  it("should change message on button click", () => {
    render(<App />);
    screen.getByText("Let's learn more about testing in React");
    const button = screen.getByText(/change message/i);
    fireEvent.click(button);
    expect(screen.getByText("New message!")).toBeInTheDocument();
    const oldMessage = screen.queryByText(
      "Let's learn more about testing in React"
    );

    expect(oldMessage).not.toBeInTheDocument();
  });
});
