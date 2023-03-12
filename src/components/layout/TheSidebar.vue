<template>
  <aside class="aside">
    <div class="aside-body">
      <figure class="aside-body__img">
        <img src="@/assets/images/layout/MyImages.jpg" alt="" />
      </figure>
      <div class="aside-body__content">
        <h1 class="aside-body__title">امین مدرسی</h1>
        <div class="aside-body__jobSide">Front-end Developer</div>
        <div class="aside-body__socialList">
          <a
            href="https://t.me/AminModaresii"
            class="aside-body__socialList_item"
          >
            <unicon
              width="20"
              name="telegram-alt"
              fill="#00000050"
              icon-style="thinline"
            ></unicon>
          </a>
          <a
            href="https://www.linkedin.com/in/amin-modaresi-4130a021b/"
            class="aside-body__socialList_item"
          >
            <unicon
              width="20"
              name="linkedin-alt"
              fill="#00000050"
              icon-style="thinline"
            ></unicon>
          </a>
          <a
            href="https://www.instagram.com/aminmodaresi_/"
            class="aside-body__socialList_item"
          >
            <unicon width="20" name="instagram" fill="#00000050"></unicon>
          </a>
          <a
            href="https://github.com/AminModaresi"
            class="aside-body__socialList_item"
          >
            <unicon
              width="20"
              name="github-alt"
              fill="#00000050"
              icon-style="thinline"
            ></unicon>
          </a>
        </div>
        <ul class="aside-body__personalData">
          <li class="aside-body__personalData_item">
            <span>
              <unicon width="20" name="calender" fill="#00000080"></unicon>
            </span>
            <span class="text">۱۳۸۲/۲/۲۶</span>
          </li>
          <li class="aside-body__personalData_item">
            <span>
              <unicon
                width="20"
                name="map-marker-alt"
                fill="#00000080"
              ></unicon>
            </span>
            <span class="text">خراسان رضوی، مشهد</span>
          </li>
          <li class="aside-body__personalData_item">
            <span>
              <unicon width="20" name="phone-alt" fill="#00000080"></unicon>
            </span>
            <a href="tel:09156281180" class="text">۰۹۱۵۶۲۸۱۱۸۰</a>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@import "../../assets/sass/layout/sidebar.scss";
</style>