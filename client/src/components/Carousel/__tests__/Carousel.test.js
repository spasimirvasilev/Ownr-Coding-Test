/**
 * @jest-environment jsdom
 */

import { screen, render, act } from "@testing-library/react";
import Carousel from "components/Carousel/Carousel";

const imagesMock = [
  "https://founded.media/hiring/photos/sharks/11261840124_dc9ac72bbe_b.jpg",
  "https://founded.media/hiring/photos/sharks/513197047_2f861d56cb_b.jpg",
  "https://founded.media/hiring/photos/sharks/2989909952_b59500107e_o.jpg",
];

describe("Carousel Tests", () => {
  it("Renders properly", () => {
    render(<Carousel images={imagesMock} loading={false} />);

    expect(screen.getByTestId("carousel-image")).toBeInTheDocument();
    expect(screen.getByTestId("left-arrow")).toBeInTheDocument();
    expect(screen.getByTestId("right-arrow")).toBeInTheDocument();
  });

  it("Changes images when clicking on arrow buttons", () => {
    render(<Carousel images={imagesMock} loading={false} />);
    expect(screen.getByTestId("carousel-image")).toHaveAttribute(
      "src",
      "https://founded.media/hiring/photos/sharks/11261840124_dc9ac72bbe_b.jpg"
    );

    const rightButton = screen.getByTestId("right-arrow");

    act(() => {
      rightButton.click();
    });

    expect(screen.getByTestId("carousel-image")).toHaveAttribute(
      "src",
      "https://founded.media/hiring/photos/sharks/513197047_2f861d56cb_b.jpg"
    );
  });

  it("Cycles through the images", () => {
    render(<Carousel images={imagesMock} loading={false} />);
    expect(screen.getByTestId("carousel-image")).toHaveAttribute(
      "src",
      "https://founded.media/hiring/photos/sharks/11261840124_dc9ac72bbe_b.jpg"
    );

    const leftButton = screen.getByTestId("left-arrow");

    act(() => {
      leftButton.click();
    });

    expect(screen.getByTestId("carousel-image")).toHaveAttribute(
      "src",
      "https://founded.media/hiring/photos/sharks/2989909952_b59500107e_o.jpg"
    );
  });

  it("Shows a message when there are no photos", () => {
    render(<Carousel images={[]} loading={false} />);
    expect(screen.getByTestId("no-photos")).toBeInTheDocument();
  });
});
