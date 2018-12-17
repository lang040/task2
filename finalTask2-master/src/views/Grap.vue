<template>

<div v-if="datasets[0].data.length >0">
    <chartjs-bar v-bind:labels="labels" v-bind:datasets="datasets" v-bind:option="option"></chartjs-bar></div>
 
</template>

<script>    
import axios from 'axios'
export default {
    data(){
        return{
            
            labels: [ ],
            datasets:[{
                data:[],
                backgroundColor:["pink","brown","rose","pink","Yellow","Purple","pink","Yellow","Purple","pink","Purple","green","Purple","Yellow","Purple","Yellow","Purple","Yellow","Purple","pink","Yellow","Purple","pink","Yellow","Purple"]
            }],
            option:{
                title:{
                    display:true,
                    position:"bottom",
                   
                }
            }
        };
    },
  mounted(){
      var instance = this
      axios
      .get('https://fierce-shore-66218.herokuapp.com/api/orderCount')
      .then(function(response){
for(var i=0;i<response.data.data.length;i++){
    console.log(response.data.data[i].ship_country)
instance.labels.push(response.data.data[i].ship_country)
instance.datasets[0].data.push(response.data.data[i].count)}
      })
  }
};
</script>