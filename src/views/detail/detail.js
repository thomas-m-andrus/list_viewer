import { mapGetters } from "vuex";

export default {
  name: 'detail',
  components: {},
  props: [],
  data () {
    return {
      show:false
    }
  },
  computed: {
    ...mapGetters({
      employee:"employees/getEmployeeDetail"
    }),
    name(){
      return this.employee.first_name + " " + this.employee.last_name
    }
  },
  mounted () {
    this.fetchDetails(this.$route.params.id)
  },
  methods: {
    goBack(){
      this.$router.push("/")
    },
    fetchDetails(id){
      this.$store.dispatch("employees/fetchEmployeeDetail",id)
    }
  }
}
