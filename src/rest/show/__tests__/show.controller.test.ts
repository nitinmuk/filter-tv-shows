import showController from "../show.controller";
import { validPayload } from "./data";

describe("showSchema", () => {
  it("must return DRM enabled shows with more than one episode with relevant fields ", async () => {
    // Given
    const request: any = validPayload;
    const { slug, title, image } = validPayload.body.payload[0];
    const { slug: slug2, title: title2 } = validPayload.body.payload[1];
    const expectedResponse = {
      status: 200,
      json: {
        response: [
          {
            image: image?.showImage,
            slug,
            title,
          },
          {
            slug: slug2,
            title: title2,
          },
        ],
      },
    };
    // When
    const actual = await showController.filterDRMEnabledShows(request);

    // Then
    expect(actual).toEqual(expectedResponse);
  });
});
