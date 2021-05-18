<template>
  <v-row>
    <v-col cols="12">
      <slot name="logo"></slot>
    </v-col>
    <v-col cols="12">
      <v-window v-model="step">
        <v-window-item :value="0">
          <v-form>
            <v-text-field type="email" label="Email" id="email"></v-text-field>
            <v-text-field type="password" label="Password" id="psw"></v-text-field>
            <v-btn
              dark
              depressed
              block
              color="#424242"
              class="mt-3"
              :loading="spinner.login"
              @click="loginUser"
              @keyup.enter="loginUser"
            >{{ btnLogin }}</v-btn>
          </v-form>
        <v-row justify="space-between" class="py-8">
          <v-btn color="secondary" text @click="setScreen('join', 1)">Registration</v-btn>
          <v-btn color="secondary" text @click="setScreen('recovery', 2)">Recovery password</v-btn>
        </v-row>
        </v-window-item>
        <v-window-item :value="1">
          <v-form>
            <v-text-field type="email" label="Email" id="email"></v-text-field>
            <v-text-field type="password" label="Password" id="psw"></v-text-field>
            <v-text-field type="password" label="Re password" id="psw"></v-text-field>
            <v-btn dark depressed block class="mt-3" color="#424242">Registration</v-btn>
          </v-form>
          <v-row justify="space-between" class="py-8">
            <v-btn color="secondary" text @click="setScreen(undefined, 0)">{{ btnLogin }}</v-btn>
          </v-row>
        </v-window-item>
        <v-window-item :value="2">
          <v-form>
            <v-text-field type="email" label="Email" id="email"></v-text-field>
            <v-btn dark depressed block class="mt-3" color="#424242">Recovery</v-btn>
          </v-form>
          <v-row justify="space-between" class="py-8">
            <v-btn color="secondary" text @click="setScreen(undefined, 0)">{{ btnLogin }}</v-btn>
          </v-row>
        </v-window-item>
      </v-window>
      <!-- <v-form>
        <v-text-field type="email" label="Email" id="email"></v-text-field>
        <v-text-field v-if="screen !== 'recovery'" type="password" label="Password" id="psw"></v-text-field>
        <v-text-field v-if="screen === 'join'" type="password" label="Re password" id="psw"></v-text-field>
      </v-form>
      <v-row justify="center" class="px-3 py-8">
        <v-btn
          v-if="screen === 'default'"
          dark
          depressed
          block
          color="#424242"
          :loading="spinner.login"
          @click="loginUser"
          @keyup.enter="loginUser"
        >{{ btnLogin }}</v-btn>
        <v-btn v-if="screen === 'join'" dark depressed block color="#424242">Registration</v-btn>
        <v-btn v-if="screen === 'recovery'" dark depressed block color="#424242">Recovery</v-btn>
      </v-row>
      <v-row justify="space-between" class="px-3">
        <v-btn v-if="screen === 'join' || screen === 'recovery'" color="secondary" text @click="setScreen()">{{ btnLogin }}</v-btn>
        <v-btn  v-if="screen === 'default'" color="secondary" text @click="setScreen('join')">Registration</v-btn>
        <v-btn v-if="screen === 'default'" color="secondary" text @click="setScreen('recovery')">Recovery password</v-btn>
      </v-row> -->
    </v-col>
  </v-row>
</template>
<script>
  export default {
    name: 'LoginForm',
    props: {
      btnLogin: {
        type: String,
        default: 'Login'
      }
    },
    data() {
      return {
        email: null,
        psw: null,
        rePsw: null,
        spinner: {
          login: false
        },
        step: 0
      }
    },
    computed: {
      // screen() {
      //   switch (this.$route.query.screen) {
      //     case 'join': return 'join'
      //     case 'recovery': return 'recovery'
      //     default: return 'default'
      //   }
      // }
    },
    watch: {
      $route(to) {
        switch(to.query.screen) {
          case 'join':
            this.step = 1
            break
          case 'recovery': 
            this.step = 2
            break
          default:
            this.step = 0
            break
        }
      }
    },
    methods: {
      setScreen(screen, step) {
        this.step = step
        const route = queryData => {
          const fiter = ({screen, ...rest}) => rest
          return {
            path: this.$route.path,
            query: queryData ? {...this.$route.query, screen: queryData} : fiter(this.$route.query)
          }
        }
        if (screen) this.$router.push(route(screen))
        else this.$router.push(route())
      },
      loginUser() {
        this.spinner.login = true
        setTimeout(() => {
          this.$emit('user-loged', true)
          this.spinner.login = false
        }, 1000)
      }
    }
    // layout(context) {
    //   return context.$device.isMobile ? 'loginMobile' : 'loginDesktop'
    // }
  }
</script>