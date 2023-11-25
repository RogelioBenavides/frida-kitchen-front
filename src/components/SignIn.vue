<template>
    <div style="height: 100vh;">
        <div class="container d-flex flex-column justify-content-center align-items-center h-100 gap-4">
            <img src="../assets/images/frida-logo.png" alt="logo" class="head-logo" style="width: 16rem;" />
            <div class="card w-50 p-3">
                <form @submit.prevent="onFinish">
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
        </div>
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
        }
    }
}
</script>

<style scoped>

</style>