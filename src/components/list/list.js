import { mapGetters } from "vuex";

export default {
  name: 'list',
  components: {},
  props: [],
  data () {
    return {
      headers:[
        {},
        {label:'First Name',sort:"asc",filter:true,dbVal:"first_name"},
        {label:'Last Name',sort:"asc",filter:true,dbVal:"last_name"}
      ],
      sortIcons:{
        asc:"arrow_upward",
        desc:"arrow_downward"
      }
    }
  },
  computed: {
    ...mapGetters({
      employees:"employees/getEmployees",
      filters: "employees/getFilters",
      sort:"employees/getSort"
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
    },
    loading(){
      this.$store.getters["employees/getSpecificLoad"]("employees")
    }
  },
  mounted () {
    this.fetchEmployees()
  },
  methods: {
    fetchEmployees(){
      this.$store.dispatch("employees/fetchEmployees");
    },
    filterResults(){
      this.$store.commit("employees/updatePaginationElement",{page:1});
      this.fetchEmployees();
    },
    openDetail(employeeId){
      this.$router.push(`/detail/${employeeId}`)
    },
    updateSort(idx){
      let sort = this.headers[idx]
      let result = {
        prop:null,
        direction:null
      }
      result.prop = sort.dbVal;
      if(sort.dbVal===this.sort.prop){
        sort.sort = (sort.sort === "asc") ? "desc" : "asc";
      }
      result.direction = sort.sort;
      this.$store.commit("employees/updateSort",result);
      this.fetchEmployees()
    },
    activeSort(val){
      let result = (this.sort.prop===val) ? "green" : "grey";
      return result;
    }
  }
}
