
export const login = (user) => {
  return $.ajax({
    type: 'POST',
    url: 'api/session',
    data: { user }
  });
};

export const logout = () => {
  return $.ajax({
    type: 'DELETE',
    url: 'api/session'
  });
};

export const signup = (formData) => {
  return $.ajax({
    type: 'POST',
    url: 'api/users',
    data: formData,
    contentType: false,
    processData: false
  });
};
