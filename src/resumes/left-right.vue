<template>
    <div class="resume" id="resume1">
        <div class="row text-center">
            <span class="name">{{person.name.first}} {{person.name.middle}} {{person.name.last}}</span>
        </div>
        <div class="row image center">
            <div class="left half">
                <div class="contact">
                    <span>{{person.contact.email}}
                        <i class="fa fa-envelope" aria-hidden="true"></i></span>
                    <span>{{person.contact.phone}}
                        <i class="fa fa-phone" aria-hidden="true"></i></span>
                </div>
            </div>
            <div class="img"></div>
            <div class="right half">
                <div class="contact">
                    <span><i class="fa fa-map-marker" aria-hidden="true"></i>
                    {{person.contact.city}}</span>
                    <span><i class="fa fa-globe" aria-hidden="true"></i>
                    {{person.contact.nationality}}</span>
                </div>
            </div>
        </div>
        <div class="left half">
            <div class="block">
                <h3>{{ lang.education }}</h3>
                <div class="block-element" v-for="education in person.education" :key="education.degree">
                    <span class="small float-left"> {{education.timeperiod}}</span>
                    <span class="italic">{{education.degree}}</span>
                    <span class="bold">{{education.major}}</span>
                    <span class="university">{{education.university}}</span>
                </div>
            </div>
            <div class="block">
                <h3>{{ lang.volunteering }}</h3>
                <div class="block-element" v-for="volunteering in person.volunteering" :key="volunteering.association">
                    <span class="small float-left"> {{volunteering.timeperiod}}</span>
                    <span class="italic"> {{volunteering.position}} </span><br/>
                    <span class="bold"> {{volunteering.association}} </span>
                    <span class="description"> {{volunteering.description}} </span>
                </div>
            </div>
            <div class="block">
                <h3>{{ lang.hobbies }}</h3>
                <div class="block-element hobby-block" v-for="hobby in person.hobbies" :key="hobby.name">
                    <span><i :class="hobby.iconClass"></i>{{hobby.name}}</span>
                </div>
            </div>
        </div>
        <div class="right half">
            <div class="block">
                <h3>{{ lang.experience }}</h3>
                <div class="block-element" v-for="experience in person.experience" :key="experience.company">
                    <span class="small float-right"> {{experience.timeperiod}}</span>
                    <span class="italic"> {{experience.position}} </span><br/>
                    <span class="bold"> {{experience.company}} </span>
                    <span class="description"> {{experience.description}} </span>
                </div>
            </div>
            <div class="block">
                <h3>{{ lang.projects }}</h3>
                <div class="block-element" v-for="project in person.projects" :key="project.name">
                    <span class="bold"> {{project.name}} </span><br/>
                    <span class="italic"> {{project.technologies}} </span>
                    <span class="description"> {{project.description}} </span>
                </div>
            </div>
            <div class="block">
                <h3>{{ lang.skills }}</h3>
                <div class="block-element level-block" v-for="skill in person.skills" :key="skill.name">
                    <span class="level-name">{{skill.name}}</span>
                    <div class="level-bar">
                        <div :style="'width: '+skill.level+'%'" class="level"></div>
                    </div>
                </div>
            </div>
            <div class="block">
                <h3>{{ lang.languages }}</h3>
                <div class="block-element level-block" v-for="language in person.languages" :key="language.name">
                    <span class="level-name">{{language.name}}</span>
                    <span><i v-for="index in language.level" class="fa fa-star"></i></span>
                </div>
            </div>
            <div class="block">
                <div class="block-element knowledge-block">{{person.knowledge}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';

    const name = 'left-right';
    export default Vue.component(name, {
        props: ['person', 'lang', 'contactLinks'],
        name: name
    });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import '../styles/left-right.less';
</style>
