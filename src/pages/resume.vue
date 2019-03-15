<template>
    <div class="page-wrapper">
        <div class="page" :id="$route.params.resumeid">
            <component
                :is="$route.params.resumeid"
                :person="person"
                :lang="lang"
                :contactLinks="contactLinks"
            ></component>
        </div>
        <div class="section-edit">
            <button v-on:click="print">Print Resume</button>
            <FormCreator :object="person"></FormCreator>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { getVueData } from './options';
    import '../resumes/resumes';

    const FormCreator = {
        name: 'FormCreator',
        props: ['object'],
        components: {
            FormCreator: FormCreator
        },
        template: `
            <div>
                <div class="row" v-for="field in Object.keys(object)">
                    <label
                        v-if="typeof object[field] !== 'object' || !object[field]"
                        class="col-12"
                    >
                        {{field}}
                        <input v-model="object[field]">
                    </label>
                    <div
                        v-else
                        class="col-12"
                    >
                        <h2>{{field}}:</h2>
                        <FormCreator :object="object[field]"></FormCreator>
                    </div>
                </div>
            </div>
        `
    };

    export default Vue.component('resume', {
        name: 'app',
        components: {
            FormCreator: FormCreator
        },
        data() {
            return getVueData();
        },
        methods: {
            print: () => {
                window.print();
            }
        },
        computed: {
            lang() {
                const defaultLang = this.terms.en;
                const useLang = this.terms[this.person.lang];

                // overwrite non-set fields with default lang
                Object.keys(defaultLang)
                    .filter(k => !useLang[k])
                    .forEach(k => {
                        console.log(k);
                        useLang[k] = defaultLang[k];
                    });

                return useLang;
            },

            contactLinks() {
                const links = {};

                if (this.person.contact.github) {
                    links.github = `https://github.com/${this.person.contact.github}`;
                }

                if (this.person.contact.codefights) {
                    links.codefights = `https://codefights.com/profile/${this.person.contact.codefights}`;
                }

                if (this.person.contact.medium) {
                    links.medium = `https://medium.com/@${this.person.contact.medium}`;
                }

                if (this.person.contact.email) {
                    links.email = `mailto:${this.person.contact.email}`;
                }

                if (this.person.contact.linkedin) {
                    links.linkedin = `https://linkedin.com/in/${this.person.contact.linkedin}`;
                }

                if (this.person.contact.phone) {
                    links.phone = `tel:${this.person.contact.phone}`;
                }

                return links;
            },
        }
    });
</script>

<style scoped>
    @import '../styles/resume.less';
</style>
