<template>
   <div>
     <!-- <pre>{{ reviews }}</pre> -->
     <div class="center_card">
        <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">
            Reviews
          </th>
          <th class="text-center">
            Status
          </th>
          <th class="text-center">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        
        <tr
          v-for="item in reviews"
          :key="item._id"
        >
          <td>{{ item.review }}</td>
          <td>{{ item.status === true ? 'Verified':'Unverified' }}</td>
          <td v-if="item.status === false"><v-btn @click="validate(item._id,'true')">verify</v-btn></td>
          <td v-if="item.status === true"><v-btn @click="validate(item._id,'false')">unverify</v-btn></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <notification :status="show" :noty_color="color">{{message}}</notification>
</div>
   </div>
</template>


<style lang="scss">
  @import "./dashboard.scss";
</style>

<script src="./dashboard.js"></script>