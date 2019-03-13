<template>
<div class="resume">
  <div class="leftCol m_box">
    <div class="shadow"></div>
    <div class="heading" id="myselfpic">
    </div>
    <div class="section-headline">
      {{ lang.contact }}
    </div>
    <div class="item">
      <div class="icon">
        <i class="material-icons">account_circle</i>
      </div>
      <div class="text">
        <ul>
          <li> {{ lang.born }} {{person.birth.year}} {{ lang.bornIn }} {{person.birth.location}}</li>
        </ul>
      </div>
    </div>

    <div class="item">
      <div class="icon">
        <i class="material-icons">location_city</i>
      </div>
      <div class="text">
        <ul>
          <li>{{person.contact.street}}</li>
          <li>{{person.contact.city}}</li>
        </ul>
      </div>
    </div>

    <a :href="contactLinks.phone">
      <div class="item">
        <div class="icon">
          <i class="material-icons">phone</i>
        </div>
        <div class="text">
          {{person.contact.phone}}
        </div>
      </div>
    </a>

    <a :href="contactLinks.email">
      <div class="item">
        <div class="icon">
          <i class="material-icons">email</i>
        </div>
        <div class="text">
          {{person.contact.email}}
        </div>
      </div>
    </a>

    <a v-if="person.contact.github" :href="contactLinks.github" target="_blank">
      <div class="item">
        <div class="icon">
          <i class="fa fa-github"></i>
        </div>
        <div class="text">
          <span>@{{person.contact.github}}</span>
          <span>github.com/{{person.contact.github}}</span>
        </div>
      </div>
    </a>

    <a v-if="person.contact.website" :href="person.contact.website" target="_blank">
      <div class="item">
        <div class="icon">
          <i class="material-icons">language</i>
        </div>
        <div class="text">
          <span>{{person.contact.website}}</span>
        </div>
      </div>
    </a>

    <div class="item last">
      <div class="section-headline">
        {{ lang.skills }}
      </div>
      <div class="skill" v-for="skill in person.skills" :key="skill.name">
        <div class="right">
          <span>{{skill.name}}&nbsp;</span>
          <div class="progress">
            <div class="determinate" :style="'width: '+skill.level+'%;'">
              <i class="fa fa-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rightCol">
    <div class="title">
      <h2>{{person.name.first}} {{person.name.middle}} {{person.name.last}}</h2>
      <div>{{person.position}}</div>
    </div>

    <div class="section-headline">{{ lang.experience }}</div>
    <div class="block" v-for="experience in person.experience" :key="experience.company">
      <div class="block-helper"></div>
      <h3 class="headline">{{experience.position}} - {{experience.company}}</h3>
        <div class="subheadline">{{experience.timeperiod}}</div>
        <p class="info">
          {{experience.description}}
        </p>
    </div>
    <div class="section-headline">{{ lang.education }}</div>
    <div class="block" v-for="education in person.education" :key="education.degree">
      <div class="block-helper"></div>
      <div class="headline">{{education.degree}}</div>
      <p class="info">
        {{education.timeperiod}}, {{education.description}}
      </p>
    </div>
  </div>

  <div style="clear:both;"></div>
</div>
</template>

<script>
import Vue from 'vue';
const name = 'material-dark';

export default Vue.component(name, {
    props: ['person', 'lang', 'contactLinks'],
    name: name
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../styles/material-dark.less";
</style>
