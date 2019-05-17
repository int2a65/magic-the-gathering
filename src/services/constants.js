
const HOST = `https://api.magicthegathering.io`;

export const GET_CARDS = (types, orderBy='name', page, pageSize, name) => {
  let baseUrl = `${HOST}/v1/cards`;

  baseUrl += types || orderBy || page || pageSize || name ? '?' : '';
  baseUrl += types ? `types=${types}` : '';
  baseUrl += orderBy ? `&orderBy=${orderBy}` : '';
  baseUrl += page ? `&page=${page}` : '';
  baseUrl += pageSize ? `&pageSize=${pageSize}` : '';
  baseUrl += name ? `&name=${name}` : '';
  return baseUrl;
};