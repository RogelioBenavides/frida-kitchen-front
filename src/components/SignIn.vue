<template>
    <img src="../assets/images/frida-logo.png" alt="logo" class="head-logo" />
    <div class="card">
        <form @submit.prevent="onFinish">
            <p>Si ya tienes una cuenta, inicia sesión <router-link to="/login">aquí</router-link></p>
            <div class="mb-3">
                <label class="form-label">Correo Electrónico</label>
                <input v-model="username" type="email" class="form-control" placeholder="ejemplo@correo.com" required>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input v-model="firstPassword" type="password" class="form-control" placeholder="1234" required>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input v-model="secondPassword" type="password" class="form-control" placeholder="1234" required>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script>

export default {
    data() {
        return {
            username: '',
            firstPassword: '',
            secondPassword: '',
        }
    },
    methods: {
        onFinish() {
            if(this.firstPassword === this.secondPassword){
                alert(this.username + this.firstPassword + 'Bienvenido')
            } else{
                alert('Las contraseñas no coinciden')
            }
            this.$router.push('/')
        }
    }
}
</script>

<style>
body {
    font-family: 'Roboto', sans-serif;
    background-color: '#F7F3EB';
}
.head-logo {
    width: 15%;
    display: block;
    margin: 0 auto;
    margin-top: 5%;
}
.card {
    width: 30%;
    padding: 20px;
    margin: 0 auto;
    margin-top: 50px;
}
</style>