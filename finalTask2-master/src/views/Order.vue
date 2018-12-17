<template>

 <b-row>
   
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Filter" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

  <b-table striped hover :items="items" :fields="fields" :filter="filter" :per-page="pageSize" :current-page="pageIndex">
    <template slot="show_details" slot-scope="row">
      <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
      <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">
       {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
      </b-button>
      <!-- In some circumstances you may need to use @click.native.stop instead -->
      <!-- As row.showDetails is one-way, we call the toggleDetails function on @change -->
     
    </template>
    <template slot="row-details" slot-scope="row">
      <b-card>
        <b-row class="mb-4">
          <b-col sm="5" class="text-sm-right"><b>Order_ID:</b></b-col>
          <b-col>{{ row.item.order_id }}</b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col sm="5" class="text-sm-right"><b>Ship_name:</b></b-col>
          <b-col>{{ row.item.ship_name }}</b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col sm="5" class="text-sm-right"><b>Order_date:</b></b-col>
          <b-col>{{ row.item.order_date }}</b-col>
        </b-row>
        <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
      </b-card>
    </template>
  </b-table>
   
    <br>
 
   <b-pagination align="center" size="md" :total-rows="items.length" v-model="pageIndex" :per-page="pageSize">
    </b-pagination> 
    <div>CurrentPage: {{pageIndex}}</div>  
    
  </b-row>

</template>

<script>
import axios from "axios";
export default {
  data () {
    return {
      message: "Oder",
      items: [],
      filter: null,
      pageSize:10,
      pageIndex:1,
      fields: [ {
          key: "order_id",
          sortable: true
        },
        {
          key: "ship_name",
          sortable: true
        },
        ,
        {
          key: "freight",
          sortable: true
          
          
        },
        {
          key: "ship_country",
          sortable: true,
          
          
        },
        {
          key:  'show_details'  
        } 
        ]
    }
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
  },
  async mounted() {
    let Orders = await axios.get(
      "https://fierce-shore-66218.herokuapp.com/api/order"
    );
    Orders = Orders.data.data;
    this.items = Orders;
   
  }
}
 
  

</script>
