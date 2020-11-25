<template>
   <div>
     <!-- <pre>{{ reviews }}</pre> -->
     <div class="center_card">
        <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Reviews
          </th>
        </tr>
      </thead>
      <tbody>
        
        <tr
          v-for="item in reviews"
          :key="item._id"
        >
          <td>{{ item.review }}</td>
         
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>
   </div>
</template>


<style lang="scss">
  @import "./dashboard.scss";
</style>

<script src="./dashboard.js"></script>