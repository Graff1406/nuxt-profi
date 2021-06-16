<template>
  <v-container>
    <!-- <v-divider></v-divider> -->
    <v-row justify="center" class="py-3">
      <v-col cols="9">
        <v-card flat>
          <h1 class="d-flex justify-center">How is working?</h1>
          <v-card-text>
            <!-- <v-row justify="center">
              <v-col cols="4" class="d-flex justify-center">
                <v-icon size="60" color="secondary">create</v-icon>
              </v-col>
              <v-col cols="4" class="d-flex justify-center">
                <v-icon size="60" color="secondary">person</v-icon>
              </v-col>
              <v-col cols="4" class="d-flex justify-center">
                <v-icon size="60" color="secondary">thumb_up</v-icon>
              </v-col>
            </v-row> -->
            <v-row align="center" justify="center">
              <v-col cols="4">
                <v-row align="center" justify="center">
                  <v-col cols="6" class="d-flex justify-center">Get list masters</v-col>
                  <v-col cols="6" class="d-flex justify-center">
                    <v-icon size="60" color="grey lighten-3">chevron_right</v-icon>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4">
                <v-row align="center" justify="center">
                  <v-col cols="6" class="d-flex justify-center">Choose a master</v-col>
                  <v-col cols="6" class="d-flex justify-center">
                    <v-icon size="60" color="grey lighten-3">chevron_right</v-icon>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4">
                <v-row align="center" justify="center">
                  <v-col cols="6" class="d-flex justify-center">Contact with him</v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col class="d-flex justify-center">
                OR
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col cols="4">
                <v-row align="center" justify="center">
                  <v-col cols="6" class="d-flex justify-center">Create a task</v-col>
                  <v-col cols="6" class="d-flex justify-center">
                    <v-icon size="60" color="grey lighten-3">chevron_right</v-icon>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4">
                <v-row align="center" justify="center">
                  <v-col cols="6" class="d-flex justify-center">Choose a master</v-col>
                  <v-col cols="6" class="d-flex justify-center">
                    <v-icon size="60" color="grey lighten-3">chevron_right</v-icon>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4">
                <v-row align="center" justify="center">
                  <v-col cols="6" class="d-flex justify-center">Close a task</v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-divider></v-divider> -->
    <v-row class="my-3">
      <v-col>
        <h1 class="d-flex justify-center">Services</h1>
        <v-card flat>
          <v-card-text>
            <v-row justify="start">
              <v-col sm="6" md="4">
                <v-card
                  width="344"
                >
                  <v-card-title primary-title>
                    title
                  </v-card-title>
                  <v-expand-transition>
                    <div v-show="show">

                      <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                      </v-card-text>
                    </div>
                  </v-expand-transition>

                  <v-card-actions>
                    <!-- <v-btn
                      color="orange lighten-2"
                      text
                    >
                      Explore
                    </v-btn> -->


                    <v-spacer></v-spacer>
                    <v-btn
                      icon
                      @click="show = !show"
                    >
                      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col sm="6" md="4">
                <v-card
                  width="344"
                >
                  <v-card-title primary-title>
                    title
                  </v-card-title>
                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>

                      <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                      </v-card-text>
                    </div>
                  </v-expand-transition>

                  <v-card-actions>
                    <!-- <v-btn
                      color="orange lighten-2"
                      text
                    >
                      Explore
                    </v-btn> -->


                    <v-spacer></v-spacer>
                    <v-btn
                      icon
                      @click="show = !show"
                    >
                      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col sm="6" md="4">
                <v-card
                  width="344"
                >
                  <v-card-title primary-title>
                    title
                  </v-card-title>
                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>

                      <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                      </v-card-text>
                    </div>
                  </v-expand-transition>

                  <v-card-actions>
                    <!-- <v-btn
                      color="orange lighten-2"
                      text
                    >
                      Explore
                    </v-btn> -->


                    <v-spacer></v-spacer>
                    <v-btn
                      icon
                      @click="show = !show"
                    >
                      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-divider></v-divider> -->
    <v-row class="my-3">
      <v-col>
        <h1 class="d-flex justify-center">Cities</h1>
        <v-card flat>
          <v-card-text>
            <v-row justify="start">
              <v-col sm="4" md="3">
                <v-card
                  width="344"
                  flat
                >
                  <v-card-text>
                    <div v-for="item in 10" :key="item">{{ item }}</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col sm="4" md="3">
                <v-card
                  width="344"
                  flat
                >
                  <v-card-text>
                    <div v-for="item in 10" :key="item">{{ item }}</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col sm="4" md="3">
                <v-card
                  width="344"
                  flat
                >
                  <v-card-text>
                    <div v-for="item in 10" :key="item">{{ item }}</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col sm="4" md="3">
                <v-card
                  width="344"
                  flat
                >
                  <v-card-text>
                    <div v-for="item in 10" :key="item">{{ item }}</div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-divider></v-divider> -->
    <v-row class="my-3">
      <v-col>
        <h1 class="d-flex justify-center">For master</h1>
        <v-card flat>
          <v-card-text>
            <h3>Are you master of your deal? Then come to us. Make good money on your skills. Gain a reputation for being the best and get loyal customers.
            </h3>
            <div class="d-flex justify-center my-3">
              <v-btn color="error" class="mx-3" depressed>
              To be a master
            </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
