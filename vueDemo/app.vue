<template>
	<div id="app" class="title">
		<h1>{{msg}}</h1>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				msg: "biubiubiu"
			}
		}
	}
</script>
<style lang="scss" scoped>
    .title {
        cursor: pointer;
        width: 160px;
        height: 160px;
        margin: 50px auto;
        background-color: #009688;
        transition: all 2s;
        &:hover {
            box-shadow: 1px 2px 10px #bfba53;
            transform: rotate(360deg)
        }
        h1 {
            text-align: center;
        }
    }
</style>