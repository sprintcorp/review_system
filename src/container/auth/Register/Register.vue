<template>
    
     <div style="text-align: center">
           <h1 >Register</h1>
            <div class="center_card">
             <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >

              <v-text-field
                ref="name"
                v-model="name"
                :rules="[() => !!name || 'This field is required']"
                :error-messages="errorMessages"
                label="Full Name"
                placeholder="John Doe"
                required
            ></v-text-field>

                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="e-mail"
                required
                ></v-text-field>


                <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="pasword"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                    style="margin-top: 20px"
                ></v-text-field>


                <v-autocomplete
                ref="role"
                v-model="role"
                :rules="[() => !!role || 'This field is required']"
                :items="role"
                label="Role"
                placeholder="Select..."
                required
            ></v-autocomplete>

                <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
                >
                Register
                </v-btn>

                
        </v-form>
            </div>
        </div>
  
</template>

<style lang="scss">
  @import "./register.scss";
</style>

<script src="./register.js"></script>