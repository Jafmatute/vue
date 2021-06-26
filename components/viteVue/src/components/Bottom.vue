<template>
<!-- <button type="button" name="button">{{msg}}</button> -->
<button type="button" name="button">
  <!-- permite reemplazar el contenido de un componemte -->
<slot>

</slot>
</button>
</template>

  <script type="text/javascript">
export default {
props:['msg']
}
  </script>
