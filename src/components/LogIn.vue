<template>
    <div style="height: 100vh;">
        <div class="container d-flex flex-column justify-content-center align-items-center h-100 gap-4">
            <img src="../assets/images/frida-logo.png" alt="logo" class="head-logo" style="width: 16rem;" />
            <div class="card w-50 p-3">
                <p>Si no tienes una cuenta, crea una <router-link to="/signin">aquí</router-link></p>
                <form @submit.prevent="onFinish">
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
        </div>
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
            fetch('http://35.209.86.116:5001/login', {
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
                    localStorage.setItem('user', data.user);
                    localStorage.setItem('token', data.access_token);
                    this.$router.push('/');
                } else{
                    alert('Usuario o contraseña incorrectos')
                }
            })
        }
    }
}
</script>

<style>

</style>