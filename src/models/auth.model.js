export const tokenModel = (model) => {
  return {
    token_type: model.token_type,
    access_token: model.access_token,
    refresh_token: model.refresh_token,
    expires_in: model.expires_in,
  };
};
