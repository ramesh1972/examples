<script>	
	import Demo from './Demo.svelte';
  
  import('sharedMFE/commonStyles').then((module) => {
    console.log('Loaded module:', module);
	}).catch((error) => {
    	console.error('Error loading module:', error);
	});

  console.log("url for me ", process.env.SHARED_MFE_URL);
  const baseURL = process.env.FOOTER_URL || 'http://localhost:8081';

</script>

<div class="footer common-container">
	<div class="common-style">Footer MFE App (Developed in Svelte)<br/><img src={`${baseURL}/assets/images/svelte.png`} alt="" class="svelte-logo"/><div>Demo Notes</div></div>
	<Demo/>
</div>
<style>
	.footer{
		background-color: #aaa;
		font-size: 18px;
		font-weight: bold;
		text-align: center;
		height:100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.svelte-logo{
		width: 24px;
		height: 24px;
	}

</style>
