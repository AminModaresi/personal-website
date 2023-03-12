<template>
    <div class="container-fluid">
        <p class="title">مهارت های من</p>
        <div class="skill">
            <p class="skill__text">امروز مهارت های فنی زیادی هست که آدم میتونه کسب کنه. تلاش میکنم مهارت های خودم رو افزایش بدم و این لیست رو پربار‌تر کنم.
            </p>
            <div class="row">
                <div class="col-sm-10 mx-auto col-md-6 mb-4" v-for="(item, idx) in skillInfo" :key="idx">
                    <SkillItem :name-lang="item.nameLang" :description="item.description" :icon-image="item.iconImage" :skill-level="item.skillLevel" :icon-color="item.iconColor"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SkillItem from "@/components/skill/SkillItem.vue"
export default {
    data : () => ({
         skillInfo:[
            {nameLang : "JAVASCRIPT" , description : "JavaScript یا به اختصار js یک زبان برنامه‌نویسی در وب است که می‌تواند کدهای HTML و CSS را تغییر دهد.در واقع برای افزودن هرگونه انیمیشن و تحرک به عناصر صفحه، به زبان جاوا اسکریپت نیاز خواهیم داشت." , iconImage : "javascript" , skillLevel : "۷۰" , iconColor : "icon-yellow"},
            {nameLang : "CSS" , description : "CSS مخفف عبارت (Cascading Sheet Style) و به معنی برگه های به سبک آبشاری می‎باشد. سی اس اس یک زبان برنامه نویسی ظاهری است که وظیفه سنگین طراحی ظاهر سایت‌ها را برعهده دارد" , iconImage : "css3" , skillLevel : "۸۰" , iconColor : "icon-blue"},
            {nameLang : "HTML" , description : "HTML مخفف Hyper Text Markup Language بوده و در فارسی به آن زبان نشانه‌ گذاری ابرمتن می‌گویند. دقت کنید که HTML یک زبان برنامه نویسی نیست، بلکه یک زبان نشان‌گذاری یا Markup language به حساب می‌آید." , iconImage : "html5-10-569380" , skillLevel : "۸۰", iconColor : "icon-pink"},
            {nameLang : "BOOTSTRAP" , description : "Bootstrap مجموعه ای از ابزارهای رایگان برای ایجاد صفحات وب و نرم افزارهای تحت وب است که شامل دستورات HTML، CSS و توابع جاوا اسکریپت جهت تولید و نمایش فرم ها، دکمه ها و سایر المان های مورد نیاز طراحی وب می باشد." , iconImage : "bootstrap-7-1175254" , skillLevel : "۷۰" , iconColor : "icon-purple"},
            {nameLang : "SASS" , description : "Sass یک پیش‌پردازنده (Preproccesor) برای زبان CSS است. در واقع Sass آمده است تا محدودیت‌ها و ضعف‌های زبان CSS را جبران کند و با اضافه کردن ویژگی‌های جالبی به آن، نوشتن کد‌های CSS را راحت‌تر و سریع‌تر سازد." , iconImage : "sass-original" , skillLevel : "۵۰" , iconColor : "icon-pink2"},
            {nameLang : "VUE" , description : "Vue یا فریمورک ویو یک فریمورک برای زبان برنامه نویسی Javascript است . کاربرد vue.js برای ایجاد رابط کاربری دلپذیرتر و راحت تر در وب سایت ها میباشد . بطوری که با استفاده از Vue.js میتوانید وب سایتی پیاده کنید که تک صفحه ای باشد" , iconImage : "vuejs-original" , skillLevel : "۶۰", iconColor : "icon-green"},
            {nameLang : "REACT" , description : "React یک کتابخانه یا فریم‌ورک برای جاوا اسکریپت است که توسط فیس‌بوک توسعه داده شده است. این فریم ورک در طراحی رابط کاربری (UI – User Interface) کاربرد دارد و ابزاری برای ساخت اجزاء UI است." , iconImage : "React-icon.svg" , skillLevel : "۶۰", iconColor : "icon-sky-blue"},
            {nameLang : "NEXT.JS" , description : "Next.js یک فریمورک وب برای توسعه برنامه‌های تحت وب پویا با React است که از قابلیت SSR و SSG پشتیبانی می‌کند و بهبود سرعت بارگذاری صفحات و بهینه‌سازی SEO را بهبود می‌بخشد." , iconImage : "next-js-icon" , skillLevel : "۶۰", iconColor : "icon-sky-gray"},
        ]
    }),
    components : {
        SkillItem
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/skill/skill.scss";
</style>