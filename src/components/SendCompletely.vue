<template>
	<div class="sendcompletely">
		<div class="fs-1">お問い合わせありがとうございます。</div>
		<p class="fs-3">ご記入いただいた情報は送信されました。</p>
	</div>
	<button v-on:click="moveTop" type="button" class="top-page-btn btn btn-primary btn-lg col-4">トップページに戻る</button>
</template>

<script>
export default {
	name: 'SendCompletely',
	methods: {
		moveTop: function () {

			location.href = "./";
		},
	}
}
</script>


<style scoped>
.fs-3 {
	margin-top: 10vh;
}

.top-page-btn {
	margin-top: 10vh;
}
</style>
