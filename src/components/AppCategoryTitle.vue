<template>
	<div class="hogehoge">
			<h1 class="head_title"> {{ categoryTitle }} </h1>
			<p> {{ categoryDetail }} </p>
	</div>
</template>

<script>
export default {
  props: {
		categoryTitle: {
			type: String
		},
		categoryDetail: {
			type: String
		}
  },
};
</script>

<style scoped>
.hogehoge {
  text-align: center;
	margin: 1.5em auto;
	width: 55%;
}

.head_title {
	margin:  0;             /* デフォルトCSS打ち消し */
	font-size:  40px;       /* 文字サイズ指定 */
	border-bottom:  solid;  /* 線指定 */
	padding-bottom:  5px;   /* 余白指定 */
	margin-bottom: 15px;    /* 周りの余白指定 */
}
</style>

