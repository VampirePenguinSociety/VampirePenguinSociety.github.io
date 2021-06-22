Vue.component('resource-info', {
    props: ['resource'],
    template: `<li>{{resource.desc}} (<span v-if="resource.link.length>0"><a :href="resource.link" target="_blank">{{resource.type}}</a></span><span v-else>No link yet</span>)<em v-if="resource.note"><br>{{resource.note}}</em></li>`
})
Vue.component('general-resource-for-role', {
    props: ["role"],
    template: `
    <article :id="role">
        <h3>Resources for a {{role}}</h3>
        <ul>
            <resource-info v-for="(resource, index) in resource_list" :resource="resource" :key="index"></resource-info>
        </ul>
    </article>`,
    computed: {
        resource_list() {
            return general_resources[this.role]
        }
    }
})

Vue.component('trial-resources', {
    props: ['trial'],
    template: `
    <article :id="trial">
        <h3>{{trial_name}} ({{trial}})</h3>
        <ul>
            <resource-info v-for="(resource, index) in resource_list" :resource="resource" :key="index"></resource-info>
        </ul>
    </article>
    `,
    computed: {
        trial_name() {
            return trials_full[this.trial]
        },
        resource_list() {
            return trial_resources[this.trial]
        }
    }
})

new Vue({
    el: "#root",
    template: `
    <main id="root">
        <section>
            <h1>General Resources</h1>
            <general-resource-for-role v-for="role in roles" :key="role" :role="role"></general-resource-for-role>
            <h1>Trials Resources</h1>
            <trial-resources v-for="trial in trials" :key="trial" :trial="trial"></trial-resources>
        </section>
        <aside>
            <article>
            <h2>Quick Links</h2>
                <h3>General Resources</h3>
                <ul>
                    <li v-for="role in roles" :key="role"><a :href="'#'+role">{{role}}</a></li>
                </ul>
                <h3>Trial Resources</h3>
                <ul>
                    <li v-for="trial in trials" :key="trial"><a :href="'#'+trial">{{trials_full[trial]}} ({{trial}})</a></li>
                </ul>
            </article>
        </aside>
    </main>
    `,
    data: {
        roles: roles,
        general_resources: general_resources,
        trials: trials,
        trials_full: trials_full,
        trial_resources: trial_resources
    }
})