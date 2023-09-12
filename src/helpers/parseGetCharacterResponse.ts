import { z } from 'zod';
import { GetCharactersResponse } from '../api/getCharacters';

const schema = z.object({
  results: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      image: z.string(),
    })
  ),
});

export const parseApiCharacters = (
  getCharactersResponse: GetCharactersResponse
) => {
  return schema.parse(getCharactersResponse);
};
