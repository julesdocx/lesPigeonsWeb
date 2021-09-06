<template>
  <div class="gallery">
    <div class="gridContainer">
      <div class="image top"></div>
      <div class="image right"></div>
      <div class="image bottomLeft"></div>
      <div class="image bottomRight"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "assets/sass/imports.scss";
.gallery{
  display: flex;
  justify-content: center;
  align-items: center;
}
.gridContainer {
     display: grid;
     grid-gap: 10px;
     grid-template-columns: 400px 400px 400px;
     height: 650px;
     margin: auto;


     .image {
       color: #fff;
       border-radius: 5px;
       padding: 20px;

    



     }

     .top {
       grid-column: 1 / span 2;
       background-image: url("../pigeonWorkImages/pigeonsGreen.jpg");
       background-size: cover;
       background-position: center;

     }

     .right {
       grid-column: 3;
       grid-row: 1 / span 2;
       background-image: url("../pigeonWorkImages/241166240_248707393791382_3840264752135784056_n.jpg");
       background-size: cover;
       background-position: center;

     }

     .bottomLeft {
       grid-column: 1;
       grid-row: 2;
       background-image: url("../pigeonWorkImages/241149271_535493844227655_8490536192328294851_n.jpg");
       background-size: cover;
       background-position: center;

     }

     .bottomRight {
       grid-column: 2;
       grid-row: 2;
       background-image: url("../pigeonWorkImages/241124951_1025629714874316_5002180868361508941_n.png");
       background-size: cover;
       background-position: center;

     }
   }
 
</style>
