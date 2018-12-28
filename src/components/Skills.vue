<template>
    <div class="container">
        <form @submit.prevent="addSkill">
            <input type="text" placeholder="Enter a skill you have.." v-model="skill" v-validate="'min:5'" name="skill"> 
            <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
            <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
            </transition>
            <input type="checkbox" id="checkbox" v-model="checked">
        </form>
        <div class="holder">
            <ul>
               <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
              <li v-for="(data, index) in skills" v-bind:key="index+1" >
                     {{data.skill}}
                     <i class >
                    </li>
                </transition-group>
            </ul>
        </div>

        <p>These are the skills that you possess.</p>
        <div v-bind:class="{alert:showAlert}">   </div>

        <div v-bind:style="alertObject"></div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
export default {
    data() {
        return {
            skill: '',
            skills : [
                {"skill": "Vue.js"},
                {"skill": "Frontend Developer"}
            ],
            showAlert: true,
            alertObject: {
                backgroundColor: 'yellow',
                width: '100%',
                height: '30px'
            },
            checked: false,
            skill: ''
        }
    },
    methods : {
        addSkill(){
            this.$validator.validateAll().then((result) => {
                if(result){
                    this.skills.push({skill: this.skill});
                    this.skill='';
                    console.log('The checkbox value is: '+this.checked);
                }else{  
                    console.log('Not valid');
                }
            })
        }
    }
}
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

    .alert-in-enter-active{
        animation: bounce-in .5s;
    }
    .alert-in-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0%{
            transform: scale(0); 
        }
        50%{
            transform: scale(1.5);
        }
        100%{
            transform: scale(1);
        }
    }

input {
    width: calc(100%);
    border: 0;
    padding: 20px;
    font-size: 1.3em; 
    background-color: #323333;
    /* 글자색  */
    color: #687F7F; 
}
    .alert{
        background: yellow;
        font-weight: bold;
        display: inline-block;
        padding: 5px;
        margin-top: -20px;
        width: 100%;
        height: 30px;
    }
    .holder {
        background: #fff;
    }
    ul{
        margin: 0;
        padding: 0;
        list-style-type: none; 
    }    

  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
    background: white;
  }

</style>
