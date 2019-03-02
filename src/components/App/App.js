export default {
  name: 'App',
  components: {
  },
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    goToHome(){
      this.$router.push({name: "detail", params: {id:1}})
    }
  }
}
