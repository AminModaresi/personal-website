<template>
    <div class="skill-item">
        <div class="skill-item__header">
            <div class="skill-item__img" :class="iconColor">
                <img :src="iconUrl" alt="" />
            </div>
            <p class="skill-item__title">{{ nameLang }}</p>
        </div>
        <p class="skill-item__text">
            {{description}}
        </p>
        <p class="skill-item__level">درصد پیشرفت : <span class="text-blue">%{{ skillLevel }}</span></p>
    </div>
</template>
<script>
export default {
    props : {
        nameLang : {
            type : String,
            require : true
        },
        description : {
            type : String,
            require : true
        },
        iconImage:  {
            type : String,
            require : true
        },
        skillLevel : {
            type : String,
            require : true
        },
        iconColor : {
            type : String,
            require : false,
            default : "color-yellow"
        }
    },
    computed : {
        iconUrl(){
            return require(`@/assets/images/skill/${this.iconImage}.png`)
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/sass/skill/skill.scss";
</style>