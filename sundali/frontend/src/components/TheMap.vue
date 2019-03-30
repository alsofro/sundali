<template>
  <div id="map-container">
    <div class="gray-layer"></div>

    <yandex-map
      :coords="mapOption.coords"
      zoom="13"
      :controls="mapOption.controls"
      style="width: 100%; height: 100%;"
    >
      <ymap-marker
        v-for="(marker, index) in markers"
        :key="index"
        :marker-id="index"
        :marker-fill="fill"
        :marker-stroke="stroke"
        :coords="marker.coords"
        :hint-content="marker.hintContent"
        marker-type="circle"
        circle-radius="50"
      />
    </yandex-map>
  </div>
</template>

<script>
export default {
  name: 'TheMap',
  data: () => ({
    fill: {
      color: '#000000',
      opacity: 0.4,
    },
    stroke: {
      color: '#ff0000',
      width: 1,
    }
  }),
  computed: {
    mapOption() {
      return this.$store.getters.getMapOption;
    },
    markers() {
      return this.$store.getters.getMapMarkers;
    }
  }
};
</script>

<style scoped>
#map-container {
  width: 70%;
  height: 100vh;
}
#map-container > div {
  width: 100%;
  height: 100%;
}

.gray-layer {
  position: absolute;
}
</style>

<style>
.ymaps-2-1-73-map-copyrights-promo,
.ymaps-2-1-73-copyright {
  display: none !important;
}

.ymaps-2-1-73-ground-pane {
  filter: grayscale(100%);
}
</style>

