<template>
    <div class = "miniborders" style="text-align: center">   
        <p class="minibordertext">
            ورود به حساب شخصی
        </p>
        <p>
            <input type="text" name="username" id="username"  class="miniborderitems" placeholder="نام کاربری یا پست الکترونیک">
        </p>
        <p>
            <input type="password" name="password" id= "password" class="miniborderitems" placeholder="کلمه عبور">
        </p>
        <button class="miniborderbutton">
            ورود
        </button>
        
    </div>
</template>

<script>

</script>


<style>

.miniborders{
    max-width: 30%;
    max-height: 60%;
    background-color: aqua;
    text-align: center;
    overflow: hidden;

}
.miniborderitems{
    width : 90%;
    height : 35px;
    margin-bottom: 3%;
    text-align: center;
}
.miniborderbutton{
    width: 40%;
    height: 30px;
    margin-bottom: 3%;
}
.minibordertext{
    margin-top: 5%;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 20;
    color:darkorchid;
}
</style>