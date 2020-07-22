import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    Authorization:
      'Bearer BQDNDaTTkAZOuZOkOJEzW3r_hePTk7uZ2x_jNM86e9WXVJdAbclfWF5f95YAQqkFQHiqTeQhMYeXZ1GTUduZJDRXUf9VGZ2pmP4eU3kK0-zrHKTuA7iG_FXaeTHRGkvpPSp4MXdqjRtLawZzb8_-ljsS-2NtIg0at2FJU_x8PspIylG9MesGJ0R2I7vNqosaxVnlzyF-sivUwmrURtCVdlZvDCF-lLPcrvOVYmS_MFhwnRabC-ljq43yVMOfPAw2Gw6x-naljbM',
  },
});

export default api;
