export default {
  state: {
    options: {
      coords: [54.62896654088406, 39.731893822753904],
      controls: [],
    },
    markers: [
      {
        coords: [54.61896654088406, 39.731893822753904],
        hintContent: 'Car 1',
      },
      {
        coords: [54.61896654088406, 39.701893822753904],
        hintContent: 'Car 2',
      },
      {
        coords: [54.62896654088406, 39.731893822753904],
        hintContent: 'Car 3',
      },
    ],
  },
  getters: {
    getMapOption: state => state.options,
    getMapMarkers: state => state.markers,
  },
};
