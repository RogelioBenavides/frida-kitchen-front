<template>
    <img src="../assets/images/frida-logo.png" alt="logo" class="head-logo" />
    <div class="card">
        <form @submit.prevent="onFinish">
            <p>Si no tienes una cuenta, regístrate <router-link to="/signin">aquí</router-link></p>
            <div class="mb-3">
                <label class="form-label">Correo Electrónico</label>
                <input v-model="email" type="email" class="form-control" placeholder="ejemplo@correo.com" required>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input v-model="password" type="password" class="form-control" placeholder="1234" required>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script>

export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        onFinish() {
            fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password,
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if(data.access_token){
                    localStorage.setItem('token', data.access_token)
                    this.$router.push('/')
                } else{
                    alert('Usuario o contraseña incorrectos')
                }
            })
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