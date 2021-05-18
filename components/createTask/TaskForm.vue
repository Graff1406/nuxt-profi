<template>
  <v-row v-resize="onResize">
    <v-col class="pa-0">
      <v-card :outlined="$device.isDesktop" :flat="$device.isMobile" :height="windowSize.y - 80" class="d-flex flex-column justify-space-between">
        <v-card-text class="pa-0">
          <section v-show="userLoged || showTelForm" >
            <h5 class="d-flex align-center justify-center success--text my-2">
              Your Loged
              <v-icon color="success" size="18" class="mx-2">check</v-icon>
            </h5>
          </section>
          <v-window v-model="step">
            <v-window-item :value="0">
              <v-card flat>
                <v-card-title primary-title>
                  Detiles of task
                </v-card-title>
                <v-card-text>
                  <v-text-field
                    v-model="title"
                    name="name"
                    label="Title"
                    placeholder="Title of task"
                    id="id"
                    hint="Short desctibe what do you whant"
                    persistent-hint
                  ></v-text-field>
                  <v-textarea
                    name="name"
                    label="Detales"
                    placeholder="More detiles of task"
                    hint="More detiles desctibe what do you whant"
                    persistent-hint
                  ></v-textarea>
                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item :value="1">
              <v-card flat>
                <v-card-title primary-title>
                  Place of execute of task
                </v-card-title>
                <v-card-text>
                  <v-select
                    :items="items"
                    v-model="city"
                    label="City"
                    hint="Where need to execute task"
                    persistent-hint
                  ></v-select>
                  <v-select
                    :items="items"
                    v-model="value"
                    label="Area"
                    hint="Where need to execute task"
                    persistent-hint
                  ></v-select>
                  <v-text-field
                    name="name"
                    label="Street"
                    id="id"
                    hint="Street without address"
                    persistent-hint
                  ></v-text-field>
                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item :value="2">
              <v-card flat>
                <v-card-title primary-title>
                  Date and time of execute of task
                </v-card-title>
                <v-card-text>
                  <v-card flat>
                    <v-tabs
                      v-model="tab"
                      color="seconday"
                      centered
                    >
                      <v-tab>{{ date || 'Date' }}</v-tab>
                      <v-tab :disabled="!date">Time</v-tab>

                      <v-tab-item class="py-2">
                        <v-date-picker v-model="date" color="secondary" @change="tab++" no-title></v-date-picker>
                      </v-tab-item>
                        
                      <v-tab-item class="py-2">
                        <v-tabs
                          v-model="timeTab"
                          color="seconday"
                          centered
                        >
                          <v-tab>
                            {{ time.start || 'Start' }}
                          </v-tab>
                          <v-tab :disabled="!time.start">{{ time.end || 'End' }}</v-tab>

                          <v-tab-item class="py-2">
                            <v-time-picker v-model="time.start" format="24hr" color="secondary" @change="timeTab++" scrollable no-title></v-time-picker>
                          </v-tab-item>
                            
                          <v-tab-item class="py-2">
                            <v-time-picker v-model="time.end" format="24hr" color="secondary" :min="time.start" scrollable no-title></v-time-picker>
                          </v-tab-item>
                        </v-tabs>
                      </v-tab-item>
                    </v-tabs>
                  </v-card>
                  <!-- <div v-if="date">Date: {{ date }}</div>
                  <div v-if="time.start && time.end">Time: {{ time.start + ' - ' + time.end }}</div> -->
                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item :value="3" v-if="!userLoged">
              <v-card flat>
                <v-card-title primary-title>
                  {{ showTelForm ? 'Add phone number' : 'Sign In before Publish' }}
                </v-card-title>
                <v-card-text>
                  <section v-if="showTelForm">
                    <v-text-field
                      v-model="phones[0]"
                      type="number"
                      name="name"
                      label="Tel number"
                      id="id"
                      :rules="[val => val !== phones[1]]"
                    ></v-text-field>
                    <v-text-field
                      v-model="phones[1]"
                      type="number"
                      name="name"
                      label="Tel number"
                      id="id"
                      :rules="[val => val !== phones[0]]"
                    ></v-text-field>
                  </section>
                  <LoginForm v-else @user-loged="loginUser" />
                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item :value="userLoged ? 3 : 4">
              <v-card flat>
                <v-card-title primary-title>
                  Preview and Publish Task
                </v-card-title>
                <v-card-text>
                  <section>
                    <article>
                      <h4>Title of task</h4>
                      <p>{{ title }}</p>
                    </article>
                    <article>
                      <h4>Detales of task</h4>
                      <p>{{ detales }}</p>
                    </article>
                    <article>
                      <h4>City</h4>
                      <p>{{ city }}</p>
                    </article>
                    <article>
                      <h4>Area</h4>
                      <p>{{ area }}</p>
                    </article>
                    <article>
                      <h4>Date execute of task</h4>
                      <p>{{ date }}</p>
                    </article>
                    <article>
                      <h4>Time (from - to)</h4>
                      <p>{{ time.start + ' - ' + time.end }}</p>
                    </article>
                    <article>
                      <h4>Phone numbers</h4>
                      <p v-for="phone in phones" :key="phone">{{phone}}</p>
                    </article>
                  </section>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
          </v-card-text>
        <v-card-actions v-if="$device.isDesktop">
          <v-btn
            depressed
            :disabled="!step"
            @click="setStep()"
          >
            <v-icon>arrow_back_ios</v-icon>
            Preview
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            v-if="step < 3 || step < 4 && !userLoged"
            depressed
            :disabled="nextDisabled"
            @click="setStep(true)"
          >
            Next
            <v-icon>arrow_forward_ios</v-icon>
          </v-btn>
          <v-btn
            v-else
            depressed
            color="error"
            :disabled="!userLoged && !showTelForm"
          >
            Publish
            <v-icon>add</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-actions v-else>
          <v-btn
            dark
            depressed
            block
            @click="setStep"
          >
            Continue
            <v-icon>arrow_forward_ios</v-icon>
          </v-btn>
          <!-- <v-spacer></v-spacer>
          <v-btn
            v-if="step < 3 || step < 4 && !userLoged"
            depressed
            :disabled="nextDisabled"
            @click="setStep"
          >
            Next
            <v-icon>arrow_forward_ios</v-icon>
          </v-btn>
          <v-btn
            v-else
            depressed
            color="error"
            :disabled="!userLoged && !showTelForm"
          >
            Publish
            <v-icon>add</v-icon>
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import LoginForm from '@/components/sign/LoginForm'
  export default {
    name: 'TaskForm',
    components: {
      LoginForm,
    },
    data() {
      return {
        userLoged: false,
        step: 0,
        tab: null,
        timeTab: null,
        date: '',
        time: {
          start: '',
          end: ''
        },
        items: ['Batumi'],
        value: null,
        title: '',
        detales: '',
        city: '',
        area: '',
        address: '',
        windowSize: {
          x: 0,
          y: 0,
        },
        showTelForm: false,
        phones: [null, null]
      }
    },
    computed: {
      nextDisabled() {
        return (this.step === 0 && !this.title) ||
        (this.step === 1 && !this.city) ||
        (this.step === 2 && !this.date) ||
        (this.step === 3 && !this.userLoged && !this.showTelForm)
      },
    },
    watch: {
      $route(to, from) {
        if (to.query.step < from.query.step) this.step--
      }
    },
    created() {
      this.setRouteQuery()
    },
    methods: {
      onResize() {
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      },
      loginUser(e) {
        this.showTelForm = e
      },
      setStep(degre) {
        if (this.$device.isDesktop) {
          degre ? this.step++ : this.step--
        } else {
          this.step++
          this.setRouteQuery()
        }
      },
      setRouteQuery() {
        this.$router.push({
          path: this.$route.path,
          query: { step: this.step }
        })
      }
    },
  }
</script>