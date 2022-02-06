import Joi from "@hapi/joi";

const showSchema = Joi.object().keys({
  drm: Joi.boolean().default(false),
  episodeCount: Joi.number().default(0),
  image: Joi.object({
    showImage: Joi.string().uri().required(),
  }),
  slug: Joi.string().required(),
  title: Joi.string().required(),
});
const showBodySchema = Joi.object()
  .keys({
    payload: Joi.array().items(showSchema).required(),
  })
  .options({ stripUnknown: true });

export const drmEnabledShowSchema = Joi.object().keys({
  body: showBodySchema,
});
