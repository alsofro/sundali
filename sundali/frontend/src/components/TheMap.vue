<template>
  <yandex-map
    :coords="coords"
    zoom="13"
    :controls="controls"
    style="width: 600px; height: 600px;"
  >
    <ymap-marker
      marker-id="1"
      marker-type="placemark"
      :coords="[54.7, 39.7]"
      hint-content="Hint content 1"
      :balloon="{header: 'header', body: 'body', footer: 'footer'}"
      :icon="{color: 'green', glyph: 'cinema'}"
      cluster-name="1"
    />

    <ymap-marker
      marker-id="2"
      marker-type="placemark"
      :coords="[54.6, 39.8]"
      hint-content="Hint content 1"
      :balloon="{header: 'header', body: 'body', footer: 'footer'}"
      :icon="{color: 'green', glyph: 'cinema'}"
      cluster-name="1"
    />

    <ymap-marker
      marker-id="3"
      marker-type="circle"
      :coords="[54.62896654088406, 39.731893822753904]"
      circle-radius="1600"
      hint-content="Hint content 1"
      :marker-fill="{color: '#000000', opacity: 0.4}"
      :marker-stroke="{color: '#ff0000', width: 5}"
      :balloon="{header: 'header', body: 'body', footer: 'footer'}"
    />
</yandex-map>
</template>

<script>
export default {
  name: 'TheMap',
  data: () => ({
  }),
};
</script>

<style>
.ymaps-2-1-73-map-copyrights-promo,
.ymaps-2-1-73-copyright {
  display: none !important;
}
</style>
