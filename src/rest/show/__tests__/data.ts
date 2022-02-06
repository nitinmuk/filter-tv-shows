export const validPayload = {
  body: {
    payload: [
      {
        drm: true,
        episodeCount: 3,
        image: {
          showImage: "http://fake",
        },
        slug: "show/16kidsandcounting",
        title: "16 Kids and Counting",
      },
      {
        drm: true,
        episodeCount: 1,
        slug: "show/fake slug",
        title: "fake title2",
      },
      {
        slug: "show/seapatrol",
        title: "Sea Patrol",
        tvChannel: "Channel 9",
      },
    ],
  },
};

export const invalidPayloads = [
  { body: {} },
  { body: null },
  {
    body: {
      payload: [
        {
          drm: false,
        },
      ],
    },
  },
  {
    body: {
      payload: [
        {
          drm: true,
          episodeCount: 3,
          image: {
            showImage: "http://invalid url",
          },
          slug: "show/16kidsandcounting",
          title: "16 Kids and Counting",
        },
      ],
    },
  },
];
