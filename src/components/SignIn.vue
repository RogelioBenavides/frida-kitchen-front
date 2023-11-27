<template>
    <div style="height: 100vh;">
        <div class="container d-flex flex-column justify-content-center align-items-center h-100 gap-4">
            <img src="../assets/images/frida-logo.png" alt="logo" class="head-logo" style="width: 16rem;" />
            <div class="card w-50 p-3">
                <p>Si ya tienes una cuenta, inicia sesión <router-link to="/login">aquí</router-link></p>
                <form @submit.prevent="onFinish">
                    <div class="mb-3">
                        <label class="form-label">Nombre</label>
                        <input v-model="user_name" type="text" class="form-control" placeholder="Juan" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Apellido</label>
                        <input v-model="last_name" type="text" class="form-control" placeholder="Pérez" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Correo Electrónico</label>
                        <input v-model="email" type="email" class="form-control" placeholder="ejemplo@correo.com" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Contraseña</label>
                        <input v-model="first_password" type="password" class="form-control" placeholder="1234" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Contraseña</label>
                        <input v-model="second_password" type="password" class="form-control" placeholder="1234" required>
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
            user_name: '',
            last_name: '',
            email: '',
            first_password: '',
            second_password: '',
        }
    },
    methods: {
        onFinish() {
            if(this.first_password !== this.second_password){
                alert('Las contraseñas no coinciden')
                return
            }
            fetch('http://127.0.0.1:5000/users/frontAdd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_name: this.user_name,
                    last_name: this.last_name,
                    email: this.email,
                    password: this.first_password,
                })
            }).then((response) => {
                if(response.status === 400){
                    alert('El correo ya está registrado')
                    return
                } else {
                    alert('Usuario registrado')
                    this.$router.push('/login')
                }
            }
            ).catch(err => console.log(err))

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