<template>
    <img src="../assets/frida-logo.png" alt="logo" class="head-logo" />
    <div class="card">
        <form @submit.prevent="onFinish">
            <div class="mb-3">
                <label class="form-label">Correo Electrónico</label>
                <input v-model="username" type="email" class="form-control" placeholder="ejemplo@correo.com" required>
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
            username: '',
            password: '',
        }
    },
    methods: {
        onFinish() {
            alert(this.username + this.password + 'Bienvenido')
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