import api from './axios'

export const settingsAPI = {
  getPublic:  ()        => api.get('/v1/settings'),
  getAll:     ()        => api.get('/admin/settings'),
  update:     (data)    => api.put('/admin/settings', data),
  getStats:   ()        => api.get('/admin/stats'),
  getUsers:   ()        => api.get('/admin/users'),
  createUser: (data)    => api.post('/admin/users', data),
  updateUser: (id, data)=> api.put(`/admin/users/${id}`, data),
  deleteUser: (id)      => api.delete(`/admin/users/${id}`),
}
