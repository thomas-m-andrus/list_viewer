export default {
  name: 'detail',
  components: {},
  props: [],
  data () {
    return {
      employee:{id: 20,first_name: 'Marlin',last_name: 'Spinka',email: 'Westley.Erdman@gmail.com',profile_pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/sergeyalmone/128.jpg',favorite_animal: 'http://lorempixel.com/640/480/animals',occupation: 'Principal Security Supervisor'},
      show:false
    }
  },
  computed: {
    name(){
      return this.employee.first_name + " " + this.employee.last_name
    }
  },
  mounted () {

  },
  methods: {

  }
}
