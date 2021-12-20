$('#busqueda').marcoPolo({
  url: 'peliculas.json',
  formatItem: function (data, $item) {
    return data.first_name + data.last_name;
  },
  onSelect: function (data, $item) {
    window.location = data.profile_url;
  }
});
