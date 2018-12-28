<template>
    <div class="container">
        <form @submit.prevent="addSkill">
            <input type="text" placeholder="Enter a skill you have.." v-model="skill"> 
            <p>{{skill}} </p>
            <input type="checkbox" id="checkbox" v-model="checked">
        </form>
        <div class="holder">
            <ul>
                <li v-for="(data, index) in skills" :key="index">
                    {{index}}. {{data.skill}}
                </li>
            </ul>
        </div>

        <p>These are the skills that you possess.</p>
        <div v-bind:class="{alert:showAlert}">   </div>

        <div v-bind:style="alertObject"></div>
    </div>
</template>

<script>
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
            this.skills.push({skill: this.skill});
            this.skill='';
            console.log('The checkbox value is: '+this.checked);
        }
    }
}
</script>

<style scoped>
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
