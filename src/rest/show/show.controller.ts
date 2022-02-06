import {Request, Response} from 'express';
import {ShowRequestBody} from './show.type';
const showController = {

  filterDRMEnabledShows: async (request: Request<any, any, ShowRequestBody, any>, response: Response) => {
    const {payload} = request.body;
    const drmEnabledShows =
                payload
                    .filter((show) => show.drm && show.episodeCount>0)
                    .map((show) => {
                      return {
                        image: show.image?.showImage,
                        slug: show.slug,
                        title: show.title,
                      };
                    });

    return {
      status: 200,
      json: {response: drmEnabledShows},
    };
  },
};

export default showController;
