Vue.component('questions-list', {
    props: ['type', 'question_list'],
    template:
    `
    <article>
        <h2>{{type}}</h2>
        <question-answer-pair v-for="(qa, index) in question_list" :key="index" :number="index" :question="qa.question" :answer="qa.answer" :type="type"></question-answer-pair>
    </article>
    `
})

Vue.component('question-answer-pair', {
    props: ['number', 'question', 'answer', 'type'],
    template:
    `
    <div>
    <p class="question" :id="question_id">{{number+1}}. {{question}}</p>
    <p class="answer" v-for="a in answer">{{a}}</p>
    </div>
    `,
    computed: {
        question_id() {
            return this.type + "_" + this.number.toString()
        }
    }
})

Vue.component("quick-nav-section", {
    props: ['type', 'question_list'],
    template: `
    <div>
        <h3>{{type}}</h3>
        <ol>
            <quick-nav-question-link v-for="(qa,index) in question_list" :key="index" :number="index" :type="type" :question="qa.question"></quick-nav-question-link>
        </ol>
    </div>
    `
})

Vue.component("quick-nav-question-link", {
    props: ['type', 'number', 'question'],
    template: `
    <li><a :href="question_id">{{question}}</a></li>
    `,
    computed: {
        question_id() {
            return "#" + this.type + "_" + this.number.toString()
        }
    }
})

new Vue({
    el: '#main',
    template: `
        <main id="main">
            <section>
                <h1>Frequently Asked Questions</h1>
                <questions-list v-for="qalist in QAList" :key="qalist.type" :type="qalist.type" :question_list="qalist.QA"></questions-list>
            </section>
            <aside>
                <article id="quick_nav">
                    <h2>Quick Links</h2>
                    <quick-nav-section v-for="qalist in QAList" :key="qalist.type" :type="qalist.type" :question_list="qalist.QA"> </quick-nav-section>
                </article>
            </aside>
        </main>
    `,
    data: {
        QAList: QAList
    }
})