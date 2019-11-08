<template>
    <div>
        <p>
            <button class="button1 bouncy" @click="navigateToLogin">Login</button>
    
        </p>
        <p>
            <button class="button1 bouncy" @click="navigateToRegister"> Register </button>  
        </p>
        
    </div>
    
</template>

<script>
export default {
    methods:{
        navigateToLogin: function(){
            this.$router.push('/Login')
        },
        navigateToRegister: function(){
            this.$router.push('/Register')
        }
    }
}
</script>

<style>

.button1{
display:inline-block;
padding:0.35em 1.2em;
border:0.1em solid #FFFFFF;
margin:0 0.3em 0.3em 0;
border-radius:0.12em;
box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
font-weight:300;
color:#FFFFFF;
text-align:center;
transition: all 0.2s;
background-color: #000000;
}
.button1:hover{
color:#000000;
background-color:#FFFFFF;
}

.bouncy{
animation:bouncy 5s infinite linear;
position:relative;
}
@keyframes bouncy {
0%{top:0em}
40%{top:0em}
43%{top:-0.9em}
46%{top:0em}
48%{top:-0.4em}
50%{top:0em}
100%{top:0em;}
}


</style>