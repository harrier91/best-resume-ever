<template>
<div class="resume" id="ti8m">
    <table>
        <thead><tr><td>
            <div class="header-space">&nbsp;</div>
        </td></tr></thead>
        <tbody><tr><td>
            <div class="content">
                <div id="resume-header">
                    <img class="header-background" src="../../resume/ti8m-header.jpg" alt="ti8m-header" />
                    <img class="header-profile" />
                </div>
                <div id="resume-body">
                    <div id="title">
                        <span id="name">{{person.name.first}} {{person.name.middle}} {{person.name.last}} | </span>
                        <span id="position">{{person.position}}</span>
                    </div>
                    <div id="personal-data" class="row">
                        <div class="col-3">{{ lang.birthday }}:</div>
                        <div class="col-9">{{ person.birth.date }}</div>
                        <div class="col-3">{{ lang.location }}:</div>
                        <div class="col-9">{{ person.contact.city }}</div>
                        <div class="col-3">{{ lang.languages }}:</div>
                        <div class="col-9"><span v-for="language in person.languages" :key="language.name">{{ language.name }}, </span></div>
                        <div class="col-3">{{ lang.education }}:</div>
                        <div class="col-9"><span v-for="education in person.education" :key="education.degree">{{ education.degree }} {{ lang.in }} {{ education.major }} {{ lang.at }} {{ education.university }} <br/></span></div>
                    </div>
                    <div id="summary" class="row ti8m-container">
                        <div class="col-12 ti8m-title">{{lang.summary}}</div>
                        <div class="col-12 ti8m-sub-title">{{ lang.coreCompetencies }}</div>
                        <ul>
                            <li v-for="competency in person.competencies">{{ competency.name }}</li>
                        </ul>
                    </div>
                    <div id="know-how" class="row ti8m-container">
                        <div class="col-12 ti8m-title">{{lang.knowHow}}</div>
                        <div class="col-6" v-for="elem in person.knowledge">
                            <div class="ti8m-sub-title" >
                                {{ elem.title }}
                            </div>
                            <div class="description">
                                {{elem.description}}
                            </div>
                        </div>
                    </div>
                    <div id="projects" class="row ti8m-container">
                        <div class="col-12 ti8m-title">{{lang.projects}}</div>
                        <div class="col-12" v-for="project in person.projects" :key="project.name">
                            <div class="ti8m-sub-title" >
                                {{ project.name }}
                            </div>
                            <div class="row ti8m-container-project">
                                <div class="col-4">
                                    <div class="project-details">
                                        <div>{{lang.role}}</div>
                                        <div>{{project.role}}</div>
                                    </div>
                                    <div class="project-details">
                                        <div>{{lang.client}}</div>
                                        <div>{{project.client}}</div>
                                    </div>
                                    <div class="project-details">
                                        <div>{{lang.period}}</div>
                                        <div>{{project.timeperiod}}</div>
                                    </div>
                                </div>
                                <div class="col-8">
                                    <div class="description">
                                        {{project.description}}
                                    </div>
                                    <div class="description">
                                        {{lang.technologies}}: {{project.technologies}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </td></tr></tbody>
        <tfoot><tr><td>
            <div class="footer-space">&nbsp;</div>
        </td></tr></tfoot>
    </table>
    <div class="row" id="ti8m-header">
        <div class="col-9">
            Consulting. Design. Agile Projects. Products. Innovation Hosting.
        </div>
        <div class="col-3">
            <img src="../../resume/ti8m-logo.png" alt="ti8m Logo" />
        </div>
    </div>
    <div class="row" id="ti8m-footer">
        <div class="col-3">
            ti&m AG<br/>
            Zürich | Bern
        </div>
        <div class="col-3">
            Buckhauserstrasse 24<br/>
            8048 Zürich
        </div>
        <div class="col-3">
            T +41 44 497 75 00<br/>
            F +41 44 497 75 01
        </div>
        <div class="col-3">
            M info@ti8m.ch<br/>
            H www.ti8m.ch
        </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue';

const name = 'ti8m';
export default Vue.component(name, {
    props: ['person', 'lang'],
    name: name
});
</script>

<style lang="less" scoped>
    @import '../styles/ti8m.less';
</style>
