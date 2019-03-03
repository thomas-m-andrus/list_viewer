import { mapGetters } from "vuex";

export default {
  name: 'list',
  components: {},
  props: [],
  data () {
    return {
      headers:[
        {label:'',sort:false,filter:false},
        {label:'First Name',sort:true,filter:true},
        {label:'Last Name',sort:true,filter:true}],
      //employees:[{id: 20,first_name: 'Marlin',last_name: 'Spinka',email: 'Westley.Erdman@gmail.com',profile_pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/sergeyalmone/128.jpg',favorite_animal: 'http://lorempixel.com/640/480/animals',occupation: 'Principal Security Supervisor'}],
      /*
      pagination:{
        rowsPerPage: 10
      }
      */
    }
  },
  computed: {
    ...mapGetters({
      employees:"employees/getEmployees",
    }),
    pagination: {
      get(){
        let page = this.$store.getters["employees/getPagination"];
        return page
      },
      set(pagination){
        this.$store.commit("employees/updatePagination",pagination)
        this.fetchEmployees()
      }
    }
  },
  mounted () {
    //this.$store.commit("employees/updatePagination",this.pagination)
    this.fetchEmployees()
  },
  methods: {
    fetchEmployees(){
      this.$store.dispatch("employees/fetchEmployees");
    }
  }
}
