<template>
	<div class="index">
		<div class="fs-1">お問い合わせ</div>
		<br>
		<div class="err-msg-name"></div>
		<form class="contents fs-3">
			<div><label>名前</label><input class="input-row rounded"  alt="..." type="text" id="name" name="name"></div>
			<br>
			<div><label>住所</label><input class="input-row rounded"  alt="..." type="text" id="name" name="name"></div>
			<br>
			<div class = "message-label">
				<label>お問い合わせ内容</label>
			</div>
			<div>
				<p><textarea class="message rounded-3" name="story" rows="5" cols="33"></textarea></p>
			</div>
			<button v-on:click="send" type="button" class="submit-btn btn btn-primary btn-lg col-4">送信</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'Index',
		props: {
		msg: String
		},
		methods: {
		send: function () {
			const name = document.querySelector('#name');
			const errMsgName = document.querySelector('.err-msg-name');
			if(!name.value){
				errMsgName.textContent = '名前を入力してください。';   
				return;
			}
			alert(name);
			location.href = "./send-completely";
		},
	}
}

</script>


<style scoped>

.input-row {
	margin-left: 5%;
}

.contents {
	width: 96%;
}
.message-label{
	margin-right: 21%;
}
.message {
	margin-left: 12%;
}
.submit-btn {
	margin-top: 6%;
	margin-left: 10%;
}
</style>
