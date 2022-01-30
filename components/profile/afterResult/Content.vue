<template>
  <div>
    <v-card flat>
      <v-card-title>Cafe Badilico</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="25"
          ></v-rating>

          <div class="grey--text ms-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 text-subtitle-1">
          Italian, Cafe
        </div>

        <div>
          Small plates, salads sandwiches - an intimate setting with 12 indoor
          seats plus patio seating.
        </div>
      </v-card-text>
    </v-card>
    <v-card flat>
      <v-card-title>Working time</v-card-title>
      <v-card-text>
        <div class="my-4 text-subtitle-1">
          Italian, Cafe
        </div>
      </v-card-text>
    </v-card>
    <v-card flat>
      <v-card-title>Sub services</v-card-title>
      <v-card-text>
        <div class="my-4 text-subtitle-1">
          Italian, Cafe
        </div>
      </v-card-text>
    </v-card>
    <v-card flat>
      <v-card-title>Desctiptions</v-card-title>
      <v-card-text>
        <div class="my-4 text-subtitle-1">
          Italian, Cafe
        </div>
      </v-card-text>
    </v-card>
    <v-card flat>
      <v-card-title>Reviews</v-card-title>
      <v-card-text>
        <div class="my-4 text-subtitle-1">
          Italian, Cafe
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Content"
};
</script>
