<template>
    <div class="page-wrapper">
        <div class="page" :id="$route.params.resumeid" v-if="person">
            <component
                :is="$route.params.resumeid"
                :person="person"
                :lang="lang"
            ></component>
        </div>
        <div class="section-edit">
            <input type="file" ref="file" v-on:change="importYAML()">
            <button v-on:click="print">Print Resume</button>
            <button v-on:click="exportYAML(person)" v-model="person">Export YAML</button>
            <FormCreator :object="person"></FormCreator>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import yaml from 'js-yaml';
    import '../resumes/resumes';
    import {
        terms
    } from '../terms';
    import { PERSON } from '../../resume/data.yml';

    const FormCreator = {
        name: 'FormCreator',
        props: ['object'],
        components: {
            FormCreator: FormCreator
        },
        template: `
            <div>
                <div class="row" v-for="field in Object.keys(object)">
                    <div
                        v-if="typeof object[field] !== 'object' || !object[field]"
                        class="col-12"
                    >
                        <input
                            v-model="object[field]"
                            :placeholder="field">
                    </div>
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
            return {
                person: '',
                terms: terms
            };
        },
        created() {
            this.importYAML();
        },
        methods: {
            importYAML: function() {
                if(this.$refs.file) {
                    this.file = this.$refs.file.files[0];

                    const r = new FileReader();
                    r.that = this;
                    r.onload = function(e) {
                        const contents = e.target.result;
                        this.that.person = yaml.safeLoad(contents, 'utf8');
                    };
                    r.readAsText(this.file);
                } else {
                    this.person = yaml.safeLoad(PERSON);
                }
            },
            exportYAML: (person) => {
                const a = window.document.createElement('a');
                document.body.appendChild(a);
                a.style = 'display: none';

                const yamlFile = yaml.safeDump(person);
                const blob = new Blob([yamlFile.toString()], { type: 'application/x-yaml' });
                const url = URL.createObjectURL(blob);

                a.href = url;
                a.download = 'data.yml';
                a.click();

                window.URL.revokeObjectURL(url);
            },
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
            }
        }
    });
</script>

<style scoped>
    @import '../styles/resume.less';
</style>
