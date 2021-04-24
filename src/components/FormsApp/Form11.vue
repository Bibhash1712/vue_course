<template>
    <div >
        <form>
            <div >
                <div >
                    <h1>File a Complaint</h1>
                    <hr>
                    <div >
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                :value="userData.email"
                                @input="userData.email = $event.target.value">
                    </div>
                    <div >
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="userData.password">
                        <p>{{ userData.password }}</p>
                    </div>
                    <div >
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="userData.age">
                    </div>

                </div>
            </div>
            <div >
                <div >
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="message"></textarea>
                </div>
            </div>
            <div >
                <div >
                    <div >
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="sendMail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="sendMail"> Send Infomail
                        </label><!-- Also show for single checkbox with true/ false -->
                    </div>

                </div>
            </div>
            <div >
                <div >
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="gender"> Female
                    </label>
                </div>
            </div>
            <div >
                <div >
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedPriority">
                        <!-- <option
                                v-for="priority in priorities"
                                >{{ priority }}</option> -->
                    </select>
                </div>
            </div>
            <div >
                <!-- <div >
                    <app-switch v-model="dataSwitch"></app-switch>
                </div> -->
            </div>
            <hr>
            <div >
                <div >
                    <button
                            
                            @click.prevent="submitted">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div  v-if="isSubmitted">
            <div >
                <div >
                    <div >
                        <h4>Your Data</h4>
                    </div>
                    <div >
                        <p>Mail: {{ userData.email }} </p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Age: {{ userData.age }}</p>
                        <p style="white-space: pre">Message: {{ message }}</p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <!-- <li v-bind:key= "sendMail" v-for="item in sendMail">{{ item }}</li> -->
                        </ul>
                        <p>Gender:  {{ gender }}</p>
                        <p>Priority: {{ selectedPriority }}</p>
                        <p>Switched: {{ dataSwitch }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //import Switch from './Switch.vue';

    export default {
        data () {
            return {
                userData: {
                    email: '',
                    password: '',
                    age: 27
                },
                message: 'A new Text',
                sendMail: [],
                gender: 'Male',
                selectedPriority: 'High',
                priorities: ['High', 'Medium', 'Low'],
                dataSwitch: true,
                isSubmitted: false
            }
        },
        methods: {
          submitted() {
              this.isSubmitted = true;
          }
        },
        components: {
            // appSwitch: Switch
        }
    }
</script>

<style>
</style>
