export interface ShowRequestBody {
  payload: Show[];
}

interface Image {
  showImage: string;
}

export interface Show {
  slug: string;
  title: string;
  drm: boolean;
  episodeCount: number;
  image?: Image;
}
