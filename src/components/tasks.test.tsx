import { render, screen, fireEvent } from "@testing-library/react";
import { rest } from "msw";

import { setupServer } from "msw/node";
import Tasks from "./tasks";

const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/todos?", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Tasks Component", () => {
  it("should fetch and show tasks on button click", async () => {
    render(<Tasks />);

    const button = screen.getByText(/get tasks from api/i);
    fireEvent.click(button);

    const task = await screen.findByText("delectus aut autem");
    expect(task).toBeInTheDocument();
  });
});
