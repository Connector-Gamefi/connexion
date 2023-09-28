<template>
    <el-form :model="formInline" class="__form" :rules="rules" ref="dynamicValidateForm">
        <el-form-item prop="email">
            <el-input v-model="formInline.email" placeholder="Enter Email">
                <template slot="append">
                    <div class="subscribe Poppins-ExtraBold" @click="onSubmit">
                        SIGN UP
                    </div>
                </template>
            </el-input>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    name: "sub-email",
    data() {
        return {
            formInline: {
                email: '',
            },
            rules: {
                email: [
                    {required: true, message: 'Email', trigger: 'blur'},
                    {type: 'email', message: 'Email', trigger: ['blur', 'change']}
                ]
            }
        }
    },
    methods: {
        onSubmit() {
            this.$refs['dynamicValidateForm'].validate((valid) => {
                if (valid) {
                    this.$store.dispatch('subScriptEmail', {
                        email: this.formInline.email
                    }).then(res => {
                        if (res.code === 0) {
                            this.$message.success('Subscription Success');
                        }
                    })
                } else {
                    return false;
                }
            });
        }
    }
}
</script>

<style scoped lang="less">
.subscribe {
    background: var(--col-static-blue);
    color: var(--col-static-white);
    font-size: 24px;
    cursor: pointer;
}

@media screen and(max-width: 720px) {
    .subscribe {
        font-size: 14px;
    }
}

@media screen and(min-width: 720px) {
    .subscribe {
        font-size: 16px;
    }
}

@media screen and(min-width: 920px) {
    .subscribe {
        font-size: 18px;
    }
}

@media screen and(min-width: 1080px) {
    .subscribe {
        font-size: 20px;
    }
}

@media screen and(min-width: 1220px) {
    .subscribe {
        font-size: 22px;
    }
}

@media screen and(min-width: 1440px) {
    .subscribe {
        font-size: 24px;
    }
}
</style>
