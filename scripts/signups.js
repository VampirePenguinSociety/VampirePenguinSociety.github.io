let trials = [trial_1, trial_2]
let signup_form_active = false



Vue.component('signup-form', {
    props: ['curr_trial', 'signup_form_active'],
    template: `
    <article id="signup_form">
    <p v-if="!signup_form_active">Select a trial to sign up for it...</p>
    <form v-if="signup_form_active">
    <h3>Signup for {{curr_trial.name}}</h3>
    <trial-general-info v-bind:trial="curr_trial"></trial-general-info>
    <label for="name_input">Enter your in-game name:</label>
    <input id="signup_name_input" type="text" v-model="signup_name">
    <label for="role_select">Select your role:</label>
    <select id="role_select" name="role_select" v-model="signup_role">
        <option></option>
        <option v-if="isOpenTank">Tank</option>
        <option v-if="isOpenHeal">Healer</option>
        <option v-if="isOpenDPS">DPS</option>
    </select>
    <button type='button' id="confirm_signup" @click="addNewSignup()" :disabled="!isValidInput">Sign up</button>
    <button type='button' id="cancel_signup" @click="cancelSignup()">Cancel</button>
    <p v-if="success && sent">Signup updated!</p>
    <p v-if="!success && sent">Signup failed</p>
    </form>
    </article>`,
    data: function () {
        return {
            signup_name: "",
            signup_role: "",
            sent: false,
            success: false
       } 
    },
    computed: {
        isValidInput() {
            return this.signup_name.length > 0 && ["tank", "healer", "dps"].includes(this.signup_role.toLowerCase())
        },
        isOpenTank() {
            return this.curr_trial.signups.tanks.length < this.curr_trial.needed_roles.tank
        },
        isOpenHeal() {
            return this.curr_trial.signups.healers.length < this.curr_trial.needed_roles.healer
        },
        isOpenDPS() {
            return this.curr_trial.signups.dps.length < this.curr_trial.needed_roles.dps
        }
    },
    methods: {
        addNewSignup() {
            this.signup_role = this.signup_role.toLowerCase()
            console.log("Sending request to server...", this.signup_name, this.signup_role)
            // not doing much error checking here, because that would be done by database
            this.sent = true
            if (this.signup_name.length > 0 && ["tank", "healer", "dps"].includes(this.signup_role.toLowerCase()))
                this.success = true
            else
                this.success = false
            this.signup_name = ""
            this.signup_role = ""
             
        },
        cancelSignup() {
            this.$root.curr_trial = {}
            this.$root.signup_form_active = !this.signup_form_active
        }
    }
})
    

Vue.component('roster-list', {
    props: ['type', 'icon', 'icon_class', 'participants', "needed_num"],
    template: `
    <div class="roster_list">
    <p><span v-bind:class="icon_class">{{icon}}</span> {{type}} ({{participants.length}}/{{needed_num}}) <span v-bind:class="icon_class">{{icon}}</span></p>
    <ol>
        <li v-for="p in participants" v-bind:key="p">{{p}}</li>
    </ol>
    </div>
    `
})

Vue.component('trial-general-info', {
    props: ['trial'],
    template: `
    <div>
    <ul>
        <li><strong>Trial:</strong> {{trial.name}}</li>
        <li><strong>Difficulty:</strong> {{trial.difficulty}}</li>
        <li><strong>Host:</strong> {{trial.host}}</li>
        <li><strong>Date:</strong> {{trialDate}}</li>
        <li><strong>Time:</strong> {{trialTime}}</li>
        <li><strong>Duration:</strong> {{trial.time_needed}}</li>
    </ul>
    </div>`,
    computed: {
        trialTime() {
            let date_of_trial = new Date(this.trial.datetime);
            return date_of_trial.toLocaleTimeString('en', {hour: '2-digit', minute: '2-digit', timeZoneName: 'short'})
        },
        trialDate() {
            let date_of_trial = new Date(this.trial.datetime)
            return date_of_trial.toLocaleDateString("en-GB", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        }
    }
})
    
Vue.component('trial-info', {
    props: ['trial'],
    template: `
    <article class="signup_listing">
        <h2>{{trial.name}} ({{trial.difficulty}})</h2>
        <button id="showSignup" v-if="!isCurrentlyShown()" @click="showSignupForm()">Sign up</button>
        <button id="hideSignup" v-else @click="showSignupForm()">Cancel Signup</button>
        <h3>Information</h3>
        <trial-general-info v-bind:trial="trial"></trial-general-info>
        <h3>Requirements</h3>
        <p v-for="req in trial.requirements">{{req}}</p>
        <h3>Annoumcements</h3>
        <p v-for="announcement in trial.announcements">{{announcement}}</p>
        <h3>Roster</h3>
        <roster-list
            v-bind:participants="trial.signups.tanks"
            v-bind:needed_num="trial.needed_roles.tank"
            type="Tanks"
            icon="shield"
            icon_class="material-icons-outlined">
        </roster-list>
        <roster-list
            v-bind:participants="trial.signups.healers"
            v-bind:needed_num="trial.needed_roles.healer"
            type="Healers"
            icon="star_border"
            icon_class="material-icons-outlined">
        </roster-list>
        <roster-list
            v-bind:participants="trial.signups.dps"
            v-bind:needed_num="trial.needed_roles.dps"
            type="DPS"
            icon="bolt"
            icon_class="material-icons-outlined">
        </roster-list>
    </article>
    `,
    computed: {
        trialTime() {
            let date_of_trial = new Date(this.trial.datetime);
            return date_of_trial.toLocaleTimeString('en', {hour: '2-digit', minute: '2-digit', timeZoneName: 'short'})
        },
        trialDate() {
            let date_of_trial = new Date(this.trial.datetime)
            return date_of_trial.toLocaleDateString("en-GB", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        }
    },
    methods: {
        showSignupForm() {
            if (!this.$root.signup_form_active || !this.$root.curr_trial || this.trial._id === this.$root.curr_trial._id)
                this.$root.signup_form_active = !this.$root.signup_form_active
            this.$root.curr_trial = this.trial
        },
        isCurrentlyShown() {
            return this.$root.curr_trial && this.trial._id === this.$root.curr_trial._id && this.$root.signup_form_active
        }
    }
})

Vue.component('trials-list', {
    props: ['trials'],
    template: `
    <section>
        <h1>Open Signups</h1>
        <trial-info v-for="trial in this.trials" v-bind:key="trial._id" v-bind:trial="trial"></trial-info>
    </section>
    `
})

new Vue({
    el: '#root',
    data: {
        trials: trials,
        signup_form_active: signup_form_active,
        curr_trial: {}
    }
})
